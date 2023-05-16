import React from 'react';
import { InputNumber } from 'union-design';

/* start
<h3>解析配合 formatter</h3>
end */
export default () => (
  <div>
    <InputNumber
      size="default"
      value={10000}
      formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => `${value}`.replace(/\$\s?|(,*)/g, '')}
      style={{ width: 220 }}
    />
  </div>
);
