import React from 'react';
import { Radio } from 'union-design';

/* start
  <h3><横向排列/h3>
end */
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

export default () => (
  <div>
    <Radio.Group options={options} defaultValue="Apple" name="radio1" onChange={(e) => { console.log('value', e.target.value); }} />
  </div>
);
