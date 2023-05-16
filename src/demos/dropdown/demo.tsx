import React from 'react';
import {
  Dropdown, Button,
} from 'union-design';

const test = (
  <div style={{ width: 130, padding: 12 }}>
    <div style={{ height: 32 }}>联通设计系统1</div>
    <div style={{ height: 32 }}>联通设计系统2</div>
  </div>
);
const DropdownDemo = () => {
  const [visible, setVisible] = React.useState(false);
  const handleButtonClick = () => {
    setVisible(!visible);
  };

  return (
    <Dropdown
      placement="bottomLeft"
      overlay={test}
      arrow
      trigger={['hover']}
    >
      <Button onClick={handleButtonClick}>hover bottomLeft</Button>
    </Dropdown>
  );
};

export default DropdownDemo;
