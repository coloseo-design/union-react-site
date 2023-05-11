/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React from 'react';
import Secondary from '../../common/secondary';
import List from './list';
import './index.less';
import { Anchor } from '../../../components/anchor';

const img1 = require('./images/1.svg');
const img2 = require('./images/2.svg');

const data = [
  {
    id: 0,
    anchor: 'principle',
    title: '设计原则',
    description: (
      <div>
        登陆顺畅：引导用户快速进入系统；
        <br />
        提升企业特征：作为企业登陆系统的第一步，打造统一的登陆样式，形成文化属性。
      </div>
    ),
    src: [],
  },
  {
    id: 2,
    anchor: 'suggest',
    title: '设计建议',
    description: (
      <div>
        基础模版页面大气简单；
        <br />
        特殊状态下与文化、节日等结合做个性化主题。
      </div>
    ),
    src: [],
  },
  {
    id: 3,
    anchor: 'layout',
    title: '页面布局',
    description: (
      <div>
        1.全屏展示一张简单装饰底图；
        <br />
        2.右侧黄金分割区做登陆模块。
      </div>
    ),
    src: [img1],
  },
  {
    id: 4,
    anchor: 'base',
    title: '基础模版',
    description: '',
    src: [img2],
  },
];
export default () => (
  <div className="design-layout login">
    <Anchor dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    <div className="login-secondary">
      <Secondary
        title={<div style={{ color: '#E98A00' }}>登陆页</div>}
        description={(
          <div>
            登陆页在中后台系统里常被作为体现企业文化、企业属性的入口。
            <br />
            是进入系统前的必要窗口。在登陆页需要直观的说明登陆需要的用户名、密码等策略。好做密码找回机制与报错修改机制，是用户最早进入体验感知的第一步。
          </div>
        )}
      />
    </div>
    <div style={{ margin: '40px 0' }}>
      <Anchor position="static" color="#e98a00" dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    </div>
    <div className="login-list">
      <List data={data} />
    </div>
  </div>
);
