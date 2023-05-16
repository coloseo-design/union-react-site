import React from 'react';
import { Button } from 'union-design';

/* start
<div>
<h3>次按钮</h3>
<p style={{ marginTop: 8 }}>次按钮：用于非主要动作。如果不确定选择哪种按钮，次按钮永远是最安全的选择。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
</div>
end */
export default () => (
  <div>
    <Button style={{ marginRight: 10 }} size="large">large</Button>
    <Button style={{ marginRight: 10 }} size="default">default</Button>
    <Button size="small">small</Button>
  </div>
);
