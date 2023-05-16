/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Layout } from 'union-design';

/* start
<h3>基本结构</h3>
end */

const LayoutDemo = () => {
  const {
    Header, Footer, Sider, Content,
  } = Layout;
  const layoutStyle: any = { color: 'white', textAlign: 'center' };
  const headerStyle: any = { background: '#7dbcea' };
  const contentStyle: any = { background: 'rgba(16, 142, 233, 1)', height: 120, lineHeight: '120px' };
  const siderStyle: any = { background: '#3ba0e9', lineHeight: '120px' };
  return (
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
  );
};

export default LayoutDemo;
