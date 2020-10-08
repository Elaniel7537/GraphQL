import React from "react";
// antd
import { Table, Divider, Typography } from "antd";

const { Title } = Typography;

const listTable = (props) => {
  const { columns, title, dataSource, loading } = props;
  return (
    <>
      <Title level={3}>{title}</Title>
      <Divider />
      <Table
        size="small"
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={dataSource}
      />
    </>
  );
};

export default listTable;
