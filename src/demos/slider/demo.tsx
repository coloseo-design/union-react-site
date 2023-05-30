import React, { useState } from 'react';
import { Slider } from 'union-design';

const SliderDemo = () => {
  const [value, setValue] = useState(0);
  const onChange = (val: number) => {
    setValue(val);
  };
  return (
    <div>
      <div style={{ padding: 10, width: 500, marginBottom: 20 }}>
        <Slider onChange={onChange} />
      </div>
      <div>
        value:
        {value}
      </div>
    </div>
  );
};

export default SliderDemo;
