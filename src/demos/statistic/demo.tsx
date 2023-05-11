import React from 'react';
import { Statistic, Icon } from 'union-design';
import Codeframe from '../../components/code-frame';

const StatisticDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Statistic } from 'union-design';

const demo = () => (
  <div>
    <Statistic title="Active Users" value={112893} />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Statistic title="Active Users" value={112893} />
        </div>
      )}
      description={(
        <h3>基本</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Statistic, Icon } from 'union-design';

const demo = () => (
  <div>
    <Statistic title="Active Users" value={112893} precision={2} valueStyle={{ color: '#3f8600' }} prefix={<Icon type="arrow-up" />} />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Statistic title="Active Users" value={112893} precision={2} valueStyle={{ color: '#3f8600' }} prefix={<Icon type="arrow-up" />} />
        </div>
      )}
      description={(
        <h3>设置数值前缀、颜色、精准度</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Statistic, Icon } from 'union-design';

const demo = () => (
  <div>
    <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
        </div>
      )}
      description={(
        <h3>设置数值前缀</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Statistic } from 'union-design';

const demo = () => (
  <div>
    <Statistic title="Unmerged" value={93} suffix="/ 100" />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Statistic title="Unmerged" value={93} suffix="/ 100" />
        </div>
      )}
      description={(
        <h3>设置数值的后缀</h3>
      )}
    />
  </div>
);

export default StatisticDemo;
