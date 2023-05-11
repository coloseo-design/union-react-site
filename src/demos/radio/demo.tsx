import React from 'react';
import { Radio } from 'union-design';
import Codeframe from '../../components/code-frame';

export default () => {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  return (
    <div>
      <Codeframe
      rightCode={`
import React from 'react';
import { Radio } from 'union-design';

const demo = () => (
  <div>
    <Radio checked disabled>A</Radio>
    <Radio disabled>B</Radio>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Radio checked disabled>A</Radio>
          <Radio disabled>B</Radio>
        </div>
      )}
      description={(
        <h3>禁用状态</h3>
      )}
    />
          <Codeframe
      rightCode={`
import React from 'react';
import { Radio } from 'union-design';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const demo = () => (
  <div>
    <Radio.Group options={options} defaultValue="Apple" name="radio1" onChange={(e) => { console.log('value', e.target.value); }} />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Radio.Group options={options} defaultValue="Apple" name="radio1" onChange={(e) => { console.log('value', e.target.value); }} />
        </div>
      )}
      description={(
        <h3>横向排列</h3>
      )}
    />

<Codeframe
      rightCode={`
import React from 'react';
import { Radio } from 'union-design';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const demo = () => (
  <div>
    <Radio.Group defaultValue="B" name="radio2">
      <Radio value="A" style={{ display: 'block' }}>A</Radio>
      <Radio value="B" style={{ display: 'block' }}>B</Radio>
      <Radio value="C" style={{ display: 'block' }}>C</Radio>
      <Radio value="D" style={{ display: 'block' }}>D</Radio>
    </Radio.Group>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Radio.Group defaultValue="B" name="radio2">
            <Radio value="A" style={{ display: 'block' }}>A</Radio>
            <Radio value="B" style={{ display: 'block' }}>B</Radio>
            <Radio value="C" style={{ display: 'block' }}>C</Radio>
            <Radio value="D" style={{ display: 'block' }}>D</Radio>
          </Radio.Group>
        </div>
      )}
      description={(
        <h3>垂直排列</h3>
      )}
    />
    </div>
  );
};
