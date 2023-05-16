import React, { useState } from 'react';
import { Menu } from 'union-design';

/* start
<h3>基本用法-下面弹出或者左侧弹出</h3>
end */
export default () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  return (
    <>
      <Menu
        style={{ height: '60vh', width: 300 }}
        onClick={console.log}
        theme={theme}
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['2', '7']}
        triggerSubMenuAction="click"
        inlineCollapsedIcon
      >
        <Menu.Item key="1" icon="image">
          工作台
        </Menu.Item>
        <Menu.SubMenu key="2" icon="image" title="表单页1">
          <Menu.Item key="3">
            表单页
          </Menu.Item>
          <Menu.SubMenu key="4" title="表单页2">
            <Menu.Item key="5">
              表单页2
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key="6">
          列表页
        </Menu.Item>
        <Menu.SubMenu key="7" title="详情页">
          <Menu.Item key="8">
            详情页
          </Menu.Item>
          <Menu.ItemGroup title="工作台3">
            <Menu.Item key="9" icon="image">
              工作台1
            </Menu.Item>
            <Menu.Item key="10" icon="image">
              工作台2
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>

      <div style={{ height: 20 }} />

      <Menu style={{ width: 300 }}>
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
          <Menu.SubMenu key="2" icon="image" title="表单页1">
            <Menu.Item key="3">
              表单页
            </Menu.Item>
            <Menu.SubMenu key="4" title="表单页2">
              <Menu.Item key="5">
                表单页2
              </Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
    </>
  );
};
