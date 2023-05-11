import React from 'react';
import { BackTop } from 'union-design';
import Codeframe from '../../components/code-frame';

const BackTopDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { BackTop } from 'union-design';

const demo = () => (
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
      `}
      rightDemo={(
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
      )}
      description={(
        <h3>回到顶部</h3>
      )}
    />
  </div>
);

export default BackTopDemo;
