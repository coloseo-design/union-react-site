import React from 'react';
import { InputNumber } from 'union-design';

const handleChange = (value: string | number) => {
  console.log('--value', value);
};

const InputNumberDemo = (): React.ReactNode => (
  <div>
    <p>lange:</p>
    <InputNumber
      size="large"
      max={10}
      min={1}
      onChange={handleChange}
      style={{ width: 220 }}
    />
    <p>    default:</p>
    <InputNumber
      max={10}
      min={1}
      onChange={handleChange}
      style={{ width: 220 }}
    />
    <p>small:</p>
    <InputNumber
      size="small"
      max={10}
      min={1}
      onChange={handleChange}
      style={{ width: 220 }}
    />
  </div>
);

export default InputNumberDemo;
