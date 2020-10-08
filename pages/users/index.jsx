import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
// antd
import { Space, Col, Row, Tooltip, Button, Typography, Divider } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
// components
import TableUsers from "@components/molecules/table";
import ButtonComponent from "@atoms/button";
// graphQL
import { GET_USERS } from "@graphQl/users";

const { Title, Text } = Typography;

const Home = () => {
  const router = useRouter();
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
          <Tooltip title="VER POSTS">
            <Button
              type="dashed"
              shape="circle"
              icon={<AppstoreAddOutlined />}
              onClick={() => router.push(`/users/${record.id}`)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const { loading, data } = useQuery(GET_USERS);
  return (
    <Row gutter={[16, 16]} className="preview-users">
      <Col span={24} className="header-users-list">
        <div className="header-item">
          <Title level={3}>Lista de Usuarios</Title>
          <Text>Usuarios Registrados</Text>
        </div>
        <div className="header-item">
          <ButtonComponent type="primary" title="Volver al Panel" path="/" />
        </div>
      </Col>
      <Divider />
      <Col span={24}>
        <TableUsers
          columns={columns}
          dataSource={!loading ? data.users.data : []}
          loading={loading}
        />
      </Col>
    </Row>
  );
};

export default Home;
