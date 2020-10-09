import React, { useState } from "react";
import { useQuery } from "@apollo/client";
// antd
import { Card, Col, Row, Typography, Divider } from "antd";
import { SyncOutlined } from "@ant-design/icons";
// components
import CardListAlbums from "@molecules/albums/CardListAlbums";
import ButtonComponent from "@atoms/button";
// graphQL
import { GET_ALBUMS } from "@graphQl/albums";

const { Title, Text } = Typography;

const Albums = () => {
  const [loadingItem] = useState([1, 2, 3, 4]);
  const { loading, data } = useQuery(GET_ALBUMS);

  return (
    <Row gutter={[16, 16]} className="preview-albums">
      <Col span={24} className="header-albums-list">
        <div className="header-item">
          <Title level={3}>Lista de Albunes</Title>
          <Text>
            Albunes Disponibles : 
            {loading ? <SyncOutlined spin /> : data.albums.data.length}
          </Text>
        </div>
        <div className="header-item">
          <ButtonComponent type="primary" title="Volver al Panel" path="/" />
        </div>
      </Col>
      <Divider />

      <div className="contend-posts">
        {loading
          ? loadingItem.map((resp, index) => (
              <div className="post-item" key={index}>
                <Card style={{ width: 240 }} loading></Card>
              </div>
            ))
          : data.albums.data.map((resp) => (
              <div className="post-item" key={resp.id}>
                <CardListAlbums item={resp} />
              </div>
            ))}
      </div>
    </Row>
  );
};

export default Albums;
