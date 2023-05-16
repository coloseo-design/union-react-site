import React from 'react';
import { Card, Icon } from 'union-design';

const CardDemo = () => (
  <div>
    <Card title="card1 点我试一试" onClick={() => { alert('点击card'); }}>
      card内容
    </Card>
  </div>
);

export default CardDemo;
