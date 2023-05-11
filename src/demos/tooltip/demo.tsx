import React from 'react';
import { Button, Tooltip } from 'union-design';
import Codeframe from '../../components/code-frame';

const TooltipDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Tooltip } from 'union-design';

const demo = () => (
  <div>
    <Tooltip message="hi billy" placement="bottom" trigger="hover">
      <span>hello, this is my little friend billy,</span>
    </Tooltip>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Tooltip message="hi billy" placement="bottom" trigger="hover">
            <span>hello, this is my little friend billy,</span>
          </Tooltip>
        </div>
      )}
      description={(
        <h3>基本用法</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Tooltip, Button } from 'union-design';

const demo = () => (
  <div>
    <div>
      <Tooltip message="hi billy" placement="top" trigger="click">
        <Button onClick={() => console.log('accc')}>clickMe</Button>
      </Tooltip>
    </div>
    <div>
      <Tooltip message="hi billy" placement="left" trigger="click">
        <Button>clickMe</Button>
      </Tooltip>
    </div>
    <div>
      <Tooltip message="hi billy" placement="right" trigger="click">
        <Button>clickMe</Button>
      </Tooltip>
    </div>
    <div>
      <Tooltip message="hi billy" placement="bottom" trigger="click">
        <Button>clickMe</Button>
      </Tooltip>
    </div>
  </div>
);
      `}
      rightDemo={(
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
      )}
      description={(
        <h3>不同位置的提示</h3>
      )}
    />
  </div>
);

export default TooltipDemo;
