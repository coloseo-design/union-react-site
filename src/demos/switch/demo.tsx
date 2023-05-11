/* eslint-disable react/button-has-type */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { Switch } from 'union-design';
import Codeframe from '../../components/code-frame';

export default class demo extends React.Component {
  state = {
    update: false,
  };

  render() {
    const { update } = this.state;
    return (
      <>
        <Codeframe
          rightCode={`
import React from 'react';
import { Switch } from 'union-design';

const demo = () => (
  <div>
    <Switch checked={update} disabled={!update} />
    <span style={{ margin: '0 20px' }}><Switch checked={false} onChange={(a, b) => { console.log(a); console.log(b); }} /></span>
    <Switch checked />
    <span style={{ margin: '0 20px' }}><Switch checked disabled /></span>
    <Switch type="icon" />
    <span style={{ margin: '0 20px' }}><Switch type="text" /></span>
    <button onClick={() => {
      this.setState({ update: !update });
    }}
    >
      测试
    </button>
  </div>
);
      `}
          rightDemo={(
            <div>
              <Switch checked={update} disabled={!update} />
              <span style={{ margin: '0 20px' }}><Switch checked={false} onChange={(a, b) => { console.log(a); console.log(b); }} /></span>
              <Switch checked />
              <span style={{ margin: '0 20px' }}><Switch checked disabled /></span>
              <Switch type="icon" />
              <span style={{ margin: '0 20px' }}><Switch type="text" /></span>
              <button onClick={() => {
                this.setState({ update: !update });
              }}
              >
                测试
              </button>
            </div>
      )}
          description={(
            <h3>基本的</h3>
      )}
        />
      </>
    );
  }
}
