import React from 'react';
import { Radio } from 'union-design';

/* start
  <h3><垂直排列/h3>
end */

export default () => (
  <div>
    <Radio.Group defaultValue="B" name="radio2">
      <Radio value="A" style={{ display: 'block', marginLeft: 0 }}>A</Radio>
      <Radio value="B" style={{ display: 'block', marginLeft: 0 }}>B</Radio>
      <Radio value="C" style={{ display: 'block', marginLeft: 0 }}>C</Radio>
      <Radio value="D" style={{ display: 'block', marginLeft: 0 }}>D</Radio>
    </Radio.Group>
  </div>
);
