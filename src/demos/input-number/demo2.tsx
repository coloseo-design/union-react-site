import React from 'react';
import { InputNumber } from 'union-design';

/* start
<h3>保留小数位数</h3>
end */
export default () => (
  <div>
    <InputNumber
      precision={2}
      step={0.1}
      style={{ width: 220 }}
    />
  </div>
);
