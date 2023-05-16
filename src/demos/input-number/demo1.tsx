import React from 'react';
import { InputNumber } from 'union-design';

/* start
<h3>规定展示格式</h3>
end */
export default () => (
  <div>
    <InputNumber
      precision={2}
      formatter={(value) => `${value}%`}
      parser={(value) => `${value}`.replace('%', '')}
      style={{ width: 220 }}
    />
  </div>
);
