import React from 'react';
import { Spin } from 'union-design';
import Codeframe from '../../components/code-frame';

const SpinDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Spin } from 'union-design';

const demo = () => (
  <div>
    <Spin />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Spin />
        </div>
      )}
      description={(
        <h3>加载中</h3>
      )}
    />
  </div>
);
export default SpinDemo;
