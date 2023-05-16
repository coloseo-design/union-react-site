import React from 'react';
import { Cascader } from 'union-design';

/* start
<div>
<h3>设置disabled</h3>
</div>
end */

export default () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
            {
              value: 'xiasha',
              label: 'Xia Sha',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua men',
            },
          ],
        },
      ],
    },
  ];
  const handleCascaderChange = (value: string[], selectedOptions: {[key: string] : unknown}[]) => {
    console.log(value, selectedOptions);
  };
  return (
    <div>
      <Cascader
        options={options}
        value={['zhejiang', 'hangzhou', 'xihu']}
        onChange={handleCascaderChange}
        disabled
      />
    </div>
  );
};
