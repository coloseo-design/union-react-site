import React, { useState } from 'react';
import {
  Modal, Button,
} from 'union-design';

const ModalDemo: React.FC<unknown> = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>open</Button>
      <Modal
        visible={visible}
        onCancel={handleCancel}
        onOk={() => setVisible(false)}
        title="对话框"
        bodyStyle={{ height: 500, overflow: 'auto' }}
        cancelText="取消"
        centered
      >
        <div>modal基本样式</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
        <div>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</div>
      </Modal>
    </div>
  );
};

export default ModalDemo;
