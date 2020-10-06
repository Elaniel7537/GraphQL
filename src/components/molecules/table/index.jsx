import React from "react";
// antd
import { Table, Divider, Typography } from "antd";

const { Title } = Typography;

const listTable = (props) => {
  const { columns, title, dataSource } = props;
  return (
    <>
      <Title level={3}>{title}</Title>
      <Divider />
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};

export default listTable;
