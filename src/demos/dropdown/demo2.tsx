import React from 'react';
import {
  Dropdown, Button, Icon, Menu,
} from 'union-design';

/* start
  <h3>右键点击弹出菜单</h3>
end */
export default () => {
  const test = (
    <div style={{ width: 130, padding: 12 }}>
      <div style={{ height: 32 }}>联通设计系统1</div>
      <div style={{ height: 32 }}>联通设计系统2</div>
    </div>
  );

  return (
    <div>
      <Dropdown placement="topRight" overlay={test} trigger={['contextMenu']}>
        <Button>右键点击 topRight</Button>
      </Dropdown>
    </div>
  );
};
