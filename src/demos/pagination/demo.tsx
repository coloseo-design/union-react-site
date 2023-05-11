import React from 'react';
import { Pagination } from 'union-design';
import CodeFrame from '../../components/code-frame';

const Demo = () => (
  <div>
    <CodeFrame
      rightCode={`
      import React from 'react';
      import { Pagination } from 'union-design';
      
      const Demo = () => (
        <Pagination
          total={89}
          showQuickJumper
          hideOnSinglePage
        />
      )
      `}
      rightDemo={(
        <Pagination
          total={89}
          showQuickJumper
          hideOnSinglePage
        />
      )}
      description={
        <h3>基本用法</h3>
      }
    />

    <CodeFrame
      rightCode={`
      import React from 'react';
      import { Pagination } from 'union-design';
      
      const Demo = () => (
        <Pagination
        total={69}
        showSizeChanger
        showQuickJumper
      />
      )
      `}
      rightDemo={(
        <Pagination
          total={69}
          showSizeChanger
          showQuickJumper
        />
      )}
      description={
        <h3>多条数展示分页样式</h3>
      }
    />
  </div>
);

export default Demo;
