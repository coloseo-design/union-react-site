import React from 'react';
import { Cascader } from 'union-design';
import Codeframe from '../../components/code-frame';

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
    <Codeframe
      rightCode={`
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

const demo = () => (
  <div>
    <Cascader
      options={options}
      onChange={handleCascaderChange}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Cascader
            options={options}
            onChange={handleCascaderChange}
          />
        </div>
      )}
      description={(
        <h3>基本的</h3>
      )}
    />

    <Codeframe
      rightCode={`
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

const demo = () => (
  <div>
    <Cascader
      options={options}
      value={['zhejiang', 'hangzhou', 'xihu']}
      onChange={handleCascaderChange}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Cascader
            options={options}
            value={['zhejiang', 'hangzhou', 'xihu']}
            onChange={handleCascaderChange}
          />
        </div>
      )}
      description={(
        <h3>默认值</h3>
      )}
    />

    <Codeframe
      rightCode={`
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

const demo = () => (
  <div>
    <Cascader
      options={options}
      value={['zhejiang', 'hangzhou', 'xihu']}
      onChange={handleCascaderChange}
      disabled
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Cascader
            options={options}
            value={['zhejiang', 'hangzhou', 'xihu']}
            onChange={handleCascaderChange}
            disabled
          />
        </div>
      )}
      description={(
        <h3>禁用组件</h3>
      )}
    />

    <Codeframe
      rightCode={`
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

const demo = () => (
  <div>
    <Cascader
      options={options}
      onChange={handleCascaderChange}
      showSearch
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Cascader
            options={options}
            onChange={handleCascaderChange}
            showSearch
          />
        </div>
      )}
      description={(
        <h3>搜索</h3>
      )}
    />
  </div>
);

export default CascaderDemo;
