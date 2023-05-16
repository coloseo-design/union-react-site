import React from 'react';
import { Popconfirm, Button } from 'union-design';

const PopconfirmDemo: React.FC<unknown> = () => {
  const handleVisibleChange = (visible: boolean) => {
    console.log('-visible-', visible);
  };

  return (
    <div>
      <Popconfirm
        title="你是否确定这是一个气泡确认框"
        placement="top"
        onVisibleChange={handleVisibleChange}
      >
        <Button style={{ margin: 24 }}>top</Button>
      </Popconfirm>
    </div>
  );
};

export default PopconfirmDemo;
