import React from 'react';
import {
  Dropdown, Icon, Menu,
} from 'union-design';

/* start
  <h3>下拉菜单带按钮</h3>
end */

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
const test = (
  <div style={{ width: 130, padding: 12 }}>
    <div style={{ height: 32 }}>联通设计系统1</div>
    <div style={{ height: 32 }}>联通设计系统2</div>
  </div>
);
const DropdownDemo = () => {
  const [visible, setVisible] = React.useState(false);
  const handleButtonClick = () => {
    setVisible(!visible);
  };
  const onVisibleChange = (vis: boolean) => {
    console.log('--change', vis);
  };

  return (
    <>
      <Dropdown.Button
        overlay={menu}
        type="primary"
        icon={<Icon style={{ fontSize: 14 }} type="zoomout" />}
        onClick={handleButtonClick}
        onVisibleChange={onVisibleChange}
        trigger={['click']}
      >
        primary dropdown
      </Dropdown.Button>
      <Dropdown.Button overlay={menu} size="large" icon={<Icon style={{ fontSize: 16 }} type="zoomout" />}>
        bigButton
      </Dropdown.Button>
      <Dropdown.Button overlay={menu} size="small" icon={<Icon style={{ fontSize: 12 }} type="zoomout" />}>
        small Button
      </Dropdown.Button>
      <Dropdown.Button overlay={menu} type="dashed">
        dashed
      </Dropdown.Button>
      <Dropdown.Button type="link" overlay={menu}>
        dashed
      </Dropdown.Button>
    </>
  );
};

export default DropdownDemo;
