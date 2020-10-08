import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";
// antd
import { Tag, Space, Col, Row, Tooltip, Button } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
// components
import TableUsers from "@components/molecules/table";
// graphQL
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
          <Link href={`/users/${record.id}`}>
            <Tooltip title="VER POSTS">
              <Button
                type="dashed"
                shape="circle"
                icon={<AppstoreAddOutlined />}
              />
            </Tooltip>
          </Link>
        </Space>
      ),
    },
  ];
  const [userId, setUsesId] = useState(null);

  const { loading, data } = useQuery(GET_USERS);

  return (
    <Row gutter={[16, 16]} className="home-contend">
      <Col span={24}>
        <TableUsers
          columns={columns}
          dataSource={!loading ? data.users.data : []}
          loading={loading}
          title="Lista de Usuarios"
        />
      </Col>
    </Row>
  );
};

export default Home;
