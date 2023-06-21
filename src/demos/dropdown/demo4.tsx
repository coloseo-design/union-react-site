import React from 'react';
import {
  Dropdown, Button,
} from 'union-design';

/* start
  <h3>自定义是否展示</h3>
  <p>使用onVisibleChange 和visible 配合展示下拉弹窗
end */

const DropdownDemo = () => {
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const handleButtonClick = () => {
    setVisible(false);
    setVisible1(false);
  };

  const test = (
    <div style={{ width: 130, padding: 12 }} onClick={handleButtonClick}>
      <div style={{ height: 32 }}>联通设计系统1</div>
      <div style={{ height: 32 }}>联通设计系统2</div>
    </div>
  );

  return (
    <div>
      <Dropdown
        placement="bottomLeft"
        overlay={test}
        visible={visible}
        arrow
        onVisibleChange={(v) => setVisible(v)}
        trigger={['click']}
      >
        <Button style={{ marginRight: 24 }}>点击展开</Button>
      </Dropdown>
      <Dropdown.Button
        placement="bottomLeft"
        overlay={test}
        visible={visible1}
        onVisibleChange={(v) => setVisible1(v)}
        trigger={['click']}
      >
        点击展开
      </Dropdown.Button>
    </div>
  );
};

export default DropdownDemo;
