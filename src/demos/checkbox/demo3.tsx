import React from 'react';
import { Checkbox } from 'union-design';

/* start
<div>
<h3>不可用</h3>
<div>checkbox 不可用</div>
</div>
end */

export default () => (
  <div>
    <Checkbox disabled>未选中</Checkbox>
    <Checkbox disabled checked>选中</Checkbox>
    <Checkbox disabled indeterminate>全选</Checkbox>
  </div>
);
