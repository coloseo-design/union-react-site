import React from 'react';
import { Collapse } from 'union-design';

const { Panel } = Collapse;

export default () => (
  <Collapse activeKey={4} onChange={(a, b) => { console.log(a, b); }}>
    <Panel header="我是折叠面板头部信息" key={1} collapsible>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</Panel>
    <Panel header="我是折叠面板头部信息" key={2}>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</Panel>
    <Panel header="我是折叠面板头部信息" key={3}>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</Panel>
    <Panel header="我是折叠面板头部信息" key={4}>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</Panel>
    <Panel header="我是折叠面板头部信息" key={5} showArrow={false}>
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
    </Panel>
  </Collapse>
);
