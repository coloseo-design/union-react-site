import React, { useState } from 'react';
import { Slider } from 'union-design';

/* start
<h3>带标签的滑块</h3>
<p>使用 marks 属性标注分段式滑块，使用 value / defaultValue 指定滑块位置</p>
end */
const SliderDemo = () => {
  const [value, setValue] = useState(3);
  const onChange = (val: number) => {
    setValue(val);
  };
  const marks = [{
    label: '0°C',
    value: 0,
  }, {
    label: '3°C',
    value: 3,
  }, {
    label: '5°C',
    value: 5,
  }, {
    label: <strong>7°C</strong>,
    value: 7,
  }];
  return (
    <div>
      <div style={{ padding: 10, width: 500, marginBottom: 20 }}>
        <Slider value={value} min={0} marks={marks} max={10} onChange={onChange} />
      </div>
      <div>
        value:
        {value}
      </div>
    </div>
  );
};

export default SliderDemo;
