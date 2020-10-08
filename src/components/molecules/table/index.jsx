import React from "react";
// antd
import { Table, Divider, Typography } from "antd";

const { Title } = Typography;

const listTable = (props) => {
  const { columns, dataSource, loading } = props;
  return (
    <>
      <Table
        size="small"
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1500 }}
      />
    </>
  );
};

export default listTable;
