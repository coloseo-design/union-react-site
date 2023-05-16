import React, { useState } from 'react';
import { Checkbox } from 'union-design';
import Codeframe from '../../components/code-frame';

/* start
<div>
<h3>基本用法及禁止样式</h3>
</div>
end */

export default () => {
  const [checked, setChecked] = useState(false);
  const onChecked = (isChecked: boolean) => {
    console.log('isChecked', isChecked);
    setChecked(isChecked);
  };
  return (
    <div>
      <Checkbox onChange={onChecked} checked={checked}>abc</Checkbox>
      <Checkbox value="hello" disabled>hello</Checkbox>
      <Checkbox indeterminate>全选样式</Checkbox>
    </div>
  );
};
