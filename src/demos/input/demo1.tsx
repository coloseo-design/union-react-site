import React from 'react';
import { Input } from 'union-design';

/* start
<h3>Input 不可编辑样式</h3>
end */
export default () => (
  <div style={{ width: 256 }}>
    <Input
      disabled
      placeholder="不可编辑"
    />
  </div>
);
