import React from 'react';
import { Tree } from 'union-design';

/* start
<h3>多选的</h3>
end */

const data = [
  {
    key: 'node-0',
    value: 'node-0',
    title: 'node-0',
    disabled: true,
    children: [
      {
        key: 'node-0-1',
        value: 'node-0-1',
        title: 'node-0-1',
      },
      {
        key: 'node-0-2',
        value: 'node-0-2',
        title: 'node-0-2',
      },
    ],
  },
  {
    key: 'node-1',
    value: 'node-1',
    title: 'node-1',
    children: [
      {
        key: 'node-1-1',
        value: 'node-1-1',
        title: 'node-1-1',
        children: [
          {
            key: 'node-1-1-1',
            value: 'node-1-1-1',
            title: 'node-1-1-1',
          },
          {
            key: 'node-1-1-2',
            value: 'node-1-1-2',
            title: 'node-1-1-2',
          },
        ],
      },
      {
        key: 'node-1-2',
        value: 'node-1-2',
        title: 'node-1-2',
        children: [
          {
            key: 'node-1-2-1',
            value: 'node-1-2-1',
            title: 'node-1-2-1',
            children: [
              {
                key: 'node-1-1-3',
                value: 'node-1-1-3',
                title: 'node-1-1-3',
              },
              {
                key: 'node-1-1-4',
                value: 'node-1-1-4',
                title: 'node-1-1-4',
              },
            ],
          },
        ],
      },
    ],
  },
];
export default () => {
  const onExpand = (keys: string[], obj: {[key: string] : unknown}) => {
    console.log('---keys', keys, obj);
  };
  const onSelect = (selectedKeys: string[], other: any) => {
    console.log('---selectedKeys', selectedKeys, other);
  };
  return (
    <div>
      <Tree
        treeData={data}
        multiple
        onExpand={onExpand}
        onSelect={onSelect}
      />
    </div>
  );
};
