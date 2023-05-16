import React from 'react';
import { Cascader } from 'union-design';

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

const CascaderDemo = () => (
  <div>
    <Cascader
      options={options}
      onChange={handleCascaderChange}
    />
  </div>
);

export default CascaderDemo;
