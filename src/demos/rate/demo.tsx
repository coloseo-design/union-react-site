import React from 'react';
import { Rate } from 'union-design';
import Codeframe from '../../components/code-frame';

const RateDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Rate } from 'union-design';

const demo = () => (
  <div>
    <Rate defaultValue={1} onChange={(value) => { console.log('value', value); }} />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Rate defaultValue={1} onChange={(value) => { console.log('value', value); }} />
        </div>
      )}
      description={(
        <h3>基本的</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Rate } from 'union-design';

const demo = () => (
  <div>
    <Rate defaultValue={1.5} allowHalf onChange={(value) => { console.log('value', value); }} />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Rate defaultValue={1.5} allowHalf onChange={(value) => { console.log('value', value); }} />
        </div>
      )}
      description={(
        <h3>半星</h3>
      )}
    />
  </div>
);

export default RateDemo;
