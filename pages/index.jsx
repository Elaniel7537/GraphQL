import React, { useState } from "react";
// antd
import { Col, Row, Typography, Divider, Button } from "antd";
// components
import CardListComponent from "@atoms/card";

const { Title, Text } = Typography;

const Home = () => {
  const [list] = useState([
    {
      key: "1",
      title: "Listar Usuarios",
      cover:
        "https://st2.depositphotos.com/1003434/10630/i/450/depositphotos_106304994-stock-photo-little-girl-outdoors.jpg",
      path: "/users",
    },
    {
      key: "2",
      title: "Listar Álbunes",
      cover:
        "https://st2.depositphotos.com/1003434/10630/i/450/depositphotos_106304994-stock-photo-little-girl-outdoors.jpg",
      path: "/albums",
    },
  ]);

  return (
    <Row gutter={[16, 16]} className="home-contend">
      <Col span={24}>
        <Title level={3}>Panel de Inicio</Title>
        <Text>Listas Disponibles</Text>
      </Col>
      <Divider />
      {list.map((resp) => {
        return (
          <Col span={4} key={resp.key}>
            <CardListComponent item={resp} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Home;
