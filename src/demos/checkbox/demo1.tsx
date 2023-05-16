import React, { useState } from 'react';
import { Checkbox } from 'union-design';

/* start
<div>
<h3>Checkbox 组 Group</h3>
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
      <Group style={{ padding: 20 }} onChange={onChange} value={['a']} options={options} />
      <Group style={{ padding: 20 }} onChange={onChange} value={['hello', 'hello2']}>
        <Checkbox value="hello">hello</Checkbox>
        <Checkbox value="hello2">hello2</Checkbox>
      </Group>
    </div>
  );
};
