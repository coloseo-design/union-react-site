/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Button } from 'union-design';

/* start
<div>
<h3>主按钮</h3>
  <p>主按钮：突出“完成”、“推荐”类操作；一个按钮区最多使用一个主按钮。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
</div>
end */
const ButtonDemo: React.FC<unknown> = () => (
  <div>
    <Button type="primary" style={{ marginRight: 10 }} size="large">large</Button>
    <Button type="primary" style={{ marginRight: 10 }} size="default">default</Button>
    <Button type="primary" size="small">small</Button>
  </div>
);

export default ButtonDemo;
