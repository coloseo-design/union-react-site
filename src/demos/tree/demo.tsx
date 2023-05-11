import React from 'react';
import { Tree } from 'union-design';
import Codeframe from '../../components/code-frame';

const { TreeNode } = Tree;
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
const TreeDemo = () => {
  const [dataT, setData] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      setData(data);
    }, 2000);
  }, []);
  const onExpand = (keys: string[], obj: {[key: string] : unknown}) => {
    console.log('---keys', keys, obj);
  };
  const onSelect = (selectedKeys: string[], other: any) => {
    console.log('---selectedKeys', selectedKeys, other);
  };
  const onCheck = (keys: string[], other: {[key: string] : unknown}) => {
    console.log('keys', keys, other);
  };
  return (
    <div>
      <Codeframe
        rightCode={`
import React from 'react';
import { Tree } from 'union-design';

const { TreeNode } = Tree;

const onExpand = (keys: string[], obj: {[key: string] : unknown}) => {
  console.log('---keys', keys, obj);
};
const onSelect = (selectedKeys: string[], other: any) => {
  console.log('---selectedKeys', selectedKeys, other);
};

const demo = () => (
  <div>
    <Tree
      onExpand={onExpand}
      onSelect={onSelect}
    >
      <TreeNode title="parent 1" key="0-0">
        <TreeNode title="parent 1-0" key="0-0-0">
          <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
          <TreeNode title="leaf" key="0-0-0-1" />
        </TreeNode>
        <TreeNode title="parent 1-1" key="0-0-1">
          <TreeNode title={<span>sss</span>} key="0-0-1-0" />
        </TreeNode>
      </TreeNode>
      <TreeNode title="parent 2" key="1" />
      <TreeNode title="parent 3" key="131">
        <TreeNode title="parent 31" key="234" />
      </TreeNode>
    </Tree>
  </div>
);
      `}
        rightDemo={(
          <div>
            <Tree
              onExpand={onExpand}
              onSelect={onSelect}
            >
              <TreeNode title="parent 1" key="0-0">
                <TreeNode title="parent 1-0" key="0-0-0">
                  <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                  <TreeNode title="leaf" key="0-0-0-1" />
                </TreeNode>
                <TreeNode title="parent 1-1" key="0-0-1">
                  <TreeNode title={<span>leaf</span>} key="0-0-1-0" />
                </TreeNode>
              </TreeNode>
              <TreeNode title="parent 3" key="0-1">
                <TreeNode title="leaf" key="0-1-1" />
              </TreeNode>
            </Tree>
          </div>
      )}
        description={(
          <h3>单选</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Tree } from 'union-design';

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

const onExpand = (keys: string[], obj: {[key: string] : unknown}) => {
  console.log('---keys', keys, obj);
};
const onSelect = (selectedKeys: string[], other: any) => {
  console.log('---selectedKeys', selectedKeys, other);
};

const demo = () => (
  <div>
    <Tree
      treeData={data}
      multiple
      onExpand={onExpand}
      onSelect={onSelect}
    />
  </div>
);
      `}
        rightDemo={(
          <div>
            <Tree
              treeData={data}
              multiple
              onExpand={onExpand}
              onSelect={onSelect}
            />
          </div>
      )}
        description={(
          <h3>多选的</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Tree } from 'union-design';

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

const [dataT, setData] = React.useState([]);
React.useEffect(() => {
  setTimeout(() => {
    setData(data);
  }, 2000);
}, []);

const onSelect = (selectedKeys: string[], other: any) => {
  console.log('---selectedKeys', selectedKeys, other);
};
const onCheck = (keys: string[], other: {[key: string] : unknown}) => {
  console.log('keys', keys, other);
};

const demo = () => (
  <div>
    <Tree
      treeData={dataT}
      onSelect={onSelect}
      checkable
      style={{ width: 320 }}
      defaultSelectedKeys={['24']}
      defaultCheckedKeys={['24', '23']}
      onCheck={onCheck}
    />
  </div>
);
      `}
        rightDemo={(
          <div>
            <Tree
              treeData={dataT}
              onSelect={onSelect}
              checkable
              style={{ width: 320 }}
              defaultSelectedKeys={['24']}
              defaultCheckedKeys={['24', '23']}
              onCheck={onCheck}
            />
          </div>
      )}
        description={(
          <h3>可勾选的 (父子节点有关联)</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Tree } from 'union-design';

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

const onSelect = (selectedKeys: string[], other: any) => {
  console.log('---selectedKeys', selectedKeys, other);
};
const onCheck = (keys: string[], other: {[key: string] : unknown}) => {
  console.log('keys', keys, other);
};

const demo = () => (
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
      `}
        rightDemo={(
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
      )}
        description={(
          <h3>可勾选的 (父子节点没有关联)</h3>
      )}
      />
    </div>

  );
};

export default TreeDemo;
