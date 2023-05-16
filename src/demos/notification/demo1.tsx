import React from 'react';
import { Notification, Button } from 'union-design';

/* start
<h3>常驻 notification</h3>
end */

export default () => (
  <div>
    <Button
      type="primary"
      onClick={() => Notification.info({
        message: 'info',
        description: '这是一条常驻消息，会主动消失。',
        key: 'abc',
        duration: 0,
      })}
    >
      open
    </Button>
    <br />
    <br />
    <Button type="primary" onClick={() => Notification.destroy('abc')}>close</Button>
  </div>
);
