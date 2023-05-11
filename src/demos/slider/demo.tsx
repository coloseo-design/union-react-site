import React, { useState } from 'react';
import { Slider } from 'union-design';
import Codeframe from '../../components/code-frame';

const SliderDemo = () => {
  const [value, setValue] = useState(0);
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
      <Codeframe
        rightCode={`
import React from 'react';
import { Slider } from 'union-design';

const [value, setValue] = useState(0);
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

const demo = () => (
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
      `}
        rightDemo={(
          <div>
            <div style={{ padding: 10, width: 500, marginBottom: 20 }}>
              <Slider value={value} min={0} marks={marks} max={10} onChange={onChange} />
            </div>
            <div>
              value:
              {value}
            </div>
          </div>
      )}
        description={(
          <h3>基本的</h3>
      )}
      />
    </div>
  );
};

export default SliderDemo;
