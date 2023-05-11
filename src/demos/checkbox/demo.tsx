import React, { useState } from 'react';
import { Checkbox } from 'union-design';
import Codeframe from '../../components/code-frame';

const { Group } = Checkbox;

export default () => {
  const options = [
    { label: 'a', value: 'a' },
    { label: 'b', value: 'b' },
    { label: 'c', value: 'c' },
    { label: 'd', value: 'd' },
  ];

  const [checked, setChecked] = useState(false);
  const onChange = (values: string[]) => {
    console.log('values', values);
  };
  const onChecked = (isChecked: boolean) => {
    console.log('isChecked', isChecked);
    setChecked(isChecked);
  };
  return (
    <>
      <Codeframe
        rightCode={`
import React from 'react';
import { Checkbox } from 'union-design';

const [checked, setChecked] = useState(false);

const onChecked = (isChecked: boolean) => {
  console.log('isChecked', isChecked);
  setChecked(isChecked);
};

const demo = () => (
  <div>
    <Checkbox onChange={onChecked} checked={checked}>abc</Checkbox>
  </div>
);
      `}
        rightDemo={(
          <div>
            <Checkbox onChange={onChecked} checked={checked}>abc</Checkbox>
          </div>
      )}
        description={(
          <h3>基本的</h3>
      )}
      />
      <Codeframe
        rightCode={`
        import React, { useState } from 'react';
        import { Checkbox } from 'union-design';

        const Demo = () => {
          return (
            <Checkbox value="hello" disabled>hello</Checkbox>
          )
        }
        
        `}
        rightDemo={(
          <Checkbox value="hello" disabled>hello</Checkbox>
        )}
        description={(<h3>禁止样式</h3>)}
      />
      <Codeframe
        rightCode={`
import React, { useState } from 'react';
import { Checkbox } from 'union-design';

const { Group } = Checkbox;

const options = [
  { label: 'a', value: 'a' },
  { label: 'b', value: 'b' },
  { label: 'c', value: 'c' },
  { label: 'd', value: 'd' },
];

const [checked, setChecked] = useState(false);
const onChange = (values: string[]) => {
  console.log('values', values);
};

const demo = () => (
  <div>
    <Group style={{ padding: 20 }} onChange={onChange} value={['a']} options={options} />
    <Group style={{ padding: 20 }} onChange={onChange} value={['hello', 'hello2']}>
      <Checkbox value="hello">hello</Checkbox>
      <Checkbox value="hello2">hello2</Checkbox>
    </Group>
  </div>
);
      `}
        rightDemo={(
          <div>
            <Group style={{ padding: 20 }} onChange={onChange} value={['a']} options={options} />
            <Group style={{ padding: 20 }} onChange={onChange} value={['hello', 'hello2']}>
              <Checkbox value="hello">hello</Checkbox>
              <Checkbox value="hello2">hello2</Checkbox>
            </Group>
          </div>
      )}
        description={(
          <h3>Checkbox组</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Checkbox } from 'union-design';

const demo = () => (
  <div>
    <Checkbox indeterminate />
  </div>
);
      `}
        rightDemo={(
          <div>
            <Checkbox indeterminate />
          </div>
      )}
        description={(
          <h3>全选样式</h3>
      )}
      />
    </>
  );
};
