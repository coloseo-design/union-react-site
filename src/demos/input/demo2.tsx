import React from 'react';
import { Input, Icon } from 'union-design';

/* start
<h3>设置前置/后置标签</h3>
end */
export default () => (
  <div style={{ width: 256 }}>
    <Input allowClear addonBefore={<Icon type="add" />} addonAfter="后" />
    <br />
    <br />
    <Input allowClear addonBefore="https://" />
    <br />
    <br />
    <Input style={{ width: 256 }} addonAfter={<Icon type="user" />} />
  </div>
);
