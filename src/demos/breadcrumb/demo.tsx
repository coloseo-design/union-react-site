/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Breadcrumb } from 'union-design';

const BreadcrumbDemo = () => (
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
);

export default BreadcrumbDemo;
