import React from 'react';
import {
  Dropdown, Icon, Menu,
} from 'union-design';

/* start
  <h3>按钮形式的dropdown</h3>
  <p>设置不同大小，不同类型的button</p>
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
      <Dropdown.Button overlay={menu} size="large" icon={<Icon style={{ fontSize: 16 }} type="zoomout" />}>
        bigButton
      </Dropdown.Button>
      <br />
      <br />
      <br />
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
      <br />
      <br />
      <br />
      <Dropdown.Button overlay={menu} size="small" icon={<Icon style={{ fontSize: 12 }} type="zoomout" />}>
        small Button
      </Dropdown.Button>
      <br />
      <br />
      <br />
      <Dropdown.Button overlay={test} type="dashed">
        dashed
      </Dropdown.Button>
      <br />
      <br />
      <br />
      <Dropdown.Button type="link" overlay={test}>
        dashed
      </Dropdown.Button>
      <br />
      <br />
      <br />
      <Dropdown.Button
        overlay={menu}
        disabled
        type="primary"
        icon={<Icon style={{ fontSize: 14 }} type="zoomout" />}
      >
        primary dropdown
      </Dropdown.Button>
    </>
  );
};

export default DropdownDemo;
