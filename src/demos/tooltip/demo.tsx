import React from 'react';
import { Tooltip } from 'union-design';

const TooltipDemo = () => (
  <div>
    <Tooltip message="hi billy" placement="bottom" trigger="hover">
      <span>hello, this is my little friend billy,</span>
    </Tooltip>
  </div>
);

export default TooltipDemo;
