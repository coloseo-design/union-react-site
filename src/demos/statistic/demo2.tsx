import React from 'react';
import { Statistic, Icon } from 'union-design';

/* start
<h3>设置数值前缀</h3>
end */

export default () => (
  <div>
    <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
  </div>
);
