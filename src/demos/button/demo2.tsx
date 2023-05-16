import React from 'react';
import { Button } from 'union-design';

/* start
<div>
<h3>虚线按钮</h3>
<p>虚线按钮：常用于添加操作。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
</div>
end */
export default () => (
  <div>
    <Button type="dashed" style={{ marginRight: 10 }} size="large">large</Button>
    <Button type="dashed" style={{ marginRight: 10 }} size="default">default</Button>
    <Button type="dashed" size="small">small</Button>
  </div>
);
