import React from 'react';
import { Statistic, Icon } from 'union-design';

/* start
<h3>设置数值前缀、颜色、精准度</h3>
end */

export default () => (
  <div>
    <Statistic title="Active Users" value={112893} precision={2} valueStyle={{ color: '#3f8600' }} prefix={<Icon type="arrow-up" />} />
  </div>
);
