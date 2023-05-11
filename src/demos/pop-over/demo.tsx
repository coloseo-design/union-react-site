import React from 'react';
import { Popover, Button } from 'union-design';
import Codeframe from '../../components/code-frame';

const PopoverDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Popover, Button } from 'union-design';

const demo = () => (
  <div>
    <Popover
      content="联通设计系统1"
    >
      <Button>hover</Button>
    </Popover>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Popover
            content="联通设计系统1"
          >
            <Button>hover</Button>
          </Popover>
        </div>
      )}
      description={(
        <h3>基本的</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Popover, Button } from 'union-design';

const demo = () => (
  <div>
    <Popover
      title={<div>Title3</div>}
      trigger="click"
      content={<div>联通设计系统</div>}
    >
      <Button>click</Button>
    </Popover>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Popover
            title={<div>Title3</div>}
            trigger="click"
            content={<div>联通设计系统3</div>}
          >
            <Button>click</Button>
          </Popover>
        </div>
      )}
      description={(
        <h3>点击触发</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Popover, Button } from 'union-design';

const demo = () => (
  <div>
    <Popover
      title={<div>Title4</div>}
      trigger="focus"
      content={<div>联通设计系统4</div>}
    >
      <Button>Focus</Button>
    </Popover>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Popover
            title={<div>Title4</div>}
            trigger="focus"
            content={<div>联通设计系统4</div>}
          >
            <Button>Focus</Button>
          </Popover>
        </div>
      )}
      description={(
        <h3>获取焦点触发</h3>
      )}
    />
  </div>
);

export default PopoverDemo;
