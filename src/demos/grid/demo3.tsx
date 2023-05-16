import React from 'react';
import { Row, Col } from 'union-design';

/* start
<h3>offset演示</h3>
end */

export default () => {
  const style: any = {
    color: '#fff', textAlign: 'center', lineHeight: '30px', height: 30,
  };
  return (
    <div>
      <Row
        gutter={[{ xl: 10, xxl: 20 }, { xl: 20, xxl: 40 }]}
      >
        <Col span={6} offset={1}>
          <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-6</div>
        </Col>
        <Col span={6} offset={1}>
          <div style={{ ...style, background: '#0092ff' }}>col-6</div>
        </Col>
        <Col span={6} offset={1}>
          <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-6</div>
        </Col>
      </Row>
    </div>
  );
};
