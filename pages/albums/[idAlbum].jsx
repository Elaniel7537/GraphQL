import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
// antd
import { Card, Row, Typography, Col, Divider, Empty, Image } from "antd";
// components
import ButtonComponent from "@atoms/button";
// graphQL
import { GET_ALBUM } from "@graphQl/albums";

const { Text, Title } = Typography;
const { Meta } = Card;

const getAlbum = () => {
  const [photos, setPhotos] = useState([]);
  const [albumData, setAlbumData] = useState(null);
  const router = useRouter();
  const { idAlbum } = router.query;

  const [getPostUser, { loading }] = useLazyQuery(GET_ALBUM, {
    variables: { id: idAlbum },
    onCompleted({ album }) {
      setPhotos(album.photos.data);
      setAlbumData(album.title);
    },
  });

  useEffect(() => {
    getPostUser();
  }, []);

  return (
    <Row gutter={[16, 16]} className="preview-users">
      <Col span={24} className="header-user-posts">
        <div className="header-item">
          <Title level={4}>Galeria de Imagenes</Title>
          <Text>{`Albun ${idAlbum} : ${albumData}`}</Text>
        </div>
        <div className="header-item">
          <ButtonComponent
            type="primary"
            title="Lista de Albunes"
            path="/albums"
          />
        </div>
      </Col>
      <Divider />
      <Col span={24}>
        <div className="contend-posts">
          {loading ? (
            <div className="post-item">
              <Card style={{ width: 240 }} loading></Card>
            </div>
          ) : photos.length > 0 ? (
            photos.map((resp) => {
              return (
                <div className="post-item" key={resp.id}>
                  <Image width={200} src={resp.url} />
                </div>
              );
            })
          ) : (
            <div className="post-item">
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="no tiene posts"
              />
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};
export default getAlbum;
