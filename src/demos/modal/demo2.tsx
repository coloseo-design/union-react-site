import React from 'react';
import {
  Modal, Button,
} from 'union-design';

/* start
<h3>Modal 消息提示</h3>
end */
export default () => {
  const handleWarning = () => {
    Modal.warning({
      title: 'Warning弹窗',
      content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
      centered: true,
      maskClosable: true,
    });
  };

  const handleSuccess = () => {
    Modal.success({
      title: 'Success弹窗',
      content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
      maskClosable: true,
    });
  };
  const handleError = () => {
    Modal.error({
      title: 'Error弹出窗',
      content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
    });
  };

  const handleConfirm = () => {
    Modal.confirm({
      title: '弹出窗confirm',
      content: `一系列的信息描述，可能会很长。也可以是很短同样也可以带标点
      一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。
      一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。`,
      onOk: () => {
        console.log('--ok');
      },
      onCancel: () => {
        console.log('--cancel');
      },
    });
  };

  const handleInfo = () => {
    Modal.info({
      title: '弹出窗Info',
      content:
  <div>
    <p>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。</p>
    <p>一系列的信息描述，可能会很长。也可以是很短同样也可以带标点</p>
  </div>,
    });
  };
  return (
    <div>
      <Button onClick={handleInfo}>info</Button>
      <Button onClick={handleWarning} style={{ margin: '0px 24px' }}>warning</Button>
      <Button onClick={handleSuccess}>success</Button>
      <Button onClick={handleError} style={{ margin: '0px 24px' }}>error</Button>
      <Button onClick={handleConfirm} style={{ marginTop: 20 }}>confirm</Button>
    </div>
  );
};
