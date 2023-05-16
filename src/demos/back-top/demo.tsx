import React from 'react';
import { BackTop } from 'union-design';

/* start
<div>
<h3>回到顶部</h3>
</div>
end */

const BackTopDemo = () => (
  <div style={{ position: 'relative' }}>
    <div
      id="BackTopDemo"
      style={{
        height: 200, overflow: 'auto',
      }}
    >
      <div style={{ height: 2000 }}>滚动高度到达400时出现回到顶部的按钮</div>
    </div>
    <BackTop target={() => document.getElementById('BackTopDemo')} style={{ position: 'absolute', right: 20, bottom: 20 }} />
  </div>
);

export default BackTopDemo;
