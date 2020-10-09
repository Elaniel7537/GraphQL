import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
// antd
import { Card, Row, Typography, Col, Divider, Empty } from "antd";
// components
import ButtonComponent from "@atoms/button";
// graphQL
import { GET_POST_USER } from "@graphQl/users";

const { Text, Title } = Typography;
const { Meta } = Card;

const userPosts = () => {
  const [posts, setPost] = useState([]);
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const { idUser } = router.query;

  const [getPostUser, { loading }] = useLazyQuery(GET_POST_USER, {
    variables: { id: idUser },
    onCompleted({ user }) {
      setPost(user.posts.data);
      setUserData(user.name);
    },
  });

  useEffect(() => {
    getPostUser();
  }, []);

  return (
    <Row gutter={[16, 16]} className="preview-users">
      <Col span={24} className="header-user-posts">
        <div className="header-item">
          <Title level={4}>Lista de POSTS</Title>
          <Text>{`Usuario ${idUser} : ${userData}`}</Text>
        </div>
        <div className="header-item">
          <ButtonComponent
            type="primary"
            title="Lista de Usuarios"
            path="/users"
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
          ) : posts.length > 0 ? (
            posts.map((resp) => {
              return (
                <div className="post-item" key={resp.id}>
                  <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                      <img
                        alt="example"
                        src="https://www.mundodeportivo.com/r/GODO/MD/p7/MasQueDeporte/Imagenes/2020/01/05/Recortada/img_lbaquero_20190113-105028_imagenes_md_otras_fuentes_dua_4_5_4106297987-kNAD-U472722185864fJ-980x554@MundoDeportivo-Web.PNG"
                      />
                    }
                  >
                    <Meta title={resp.title} description={resp.body} />
                  </Card>
                  ,
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
export default userPosts;
