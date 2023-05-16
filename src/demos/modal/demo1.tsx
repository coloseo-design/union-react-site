import React, { useState } from 'react';
import {
  Modal, Button, Select, TreeSelect,
} from 'union-design';

/* start
<h3>异步关闭的Modal</h3>
end */
export default () => {
  const { Option } = Select;
  const { TreeNode } = TreeSelect;
  const [visible1, setVisible1] = useState(false);
  const [confirmLoading, setconfirmLoading] = useState(false);
  const handleClick1 = () => {
    setVisible1(true);
  };
  const handleCancel = () => {
    setVisible1(false);
  };

  const handleOk = () => {
    setconfirmLoading(true);
    setTimeout(() => {
      setVisible1(false);
      setconfirmLoading(false);
    }, 2000);
  };
  return (
    <div>
      <Button onClick={handleClick1}>异步关闭</Button>
      <Modal
        visible={visible1}
        onCancel={handleCancel}
        onOk={handleOk}
        title="对话框"
        bodyStyle={{ height: 500 }}
        confirmLoading={confirmLoading}
        centered
      >
        <div>
          <Select style={{ marginBottom: 32, width: 200 }}>
            <Option key="1" value="1">选项111swdewdw是我的我的午饭人反而更</Option>
            <Option key="2" value="2">选项1222</Option>
            <Option disabled key="3" value="3">选项33333</Option>
          </Select>
          <TreeSelect
            value="1"
          >
            <TreeNode title="顶级" key="a" value="a">
              <TreeNode title="联通设计系统" key="1" value="1">
                <TreeNode title="法务部" key="2" value="2">
                  <TreeNode title="部门一" key="5" value="5" />
                </TreeNode>
              </TreeNode>
              <TreeNode title="人事部" key="3" value="3">
                <TreeNode title="总务处" key="4" value="4" />
              </TreeNode>
            </TreeNode>
          </TreeSelect>
        </div>
      </Modal>
    </div>
  );
};
