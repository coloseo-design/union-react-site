import React from 'react';
import { PageHeader } from 'union-design';
import Codeframe from '../../components/code-frame';

const PageHeaderDemo: React.FC<unknown> = () => (
  <div>
    <Codeframe
      rightCode={`
      import React from 'react';
      import { PageHeader } from 'union-design';

      const Demo = () => (
        <>
          <PageHeader title="一级标题" />
          <br />
          <br />
          <PageHeader title="一级标题" subTitle="二级标题" />
        </>
      )
      `}
      rightDemo={(
        <>
          <PageHeader title="一级标题" />
          <br />
          <br />
          <PageHeader title="一级标题" subTitle="二级标题" />
        </>
      )}
      description={
        <h3>基本用法</h3>
      }
    />
  </div>
);

export default PageHeaderDemo;
