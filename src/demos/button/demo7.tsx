import React from 'react';
import { Button } from 'union-design';

/* start
<div>
 <h3>禁用按钮</h3>
</div>
end */
export default () => (
  <div>
    <Button type="primary" disabled style={{ marginRight: 10 }} size="large">large</Button>
    <Button type="primary" disabled style={{ marginRight: 10 }} size="default">default</Button>
    <Button type="primary" disabled size="small">small</Button>
  </div>
);
