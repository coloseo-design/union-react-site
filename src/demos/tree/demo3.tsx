import React from 'react';
import { Tree } from 'union-design';

/* start
<h3>可勾选的 (父子节点没有关联)</h3>
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
  const onSelect = (selectedKeys: string[], other: any) => {
    console.log('---selectedKeys', selectedKeys, other);
  };
  const onCheck = (keys: string[], other: {[key: string] : unknown}) => {
    console.log('keys', keys, other);
  };
  return (
    <div>
      <Tree
        treeData={data}
        onSelect={onSelect}
        checkable
        checkStrictly
        onCheck={onCheck}
        style={{ width: 320, maxHeight: 200, overflow: 'auto' }}
        selectedKeys={['24']}
      />
    </div>
  );
};
