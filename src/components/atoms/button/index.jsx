import React, { useEffect } from "react";
// antd
import { Button } from "antd";

const btnComponent = () => {
  useEffect(() => {
    console.log("hola desde button");
  }, []);

  return <Button type="primary">Primary Button</Button>;
};

export default btnComponent;
