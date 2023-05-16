import React, { useState } from 'react';
import { Menu, Switch } from 'union-design';

const Demo = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <>
      <div style={{
        marginBottom: 20, display: 'flex', flexFlow: 'row', alignItems: 'center',
      }}
      >
        theme:
        {' '}
        <Switch onChange={(s) => setTheme(s ? 'dark' : 'light')} />
      </div>
      <div style={{ height: 300, width: 206 }}>
        <Menu theme={theme} mode="vertical" inlineCollapsedIcon>
          <Menu.Item icon="image">
            工作台1
          </Menu.Item>
          <Menu.SubMenu icon="image" title="工作台3">
            <Menu.Item icon="image">
              工作台1
            </Menu.Item>
            <Menu.Item icon="image">
              工作台2
            </Menu.Item>
            <Menu.ItemGroup title="工作台3">
              <Menu.Item icon="image">
                工作台1
              </Menu.Item>
              <Menu.Item icon="image">
                工作台2
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.SubMenu title="工作台4">
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
          </Menu.SubMenu>
        </Menu>

      </div>
    </>
  );
};

export default Demo;
