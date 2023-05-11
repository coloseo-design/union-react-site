/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Breadcrumb } from 'union-design';
import CodeFrame from '../../components/code-frame';

const BreadcrumbDemo = () => (
  <CodeFrame
    rightCode={`
    import React from 'react';
    import { Breadcrumb } from 'union-design';

    const Demo = () => (
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>Application Center</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#/develop/components/list">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    )
    `}
    rightDemo={(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>Application Center</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a>Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    )}
    description={
      <h3>基本用法</h3>
    }
  />
);

export default BreadcrumbDemo;
