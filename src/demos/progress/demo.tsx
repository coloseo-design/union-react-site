import React from 'react';
import { Progress } from 'union-design';

/* start
<h3>小 进度条</h3>
end */

export default () => (
  <div style={{ width: '50%' }}>
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>
);
