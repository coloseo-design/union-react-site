import React from 'react';
import { Button, Tooltip } from 'union-design';

/* start
<h3>不同位置的提示</h3>
end */

export default () => (
  <div>
    <div>
      <Tooltip message="hi billy" placement="top" trigger="click">
        <Button onClick={() => console.log('accc')}>clickMe</Button>
      </Tooltip>
    </div>
    <div>
      <Tooltip message="hi billy" placement="left" trigger="click">
        <Button style={{ marginTop: 16 }}>clickMe</Button>
      </Tooltip>
    </div>
    <div>
      <Tooltip message="hi billy" placement="right" trigger="click">
        <Button style={{ marginTop: 16 }}>clickMe</Button>
      </Tooltip>
    </div>
    <div>
      <Tooltip message="hi billy" placement="bottom" trigger="click">
        <Button style={{ marginTop: 16 }}>clickMe</Button>
      </Tooltip>
    </div>
  </div>
);
