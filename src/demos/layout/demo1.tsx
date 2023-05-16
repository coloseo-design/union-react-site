import React from 'react';
import { Layout, Menu } from 'union-design';

/* start
<h3>侧边布局</h3>
end */
export default () => {
  const {
    Header, Footer, Sider, Content,
  } = Layout;
  const layoutStyle = { color: 'white', textAlign: 'center' };
  const headerStyle = { background: '#7dbcea' };
  const contentStyle = { background: 'rgba(16, 142, 233, 1)', height: 120, lineHeight: '120px' };
  const [dataT, setData] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);
  return (
    <>
      <Layout>
        {dataT && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(_collapsed: boolean) => { setCollapsed(_collapsed); }}
          theme="light"
        >
          <div style={{ textAlign: 'center' }}>logo</div>
          <Menu theme="light">
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
            <Menu.SubMenu icon="image" title="工作台5">
              <Menu.Item>
                工作台1
              </Menu.Item>
              <Menu.Item icon="image">
                工作台2
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        )}
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={headerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
};
