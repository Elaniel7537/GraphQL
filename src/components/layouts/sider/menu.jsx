import React, { useEffect, useState } from "react";
// import Link from "next/link";
// antd
import { Menu } from "antd";
import { TeamOutlined, PictureOutlined } from "@ant-design/icons";
// styles
import "@styles/layouts/menu.less";

const siderMenu = () => {
   return (
    <>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<TeamOutlined />}>
          Usuarios
        </Menu.Item>
        <Menu.Item key="2" icon={<PictureOutlined />}>
          Fotos
        </Menu.Item>
      </Menu>
    </>
  );
};

export default siderMenu;
