import React from 'react';
import { Message, Button } from 'union-design';

const MessageDemo = () => (
  <div>
    <Button type="primary" onClick={() => Message.info('这是一条询问消息，会主动消失。')}>info</Button>
    <br />
    <br />
    <Button type="primary" onClick={() => Message.error('这是一条异常消息，会主动消失。')}>error</Button>
    <br />
    <br />
    <Button type="primary" onClick={() => Message.success('这是一条成功消息，会主动消失。')}>success</Button>
    <br />
    <br />
    <Button type="primary" onClick={() => Message.warning('这是一条警告消息，会主动消失。')}>warning</Button>
  </div>
);

export default MessageDemo;
