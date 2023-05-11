import React from 'react';
import { Layout, Menu } from 'union-design';
import Codeframe from '../../components/code-frame';

const {
  Header, Footer, Sider, Content,
} = Layout;

const LayoutDemo = () => {
  const layoutStyle = { color: 'white', textAlign: 'center' };
  const headerStyle = { background: '#7dbcea' };
  const contentStyle = { background: 'rgba(16, 142, 233, 1)', height: 120, lineHeight: '120px' };
  const siderStyle = { background: '#3ba0e9', lineHeight: '120px' };
  const [dataT, setData] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);
  return (
    <>
      <Codeframe
        rightCode={`
      import React from 'react';
      import { Layout, Menu } from 'union-design';

      const {
        Header, Footer, Sider, Content,
      } = Layout;

      const layoutStyle = { color: 'white', textAlign: 'center' };
      const headerStyle = { background: '#7dbcea' };
      const contentStyle = { background: 'rgba(16, 142, 233, 1)', height: 120, lineHeight: '120px' };
      const siderStyle = { background: '#3ba0e9', lineHeight: '120px' };
      const Demo = () => (
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={headerStyle}>Footer</Footer>
        </Layout>
        <br />
        <br />
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
          <Layout>
            <Sider style={siderStyle}>Sider</Sider>
            <Content style={contentStyle}>Content</Content>
          </Layout>
          <Footer style={headerStyle}>Footer</Footer>
        </Layout>
        <br />
        <br />
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
          <Layout>
            <Content style={contentStyle}>Content</Content>
            <Sider style={siderStyle}>Sider</Sider>
          </Layout>
          <Footer style={headerStyle}>Footer</Footer>
        </Layout>
      )
      `}
        rightDemo={(
          <>
            <Layout style={layoutStyle}>
              <Header style={headerStyle}>Header</Header>
              <Content style={contentStyle}>Content</Content>
              <Footer style={headerStyle}>Footer</Footer>
            </Layout>
            <br />
            <br />
            <Layout style={layoutStyle}>
              <Header style={headerStyle}>Header</Header>
              <Layout>
                <Sider style={siderStyle}>Sider</Sider>
                <Content style={contentStyle}>Content</Content>
              </Layout>
              <Footer style={headerStyle}>Footer</Footer>
            </Layout>
            <br />
            <br />
            <Layout style={layoutStyle}>
              <Header style={headerStyle}>Header</Header>
              <Layout>
                <Content style={contentStyle}>Content</Content>
                <Sider style={siderStyle}>Sider</Sider>
              </Layout>
              <Footer style={headerStyle}>Footer</Footer>
            </Layout>
          </>
      )}
        description={(
          <h3>基本结构</h3>
        )}
      />
      <Codeframe
        rightCode={`
        import React from 'react';
        import { Layout, Menu } from 'union-design';

        const [dataT, setData] = React.useState(false);
        const [collapsed, setCollapsed] = React.useState(false);
        React.useEffect(() => {
          setTimeout(() => {
            setData(true);
          }, 2000);
        }, []);
      const Demo = () => (
        <>
          <Layout>
          {dataT && (
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(_collapsed) => { setCollapsed(_collapsed); }}
              theme="light"
            >
              logo
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
      )
      `}
        rightDemo={(
          <>
            <Layout>
              {dataT && (
              <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(_collapsed) => { setCollapsed(_collapsed); }}
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
        )}
        description={(
          <h3>侧边布局</h3>
        )}
      />

    </>
  );
};

export default LayoutDemo;
