import React from 'react';
import { Tabs, Icon } from 'union-design';

/* start
<h3>type='card'</h3>
end */

export default () => {
  const { Pane } = Tabs;
  return (
    <div>
      <Tabs defaultActiveKey="2" type="card">
        <Pane key="1" tab="页签">
          <div style={{ height: 60, padding: 12 }}>页面1</div>
        </Pane>
        <Pane key="2" tab="四字页签">
          <div style={{ height: 60, padding: 12 }}>页面2</div>
        </Pane>
        <Pane tab="五个字页签" key="3">
          <div style={{ height: 60, padding: 12 }}>页面3</div>
        </Pane>
        <Pane
          key="4"
          tab={(
            <span>
              <Icon type="apps" style={{ paddingRight: 8, color: '#444A5E' }} />
              带icon页签
            </span>
        )}
        >
          <div style={{ height: 60, padding: 12 }}>页面4</div>
        </Pane>
      </Tabs>
    </div>
  );
};
