/* eslint-disable react/button-has-type */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { Switch } from 'union-design';

export default () => {
  const [update, setState] = React.useState<boolean>(false);
  return (
    <div>
      <p style={{ margin: '24px 0px 10px 0px' }}>基本用法</p>
      <Switch onChange={(a, b) => { console.log(a); console.log(b); }} />
      <p style={{ margin: '24px 0px 10px 0px' }}>禁止状态</p>
      <Switch disabled />
      <p style={{ margin: '24px 0px 10px 0px' }}>选中状态</p>
      <Switch checked />
      <p style={{ margin: '24px 0px 10px 0px' }}>icon 状态切换</p>
      <Switch type="icon" />
      <p style={{ margin: '24px 0px 10px 0px' }}>文字状态切换</p>
      <Switch type="text" />
    </div>
  );
};
