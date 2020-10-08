import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// antd
import { Menu } from "antd";
import { TeamOutlined, HomeOutlined } from "@ant-design/icons";
import { route } from "next/dist/next-server/server/router";

const siderMenu = () => {
  const [key, setKey] = useState("/");
  const router = useRouter();

  useEffect(() => {
    setKey(router.pathname);
  }, []);
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={[key]} mode="inline">
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
        {/* <Menu.Item key="/albums" icon={<PictureOutlined />}>
          <Link href="/albums">
            <a>Lista de Albunes</a>
          </Link>
        </Menu.Item> */}
      </Menu>
    </>
  );
};

export default siderMenu;
