import React, { useRef } from 'react';
import { Input, Icon } from 'union-design';
import Codeframe from '../../components/code-frame';

const { Search, TextArea } = Input;

const InputDemo = () => {
  const ref = useRef();
  console.log('ref', ref);
  return (
    <div>
      <Codeframe
        rightCode={`
import React from 'react';
import { Input } from 'union-design';

const ref = useRef();
console.log('ref', ref);

const demo = () => (
  <div>
    <Input
      allowClear
      placeholder="基本输入"
      onChange={({ target: { value } }) => { console.log('value', value); }}
      onSearch={(value) => { console.log('searchValue', value); }}
      ref={ref}
      style={{ width: 256 }}
    />
  </div>
);
      `}
        rightDemo={(
          <div>
            <Input
              allowClear
              placeholder="基本输入"
              onChange={({ target: { value } }) => { console.log('value', value); }}
              onSearch={(value) => { console.log('searchValue', value); }}
              ref={ref}
              style={{ width: 256 }}
            />
          </div>
      )}
        description={(
          <h3>基本的</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Input } from 'union-design';

const demo = () => (
  <div style={{ width: 256 }}>
    <Input disabled placeholder="不可编辑" />
  </div>
);
      `}
        rightDemo={(
          <div style={{ width: 256 }}>
            <Input
              disabled
              placeholder="不可编辑"
            />
          </div>
      )}
        description={(
          <h3>不可编辑</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Input, Icon } from 'union-design';

const demo = () => (
  <div>
    <Input allowClear addonBefore={<Icon type="add" />} addonAfter="后" />
    <br />
    <br />
    <Input allowClear addonBefore="https://" />
    <br />
    <br />
    <Input style={{ width: 256 }} addonAfter={<Icon type="user" />} />
  </div>
);
      `}
        rightDemo={(
          <div style={{ width: 256 }}>
            <Input allowClear addonBefore={<Icon type="add" />} addonAfter="后" />
            <br />
            <br />
            <Input allowClear addonBefore="https://" />
            <br />
            <br />
            <Input style={{ width: 256 }} addonAfter={<Icon type="user" />} />
          </div>
      )}
        description={(
          <h3>前置/后置标签</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Input } from 'union-design';

const { Search } = Input;

const demo = () => (
  <div>
    <Search onSearch={(value: any) => { console.log('searchValue', value); }} />
  </div>
);
      `}
        rightDemo={(
          <div>
            <Search onSearch={(value: any) => { console.log('searchValue', value); }} />

          </div>
      )}
        description={(
          <h3>搜索框</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Input } from 'union-design';

const { TextArea } = Input;

const demo = () => (
  <div>
    <TextArea
      allowClear
      placehollder="多行输入"
      rows={3}
      onChange={({ target: { value } }) => { console.log('value', value); }}
      style={{ width: 500 }}
    />
  </div>
);
      `}
        rightDemo={(
          <div>
            <TextArea
              allowClear
              placehollder="多行输入"
              rows={3}
              onChange={({ target: { value } }) => { console.log('value', value); }}
              style={{ width: 500 }}
            />
          </div>
      )}
        description={(
          <h3>多行输入</h3>
      )}
      />
    </div>
  );
};

export default InputDemo;
