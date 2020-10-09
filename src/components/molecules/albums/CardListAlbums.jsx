import React from "react";
import Link from "next/link";
// antd
import { Card, Tooltip } from "antd";
import { SendOutlined } from "@ant-design/icons";

const { Meta } = Card;
const CardListAlbums = (props) => {
  const { item } = props;
  return (
    <>
      <Card
        // title={}
        cover={
          <img
            alt={item.id}
            src="https://i.pinimg.com/originals/01/99/36/019936806cacee62861410e2f886041a.jpg"
          />
        }
        actions={[
          <Link href={`/albums/${item.id}`}>
            <SendOutlined key="Enviar" />
          </Link>,
        ]}
        style={{ width: 240 }}
        bordered
        hoverable
      >
        <Meta
          title={<Tooltip title={item.title}>{item.title}</Tooltip>}
          description={
            <div>
              Persona: 
              <Tooltip title={item.user.name}> {item.user.name}</Tooltip>
            </div>
          }
        />
      </Card>
    </>
  );
};

export default CardListAlbums;
