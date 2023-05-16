/* eslint-disable react/button-has-type */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { Switch } from 'union-design';

export default () => {
  const [update, setState] = React.useState<boolean>(false);
  return (
    <div>
      <Switch checked={update} disabled={!update} />
      <span style={{ margin: '0 20px' }}><Switch checked={false} onChange={(a, b) => { console.log(a); console.log(b); }} /></span>
      <Switch checked />
      <span style={{ margin: '0 20px' }}><Switch checked disabled /></span>
      <Switch type="icon" />
      <span style={{ margin: '0 20px' }}><Switch type="text" /></span>
      <button onClick={() => {
        setState(!update);
      }}
      >
        测试
      </button>
    </div>
  );
};
