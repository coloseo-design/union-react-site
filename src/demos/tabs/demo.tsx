/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Tabs, Icon } from 'union-design';
import Codeframe from '../../components/code-frame';

const { Pane } = Tabs;

const TabsDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Tabs } from 'union-design';

const { Pane } = Tabs;

const demo = () => (
  <div>
    <Tabs defaultActiveKey="3" type="line">
      <Pane key="1" tab="页签">
        <div style={{ height: 60, padding: 12 }}>
        页面1
      </div>
      </Pane>
      <Pane key="2" tab="四字页签">
        <div style={{ height: 60, padding: 12 }}>
        页面2
      </div>
      </Pane>
      <Pane tab="五个字页签" key="3">
        <div style={{ height: 60, padding: 12 }}>
        页面3
      </div>
      </Pane>
      <Pane
        key="4"
        tab={(
          <span>
            <Icon type="apps" style={{ paddingRight: 8, color: '#444A5E' }} />
            带icon页签
          </span>
        )}
      >
        <div style={{ height: 60, padding: 12 }}>
        页面4
      </div>
      </Pane>
    </Tabs>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Tabs defaultActiveKey="3" type="line">
            <Pane key="1" tab="页签">
              <div style={{ height: 60, padding: 12 }}>
                页面1
              </div>
            </Pane>
            <Pane key="2" tab="四字页签">
              <div style={{ height: 60, padding: 12 }}>
                页面2
              </div>
            </Pane>
            <Pane tab="五个字页签" key="3">
              <div style={{ height: 60, padding: 12 }}>
                页面3
              </div>
            </Pane>
            <Pane
              key="4"
              tab={(
                <span>
                  <Icon type="apps" style={{ paddingRight: 8, color: '#444A5E' }} />
                  带icon页签
                </span>
          )}
            >
              <div style={{ height: 60, padding: 12 }}>
                页面4
              </div>
            </Pane>
          </Tabs>
        </div>
      )}
      description={(
        <h3>type='line'</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Tabs, Icon } from 'union-design';

const { Pane } = Tabs;

const demo = () => (
  <div>
    <Tabs defaultActiveKey="2" type="card">
      <Pane key="1" tab="页签">
        <div style={{ height: 60, padding: 12 }}>页面1</div>
      </Pane>
      <Pane key="2" tab="四字页签">
        <div style={{ height: 60, padding: 12 }}>页面2</div>
      </Pane>
      <Pane tab="五个字页签" key="3">
        <div style={{ height: 60, padding: 12 }}>页面3</div>
      </Pane>
      <Pane
        key="4"
        tab={(
          <span>
            <Icon type="apps" style={{ paddingRight: 8, color: '#444A5E' }} />
            带icon页签
          </span>
        )}
      >
        <div style={{ height: 60, padding: 12 }}>页面4</div>
      </Pane>
    </Tabs>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Tabs defaultActiveKey="2" type="card">
            <Pane key="1" tab="页签">
              <div style={{ height: 60, padding: 12 }}>页面1</div>
            </Pane>
            <Pane key="2" tab="四字页签">
              <div style={{ height: 60, padding: 12 }}>页面2</div>
            </Pane>
            <Pane tab="五个字页签" key="3">
              <div style={{ height: 60, padding: 12 }}>页面3</div>
            </Pane>
            <Pane
              key="4"
              tab={(
                <span>
                  <Icon type="apps" style={{ paddingRight: 8, color: '#444A5E' }} />
                  带icon页签
                </span>
              )}
            >
              <div style={{ height: 60, padding: 12 }}>页面4</div>
            </Pane>
          </Tabs>
        </div>
      )}
      description={(
        <h3>type='card'</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Tabs, Icon } from 'union-design';

const { Pane } = Tabs;

const demo = () => (
  <div>
    <Tabs defaultActiveKey="3" type="page">
      <Pane key="1" tab="页签">
        <div style={{ height: 60, padding: 12 }}>页面1</div>
      </Pane>
      <Pane key="2" tab="四字页签">
        <div style={{ height: 60, padding: 12 }}>页面2</div>
      </Pane>
      <Pane tab="五个字页签" key="3">
        <div style={{ height: 60, padding: 12 }}>页面3</div>
      </Pane>
      <Pane
        key="4"
        tab={(
          <span>
            <Icon type="apps" style={{ paddingRight: 8, color: '#444A5E' }} />
            带icon页签
          </span>
    )}
      >
        <div style={{ height: 60, padding: 12 }}>页面4</div>
      </Pane>
    </Tabs>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Tabs defaultActiveKey="3" type="page">
            <Pane key="1" tab="页签">
              <div style={{ height: 60, padding: 12 }}>页面1</div>
            </Pane>
            <Pane key="2" tab="四字页签">
              <div style={{ height: 60, padding: 12 }}>页面2</div>
            </Pane>
            <Pane tab="五个字页签" key="3">
              <div style={{ height: 60, padding: 12 }}>页面3</div>
            </Pane>
            <Pane
              key="4"
              tab={(
                <span>
                  <Icon type="apps" style={{ paddingRight: 8, color: '#444A5E' }} />
                  带icon页签
                </span>
              )}
            >
              <div style={{ height: 60, padding: 12 }}>页面4</div>
            </Pane>
          </Tabs>
        </div>
      )}
      description={(
        <h3>type='page'</h3>
      )}
    />
  </div>
);

export default TabsDemo;
