import React from 'react';
import { Avatar } from 'union-design';

/* start
<div>
<h3>基本用法</h3>
</div>
end */

const AvatarDemo = () => (
  <div>
    <Avatar>田姬辰</Avatar>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 50 }} />
    <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 50 }} size={50} />
    <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 50 }} size={100} />
  </div>
);

export default AvatarDemo;
