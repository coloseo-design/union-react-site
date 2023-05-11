import React from 'react';
import { Progress } from 'union-design';
import Codeframe from '../../components/code-frame';

const ProgressDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Progress } from 'union-design';

const demo = () => (
  <div style={{ width: '50%' }}>
    <Progress percent={30} />
    <Progress percent={50} status="exception" />
    <Progress percent={100} />
  </div>
);
      `}
      rightDemo={(
        <div style={{ width: '50%' }}>
          <Progress percent={30} />
          <Progress percent={50} status="exception" />
          <Progress percent={100} />
        </div>
)}
      description={(
        <h3>普通进度条</h3>
        )}
    />
    <Codeframe
      rightCode={`
import React from 'react';
import { Progress } from 'union-design';

const demo = () => (
  <div style={{ width: '50%' }}>
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>
);
            `}
      rightDemo={(
        <div style={{ width: '50%' }}>
          <Progress percent={30} size="small" />
          <Progress percent={50} size="small" status="exception" />
          <Progress percent={100} size="small" />
        </div>
)}
      description={(
        <h3>小进度条</h3>
        )}
    />
  </div>
);

export default ProgressDemo;
