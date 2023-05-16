import React from 'react';
import { Menu } from 'union-design';

/* start
<h3>menu-横向展示</h3>
end */
export default () => (
  <Menu mode="horizontal" style={{ width: '100%', position: 'relative' }} onSelect={console.log}>
    <Menu.Item>
      工作台1
    </Menu.Item>
    <Menu.SubMenu title="工作台2">
      <Menu.Item>
        工作台1
      </Menu.Item>
      <Menu.Item>
        工作台2
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="工作台3">
      <Menu.Item>
        工作台1
      </Menu.Item>
      <Menu.Item>
        工作台2
      </Menu.Item>
      <Menu.SubMenu icon="image" title="表单页1">
        <Menu.Item>
          表单页
        </Menu.Item>
        <Menu.SubMenu title="表单页2">
          <Menu.Item>
            表单页2
          </Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu.SubMenu>
    <Menu.Item>
      工作台21
    </Menu.Item>
    <Menu.Item>
      工作台23
    </Menu.Item>
  </Menu>
);
