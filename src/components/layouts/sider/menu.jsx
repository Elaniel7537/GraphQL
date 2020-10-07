import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// antd
import { Menu } from "antd";
import { TeamOutlined, PictureOutlined } from "@ant-design/icons";

const siderMenu = () => {
  const Router = useRouter();
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={[Router.pathname]} mode="inline">
        <Menu.Item key="/" icon={<TeamOutlined />}>
          <Link href="/">
            <a>Lista de Usuarios</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/albums" icon={<PictureOutlined />}>
          <Link href="/albums">
            <a>Lista de Albunes</a>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default siderMenu;
