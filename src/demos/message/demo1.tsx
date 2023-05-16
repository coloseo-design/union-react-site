import React from 'react';
import { Message, Button } from 'union-design';

/* start
<h3>常驻 消息</h3>
end */

export default () => (
  <div>
    <Button
      type="primary"
      onClick={() => Message.info({
        content: '这是一条常驻消息，会主动消失。',
        key: 'abc',
        duration: 0,
      })}
    >
      open
    </Button>
    <br />
    <br />
    <Button type="primary" onClick={() => Message.destroy('abc')}>close</Button>
    <br />
    <br />
    <Button type="primary" onClick={() => Message.loading('这 个 loading demo', 'loading key')}>loading</Button>
    <br />
    <br />
    <Button type="primary" onClick={() => Message.destroy('loading key')}>loading close</Button>
  </div>
);
