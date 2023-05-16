import React from 'react';
import { Button } from 'union-design';

/* start
<div>
 <h3>危险按钮</h3>
 <p >危险按钮：删除/移动/修改权限等危险操作，一般需要二次确认。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
</div>
end */
export default () => (
  <div>
    <Button type="danger" style={{ marginRight: 10 }} size="large">large</Button>
    <Button type="danger" style={{ marginRight: 10 }} size="default">default</Button>
    <Button type="danger" size="small">small</Button>
  </div>
);
