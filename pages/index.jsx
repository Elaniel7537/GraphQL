import React, { useState, useEffect } from "react";
// antd
import { Table, Tag, Space, Col, Row, Typography, Divider } from "antd";
// components
import TableUsers from "@components/molecules/table";

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Edad",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Dirección",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Etiquetas",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "Lider") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
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

const data = [
  {
    key: "1",
    name: "Daniel",
    age: 32,
    address: "Venezuela",
    tags: ["Diseño", "Desarrollador"],
  },
  {
    key: "2",
    name: "Alejandro Sanchez",
    age: 42,
    address: "Venezuela",
    tags: ["Lider"],
  },
  {
    key: "3",
    name: "Lismar Russo",
    age: 32,
    address: "Venezuela",
    tags: ["Marketing", "Mujer"],
  },
];


const Home = () => {
  return (
    <div className="home-contend">
      <Row gutter={16} className="site-card-wrapper">
        <Col span={24}>
          <TableUsers
            columns={columns}
            dataSource={data}
            title="Lista de Usuarios"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
