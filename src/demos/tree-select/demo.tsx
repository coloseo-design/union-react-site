import React from 'react';
import { TreeSelect } from 'union-design';

const TreeSelectDEmo = () => {
  const { TreeNode } = TreeSelect;
  const [value, setValue] = React.useState<string>('1');
  const onChange = (val: any, node: any) => {
    setValue(val as string);
  };

  return (
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
  );
};

export default TreeSelectDEmo;
