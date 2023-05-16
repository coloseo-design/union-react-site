import React from 'react';
import { Tree } from 'union-design';


const TreeDemo = () => {
  const { TreeNode } = Tree;
  const onExpand = (keys: string[], obj: {[key: string] : unknown}) => {
    console.log('---keys', keys, obj);
  };
  const onSelect = (selectedKeys: string[], other: any) => {
    console.log('---selectedKeys', selectedKeys, other);
  };

  return (
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

  );
};

export default TreeDemo;
