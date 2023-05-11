import React from 'react';
import { Message, Button } from 'union-design';
import Codeframe from '../../components/code-frame';

const MessageDemo = () => (
  <div>

    <Codeframe
      rightCode={`
import React from 'react';
import { Message, Button } from 'union-design';

const demo = () => (
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
      `}
      rightDemo={(
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
      )}
      description={(
        <h3>基本</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Message, Button } from 'union-design';

const demo = () => (
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
      `}
      rightDemo={(
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
      )}
      description={(
        <h3>常驻</h3>
      )}
    />
  </div>
);

export default MessageDemo;
