import React from 'react';
import { Badge } from 'union-design';

const BadgeDemo = () => (
  <div>
    <Badge count={10} />
    <Badge count={100} overflowCount={99} style={{ margin: '0 50px' }} />
    <Badge count={10} dot />
    <Badge showZero style={{ marginLeft: 50 }} />
  </div>
);

export default BadgeDemo;
