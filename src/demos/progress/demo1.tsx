import React from 'react';
import { Progress } from 'union-design';

/* start
<h3>普通进度条</h3>
end */

export default () => (
  <div style={{ width: '50%' }}>
    <Progress percent={30} />
    <Progress percent={50} status="exception" />
    <Progress percent={100} />
  </div>
);
