import React from 'react';
import {
  Dropdown, Button, Icon, Menu,
} from 'union-design';

import CodeFrame from '../../components/code-frame';

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
    <div>
      <CodeFrame
        rightCode={`
          import React from 'react';
          import {
            Dropdown, Button, Icon,
          } from 'union-design';

          const Demo = () => {
            const test = (
              <div style={{ width: 130, padding: 12 }}>
                <div style={{ height: 32 }}>联通设计系统1</div>
                <div style={{ height: 32 }}>联通设计系统2</div>
              </div>
            );
            return (
              <Dropdown
                placement="bottomLeft"
                overlay={test}
                arrow
                trigger={['hover']}
                overlayStyle={{ width: 130 }}
              >
                <Button onClick={handleButtonClick}>open bottomLeft</Button>
              </Dropdown>
            )
          }
        `}
        rightDemo={(
          <Dropdown
            placement="bottomLeft"
            overlay={test}
            arrow
            trigger={['hover']}
          >
            <Button onClick={handleButtonClick}>hover bottomLeft</Button>
          </Dropdown>
        )}
        description={
          <h3>基本用法</h3>
        }
      />
      <CodeFrame
        rightCode={`
        import React from 'react';
        import {
          Dropdown, Button, Icon, Menu,
        } from 'union-design';
          const Demo = () => {
            const [visible, setVisible] = React.useState(false);
            const handleButtonClick = () => {
              setVisible(!visible);
            };
            const onVisibleChange = (vis: boolean) => {
              console.log('--change', vis);
            };
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
            return (
              <div>
                <Dropdown
                  placement="bottomLeft"
                  overlay={menu}
                  arrow
                  visible={visible}
                  onVisibleChange={onVisibleChange}
                  trigger={['click']}
                  overlayStyle={{ width: 130 }}
                >
                  <Button style={{ margin: 12 }} onClick={handleButtonClick}>bottomLeft</Button>
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
            )
          }
        `}
        rightDemo={(
          <div>
            <Dropdown
              placement="bottomLeft"
              overlay={test}
              arrow
              visible={visible}
              onVisibleChange={onVisibleChange}
              trigger={['click']}
              overlayStyle={{ width: 130 }}
            >
              <Button style={{ margin: 12 }} onClick={handleButtonClick}>bottomLeft</Button>
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
        )}
        description={
          <h3>不同位置下拉菜单</h3>
        }
      />
      <CodeFrame
        rightCode={`
        const test = (
          <div style={{ width: 130, padding: 12 }}>
            <div style={{ height: 32 }}>联通设计系统1</div>
            <div style={{ height: 32 }}>联通设计系统2</div>
          </div>
        );
        const Demo = () => {
          return (
            <Dropdown placement="topRight" overlay={menu} trigger={['contextMenu']}>
              <Button>右键点击 topRight</Button>
            </Dropdown>
          )
        }
        `}
        rightDemo={(
          <Dropdown placement="topRight" overlay={test} trigger={['contextMenu']}>
            <Button>右键点击 topRight</Button>
          </Dropdown>
        )}
        description={
          <h3>右键点击弹出菜单</h3>
        }
      />
      <CodeFrame
        rightCode={`
        import React from 'react';
        import {
          Dropdown, Button, Icon, Menu,
        } from 'union-design';
       const Demo = () => {
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
        )
       }
        `}
        rightDemo={(
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
        )}
        description={
          <h3>下拉菜单带按钮</h3>
        }
      />
    </div>
  );
};

export default DropdownDemo;
