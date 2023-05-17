import React from 'react';
import { Checkbox } from 'union-design';

/* start
<div>
<h3>基本用法</h3>
<div>简单的 checkbox</div>
</div>
end */

export default () => {
  const onChange = (isChecked: boolean) => {
    console.log('isChecked', isChecked);
  };
  return (
    <div>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </div>
  );
};
