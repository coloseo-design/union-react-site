import React from 'react';
import {
  Dropdown, Button, Icon, Menu,
} from 'union-design';

/* start
  <h3>展示不同位置下拉菜单</h3>
end */
export default () => {
  const [visible, setVisible] = React.useState(false);
  const menu = (
    <Menu>
      <Menu.Item icon={<Icon type="user" />}>
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
  );
  const handleButtonClick = () => {
    setVisible(!visible);
  };

  const test = (
    <div onClick={handleButtonClick} style={{ width: 130, padding: 12 }}>
      <div style={{ height: 32 }}>联通设计系统1</div>
      <div style={{ height: 32 }}>联通设计系统2</div>
    </div>
  );

  return (
    <div>
      <Dropdown
        placement="bottomLeft"
        overlay={test}
        arrow
        visible={visible}
        onVisibleChange={(v) => setVisible(v)}
        trigger={['click']}
        overlayStyle={{ width: 130 }}
      >
        <Button style={{ margin: 12 }}>bottomLeft</Button>
      </Dropdown>
      <Dropdown placement="bottomCenter" overlayStyle={{ width: '100px' }} trigger={['click']} overlay={menu} arrow>
        <Button style={{ margin: 12 }}>bottomCenter</Button>
      </Dropdown>
      <Dropdown placement="bottomRight" overlay={menu} arrow>
        <Button style={{ margin: 12 }}>hover bottomRight</Button>
      </Dropdown>
      <Dropdown placement="topLeft" overlay={menu}>
        <Button style={{ margin: 12 }}>hover topLeft</Button>
      </Dropdown>
      <Dropdown placement="topCenter" overlay={menu}>
        <Button style={{ margin: 12 }}>hover topCenter</Button>
      </Dropdown>
      <Dropdown placement="topRight" overlay={menu}>
        <Button style={{ margin: 12 }}>hover topCenter</Button>
      </Dropdown>
    </div>
  );
};
