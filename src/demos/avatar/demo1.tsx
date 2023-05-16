import React from 'react';
import { Avatar, Icon } from 'union-design';

/* start
<div>
<h3>自定义icon</h3>
</div>
end */

export default () => (
  <div>
    <Avatar icon={<Icon type="user-circle" />} />
    <Avatar icon={<Icon type="user-circle" />} style={{ marginLeft: 50 }} size={50} />
    <Avatar icon={<Icon type="user-circle" />} style={{ marginLeft: 50 }} size={100} />
  </div>
);
