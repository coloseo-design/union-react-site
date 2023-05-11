/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React from 'react';
import './index.less';
import Secondary from '../../common/secondary';
import List from './list';
import { Anchor } from '../../../components/anchor';

const img1 = require('./images/1.svg');
const img2 = require('./images/2.svg');
const img3 = require('./images/3.svg');

const data = [
  {
    id: 0,
    anchor: 'principle',
    title: '设计原则',
    description: (
      <div>
        可寻性：定位用户想要的信息；
        <br />
        降低记忆负载：整理用户再次访问的核心目标，为可能的目的地提供最短导航路径。
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
        1.展示与日常工作相关模块，将总模块数量控制在 5-9 个；
        <br />
        2.尽量在首屏呈现最常使用的内容；
        <br />
        3.提供基于角色的差异化视图。
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
        尽量保持首页占1屏；
        <br />
        {' '}
        首页中一般由：数据、内容（待办/待阅/通知/资讯）、 功能导航、个人信息、快捷功能区。
      </div>
    ),
    src: [img1],
  },
  {
    id: 4,
    anchor: 'base',
    title: '基础模版',
    description: '',
    src: [img2, img3],
  },
];
export default () => (
  <div className="design-layout workspace">
    <Anchor dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    <div className="workspace-secondary">
      <Secondary
        title={<div style={{ color: '#E98A00' }}>工作台</div>}
        description={(
          <div>
            工作台在中后台系统里常被作为应用的主页，提供常用信息入口。
            <br />
            呈现用户当前需要关注的信息，缩短获取关键信息的路径；
            <br />
            同时允许用户在工作台直接操作一些高频任务。
          </div>
        )}
      />
    </div>
    <div style={{ margin: '48px 0' }}>
      <Anchor position="static" color="#e98a00" dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    </div>
    <div className="workspace-list">
      <List data={data} />
    </div>
  </div>
);
