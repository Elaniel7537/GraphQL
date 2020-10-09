import React from "react";
import Link from "next/link";
// antd
import { Card } from "antd";
import { SendOutlined } from "@ant-design/icons";

const CardListComponent = (props) => {
  const { item } = props;
  return (
    <>
      <Card
        title={item.title}
        cover={<img alt="example" src={item.cover} />}
        actions={[
          <Link href={item.path}>
            <SendOutlined key="Enviar" />
          </Link>,
        ]}
        bordered
        hoverable
      ></Card>
    </>
  );
};

export default CardListComponent;
