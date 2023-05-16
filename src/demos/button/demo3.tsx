import React from 'react';
import { Button } from 'union-design';

/* start
<div>
<h3>链接按钮</h3>
<p>链接按钮：用于次要或外链的行动点。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
</div>
end */
export default () => (
  <div>
    <Button type="link" style={{ marginRight: 10 }} size="large">large</Button>
    <Button type="link" style={{ marginRight: 10 }} size="default">default</Button>
    <Button type="link" size="small">small</Button>
  </div>
);
