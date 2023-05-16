import React from 'react';
import { Button } from 'union-design';

/* start
<div>
<h3>幽灵按钮</h3>
</div>
end */
export default () => (
  <div style={{
    width: '80%', margin: 12, backgroundColor: '#ACAFB9', padding: '12px 16px',
  }}
  >
    <Button type="ghost" style={{ marginRight: 10 }} size="large">large</Button>
    <Button type="ghost" style={{ marginRight: 10 }} size="default">default</Button>
    <Button type="ghost" size="small">small</Button>
  </div>
);
