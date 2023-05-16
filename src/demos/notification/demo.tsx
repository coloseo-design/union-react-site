import React from 'react';
import { Notification, Button } from 'union-design';

const NotificationDemo = () => (
  <div>
    <Button
      type="primary"
      onClick={() => Notification.info({
        message: 'info',
        description: '这是一条询问消息，会主动消失。',
      })}
    >
      info
    </Button>
    <br />
    <br />
    <Button
      type="primary"
      onClick={() => Notification.error({
        message: 'error',
        description: '这是一条异常消息，会主动消失。',
      })}
    >
      error
    </Button>
    <br />
    <br />
    <Button
      type="primary"
      onClick={() => Notification.success({
        message: 'success',
        description: '这是一条成功消息，会主动消失。',
      })}
    >
      success
    </Button>
    <br />
    <br />
    <Button
      type="primary"
      onClick={() => Notification.warning({
        message: 'warning',
        description: '这是一条警告消息，会主动消失。',
      })}
    >
      warning
    </Button>
    <br />
    <br />
    <Button
      type="primary"
      onClick={() => Notification.open({
        message: 'open',
        description: 'no icon',
      })}
    >
      warning
    </Button>
  </div>
);

export default NotificationDemo;
