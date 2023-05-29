import React, { useState } from 'react';
import { Checkbox } from 'union-design';

/* start
<h3>全选<h3>
<p>在实现全选效果时，你可能会用到 indeterminate 属性。</p>
end */

export default () => {
  const options = [
    {
      value: '1',
      label: 'dog',
    },
    {
      value: '2',
      label: 'cat',
    },
    {
      value: '3',
      label: 'lion',
    },
    {
      value: '4',
      label: 'tiger',
    },
  ];

  const [allChecked, setAll] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const AllChange = (v: boolean) => {
    if (v) {
      setAll(true);
      setValue(options.map((i) => i.value));
    } else {
      setAll(false);
      setValue([]);
    }
  };

  const GroupChange = (v: string[]) => {
    setValue(v);
    setAll(v.length === options.length);
  };

  return (
    <div>
      <div>
        <Checkbox
          checked={allChecked}
          onChange={AllChange}
          indeterminate={value.length > 0 && !allChecked}
        >
          全选
        </Checkbox>
      </div>
      <Checkbox.Group
        style={{ marginTop: 24 }}
        value={value}
        options={options}
        onChange={GroupChange}
      />
    </div>
  );
};
