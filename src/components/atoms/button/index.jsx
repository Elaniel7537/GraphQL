import React, { useEffect } from "react";
import Link from "next/link";
// antd
import { Button } from "antd";

const ButtonComponent = (props) => {
  const { type, title, path } = props;

  useEffect(() => {
    console.log("hola desde button");
  }, []);

  return (
    <Link href={path}>
      <Button type={type}>{title}</Button>
    </Link>
  );
};

export default ButtonComponent;
