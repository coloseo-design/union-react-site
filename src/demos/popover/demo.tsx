import React from 'react';
import { Button, Popover } from 'union-design';

const PopoverDemo = () => (
  <div>
    <p>基本的 hover</p>
    <div>
      <Popover
        content="联通设计系统1"
      >
        <Button>hover</Button>
      </Popover>
    </div>
    <p>点击触发</p>
    <div>
      <Popover
        title={<div>Title3</div>}
        trigger="click"
        content={<div>联通设计系统3</div>}
      >
        <Button>click</Button>
      </Popover>
    </div>

  </div>
);

export default PopoverDemo;
