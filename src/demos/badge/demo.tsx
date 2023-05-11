import React from 'react';
import { Badge } from 'union-design';
import Codeframe from '../../components/code-frame';

const BadgeDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Badge } from 'union-design';

const demo = () => (
  <div>
    <Badge count={10} />
    <Badge count={100} overflowCount={99} style={{ margin: '0 50px' }} />
    <Badge count={10} dot />
    <Badge showZero style={{ marginLeft: 50 }} />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Badge count={10} />
          <Badge count={100} overflowCount={99} style={{ margin: '0 50px' }} />
          <Badge count={10} dot />
          <Badge showZero style={{ marginLeft: 50 }} />
        </div>
      )}
      description={(
        <h3>基本的</h3>
      )}
    />
  </div>
);

export default BadgeDemo;
