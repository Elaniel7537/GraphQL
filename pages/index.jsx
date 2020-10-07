import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
// antd
import { Tag, Space, Col, Row } from "antd";
// components
import TableUsers from "@components/molecules/table";
import { GET_USERS } from "@graphQl/users.jsx";

const Home = () => {
  // informacion para la tabla
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Usuario",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Correo",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Télefono",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Acciones",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Editar</a>
          <a>Borrar</a>
        </Space>
      ),
    },
  ];

  const { loading, data } = useQuery(GET_USERS);
  
  return (
    <div className="home-contend">
      <Row gutter={16} className="site-card-wrapper">
        <Col span={24}>
          <TableUsers
            columns={columns}
            dataSource={!loading ? data.users.data : []}
            loading={loading}
            title="Lista de Usuarios"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
