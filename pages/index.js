import React, { useState, useEffect } from "react";
// antd
import { Card, Col, Row } from "antd";

const Home = () => {
  const [item, setItem] = useState([
    { name: "Info - 1", id: 1 },
    { name: "Info - 2", id: 2 },
    { name: "Info - 3", id: 3 },
  ]);

  useEffect(() => {
    console.log(item);
  }, []);
  return (
    <div className="home-contend">
      <Row gutter={16} className="site-card-wrapper">
        {item.map((resp, key) => (
          <Col span={8} key={key}>
            <Card title="Card title" bordered={true} hoverable>
              {resp.name}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
