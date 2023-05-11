import React from 'react';
import { TreeSelect } from 'union-design';
import Codeframe from '../../components/code-frame';

const { TreeNode } = TreeSelect;
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
const TreeSelectDEmo = () => {
  const [value, setValue] = React.useState('1');
  const [value1, setValue1] = React.useState([]);
  const onChange = (value: string | string[], node: any) => {
    setValue(value);
  };

  const onChange1 = (value: string | string[], node: any) => {
    setValue1(value);
  };

  const [dataT, setData] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      setData(data);
    }, 2000);
  }, []);

  return (
    <div>
      <Codeframe
        rightCode={`
import React from 'react';
import { TreeSelect } from 'union-design';

const { TreeNode } = TreeSelect;

const demo = () => {
  const [value, setValue] = React.useState('1');
  const onChange = (value: string | string[], node: any) => {
    setValue(value);
  };
  return(
    <div>
      <TreeSelect
        value={value}
        onChange={onChange}
        style={{ width: 256 }}
      >
        <TreeNode title="顶级" key="a" value="a">
          <TreeNode title="设计系统1" key="1" value="1">
            <TreeNode title="设计系统1-1" key="2" value="2">
              <TreeNode title="what" key="5" value="5" />
            </TreeNode>
          </TreeNode>
          <TreeNode title="设计系统2" key="3" value="3">
            <TreeNode title="设计系统2-1" key="4" value="4" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    </div>
  )
};
      `}
        rightDemo={(
          <div>
            <TreeSelect
              value={value}
              onChange={onChange}
              style={{ width: 256 }}
            >
              <TreeNode title="顶级" key="a" value="a">
                <TreeNode title="设计系统1" key="1" value="1">
                  <TreeNode title="设计系统1-1" key="2" value="2">
                    <TreeNode title="设计系统1-2" key="5" value="5" />
                  </TreeNode>
                </TreeNode>
                <TreeNode title="设计系统2" key="3" value="3">
                  <TreeNode title="设计系统2-1" key="4" value="4" />
                </TreeNode>
              </TreeNode>
            </TreeSelect>
          </div>
      )}
        description={(
          <h3>单选</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { TreeSelect } from 'union-design';

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

const demo = () => {
  const [value1, setValue1] = React.useState([]);
  const onChange1 = (value: string | string[], node: any) => {
    console.log('---value', value, node);
  };
  return (
    <div>
      <TreeSelect
        treeData={data}
        dropdownStyle={{ maxHeight: 250, overflow: 'auto' }}
        multiple
        value={value1}
        onChange={onChange}
        style={{ width: 256 }}
      />
    </div>
  )
}
      `}
        rightDemo={(
          <div>
            <TreeSelect
              treeData={data}
              dropdownStyle={{ maxHeight: 250, overflow: 'auto' }}
              multiple
              value={value1}
              onChange={onChange1}
              style={{ width: 256 }}
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
import { TreeSelect } from 'union-design';

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

const [dataT, setData] = React.useState([]);
React.useEffect(() => {
  setTimeout(() => {
    setData(data);
  }, 2000);
}, []);

const demo = () => (
  <div>
    <TreeSelect
      treeData={dataT}
      dropdownStyle={{ maxHeight: 250, overflow: 'auto' }}
      treeCheckable
      defaultValue={['node-1-2-2', 'third']}
      style={{ width: 256 }}
    />
  </div>
);
      `}
        rightDemo={(
          <div>
            <TreeSelect
              treeData={dataT}
              dropdownStyle={{ maxHeight: 250, overflow: 'auto' }}
              treeCheckable
              defaultValue={['node-1-2-2', 'third']}
              style={{ width: 256 }}
            />
          </div>
      )}
        description={(
          <h3>可勾选的</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { TreeSelect } from 'union-design';

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

const demo = () => (
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
      `}
        rightDemo={(
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
      )}
        description={(
          <h3>可勾选的, SHOW_ALL</h3>
      )}
      />
    </div>
  );
};

export default TreeSelectDEmo;
