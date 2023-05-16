import React from 'react';
import { Button } from 'union-design';

/* start
<div>
  <h3>加载按钮</h3>
  <p>加载按钮：用于异步操作等待反馈的时候，也可以避免多次提交。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
</div>
end */
export default () => (
  <div>
    <Button type="primary" loading style={{ marginRight: 10 }} size="large">large</Button>
    <Button type="primary" loading style={{ marginRight: 10 }} size="default">default</Button>
    <Button type="primary" loading size="small">small</Button>
  </div>
);
