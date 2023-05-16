import React from 'react';
import { TreeSelect } from 'union-design';

/* start
 <h3>可勾选的, SHOW_ALL</h3>
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
export default () => (
  <div>
    <TreeSelect
      treeData={data}
      dropdownStyle={{ maxHeight: 150, overflow: 'auto' }}
      treeCheckable
      showCheckedStrategy="SHOW_ALL"
      maxTagCount={3}
      style={{ width: 256 }}
    />
  </div>
);
