import React, { useState } from 'react';
import { Checkbox } from 'union-design';

/* start
<div>
<h3>Checkbox 组 Group</h3>
<div>方便的从数组生成 Checkbox 组</div>
</div>
end */

const { Group } = Checkbox;
export default () => {
  const onChange = (values: string[]) => {
    console.log('values', values);
  };
  const options = [
    { label: 'a', value: 'a' },
    { label: 'b', value: 'b' },
    { label: 'c', value: 'c' },
    { label: 'd', value: 'd' },
  ];
  return (
    <div>
      <Group style={{ marginBottom: 20 }} onChange={onChange} value={['a']} options={options} />
      <Group onChange={onChange} value={['hello', 'hello2']}>
        <Checkbox value="hello">Apple</Checkbox>
        <Checkbox value="hello2">Orange</Checkbox>
      </Group>
    </div>
  );
};
