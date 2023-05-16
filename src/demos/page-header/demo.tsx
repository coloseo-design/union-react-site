import React from 'react';
import { PageHeader } from 'union-design';

const PageHeaderDemo: React.FC<unknown> = () => (
  <>
    <PageHeader title="一级标题" />
    <br />
    <br />
    <PageHeader title="一级标题" subTitle="二级标题" />
  </>
);

export default PageHeaderDemo;
