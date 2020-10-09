import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// antd
import { Menu } from "antd";
import { TeamOutlined, HomeOutlined, PictureOutlined } from "@ant-design/icons";
import { route } from "next/dist/next-server/server/router";

const siderMenu = () => {
  const router = useRouter();
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={[router.pathname]} mode="inline">
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <Link href="/">
            <a>Panel</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/users" icon={<TeamOutlined />}>
          <Link href="/users">
            <a>Lista de Usuarios</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/albums" icon={<PictureOutlined />}>
          <Link href="/albums">
            <a>Lista de Álbunes</a>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default siderMenu;
