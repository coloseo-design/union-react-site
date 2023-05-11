import React from 'react';
import { Notification, Button } from 'union-design';
import Codeframe from '../../components/code-frame';

const NotificationDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Notification, Button } from 'union-design';

const demo = () => (
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
      `}
      rightDemo={(
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
      )}
      description={(
        <h3>基本</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Notification, Button } from 'union-design';

const demo = () => (
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
      `}
      rightDemo={(
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
      )}
      description={(
        <h3>常驻</h3>
      )}
    />
    <Codeframe
      rightCode={`
import React from 'react';
import { Notification, Button } from 'union-design';

const demo = () => (
  <div>
    <Button
      type="primary"
      onClick={() => Notification.warning({
        message: 'warning',
        description: '这是一条警告消息，会主动消失。',
        btn: (
          <div style={{
            marginTop: 10, display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-end',
          }}
          >
            <Button size="small">
              取消
            </Button>
            <div style={{ width: 20 }} />
            <Button size="small" type="primary">
              确定
            </Button>
          </div>
        ),
      })}
    >
      warning
    </Button>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Button
            type="primary"
            onClick={() => Notification.warning({
              message: 'warning',
              description: '这是一条警告消息，会主动消失。',
              btn: (
                <div style={{
                  marginTop: 10, display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-end',
                }}
                >
                  <Button size="small">
                    取消
                  </Button>
                  <div style={{ width: 20 }} />
                  <Button size="small" type="primary">
                    确定
                  </Button>
                </div>
              ),
            })}
          >
            warning
          </Button>
        </div>
      )}
      description={(
        <h3>Btn</h3>
      )}
    />
  </div>
);

export default NotificationDemo;
