import React from 'react';
import { TreeSelect } from 'union-design';

/* start
<h3>可勾选的</h3>
end */

const data = [
  {
    value: 'node-0',
    title: 'node-0',
    children: [
      {
        value: 'node-0-1',
        title: 'node-0-1',
      },
      {
        value: 'node-0-2',
        title: 'node-0-2',
      },
    ],
  },
  {
    value: 'node-1',
    title: 'node-1',
    children: [
      {
        value: 'node-1-1',
        title: 'node-1-1',
        children: [
          {
            value: 'node-1-1-1',
            title: 'node-1-1-1',
          },
          {
            value: 'node-1-1-2',
            title: 'node-1-1-2',
          },
        ],
      },
      {
        value: 'node-1-2',
        title: 'node-1-2',
        children: [
          {
            value: 'node-1-2-1',
            title: 'node-1-2-1',
            children: [
              {
                value: 'node-1-2-2',
                title: 'node-1-2-2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 'node-3',
    title: 'node-3',
    children: [
      {
        value: 'node-3-1',
        title: 'node-3-1',
      },
      {
        value: 'node-3-2',
        title: 'node-3-2',
      },
    ],
  },
  {
    value: 'node-4',
    title: 'node-4',
  },
  {
    value: 'node-5',
    title: 'node-5',
  },
  {
    value: 'node-6',
    title: 'node-6',
  },
];
export default () => {
  const [value1, setValue1] = React.useState<string[]>([]);
  const onChange1 = (value: string | string[], node: any) => {
    setValue1(value as string[]);
  };
  return (
    <div>
      <TreeSelect
        treeData={data}
        dropdownStyle={{ maxHeight: 250, overflow: 'auto' }}
        treeCheckable
        defaultValue={['node-1-2-2', 'third']}
        style={{ width: 256 }}
      />
    </div>
  );
};
