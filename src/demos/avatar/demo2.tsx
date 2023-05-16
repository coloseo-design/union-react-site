import React from 'react';
import { Avatar, Badge } from 'union-design';

/* start
<div>
<h3>带微标的头像</h3>
</div>
end */

export default () => (
  <div>
    <Badge dot>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </Badge>
    <Badge count={8} style={{ marginLeft: 50 }}>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </Badge>
    <Badge count={88} overflowCount={105} style={{ marginLeft: 50 }}>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </Badge>
    <Badge count={888} overflowCount={999} style={{ marginLeft: 50 }}>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      {' '}

    </Badge>
    <Badge count={1000} overflowCount={888} style={{ marginLeft: 50 }}>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </Badge>
  </div>
);
