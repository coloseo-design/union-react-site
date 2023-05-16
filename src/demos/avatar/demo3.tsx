import React from 'react';
import { Avatar, Icon, Badge } from 'union-design';

/* start
<div>
<h3>自定义icon，带微标</h3>
</div>
end */

export default () => (
  <div>
    <Badge dot>
      <Avatar icon={<Icon type="user-circle" />} />
      {' '}

    </Badge>
    <Badge count={8} style={{ marginLeft: 50 }}>
      {' '}
      <Avatar icon={<Icon type="user-circle" />} />
    </Badge>
    <Badge count={88} overflowCount={105} style={{ marginLeft: 50 }}>
      <Avatar icon={<Icon type="user-circle" />} />
    </Badge>
    <Badge count={888} overflowCount={999} style={{ marginLeft: 50 }}>
      <Avatar icon={<Icon type="user-circle" />} />
    </Badge>
    <Badge count={1000} overflowCount={888} style={{ marginLeft: 50 }}>
      <Avatar icon={<Icon type="user-circle" />} />
    </Badge>
  </div>
);
