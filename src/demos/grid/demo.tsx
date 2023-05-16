import React from 'react';
import { Row, Col } from 'union-design';

const GridDemo = () => {
  const style: any = {
    color: '#fff', textAlign: 'center', lineHeight: '30px', height: 30,
  };
  return (
    <Row
      gutter={[{ xl: 10, xxl: 20 }, { xl: 20, xxl: 40 }]}
      justify="center"
      align="middle"
      type="flex"
    >
      <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
        <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
      </Col>
      <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
        <div style={{ ...style, background: '#0092ff' }}>col-8</div>
      </Col>
      <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
        <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
      </Col>
    </Row>
  );
};

export default GridDemo;
