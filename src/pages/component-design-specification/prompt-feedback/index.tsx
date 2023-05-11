/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React from 'react';
import { Anchor } from '../../../components/anchor';
import Secondary from '../../common/secondary';
import './index.less';
import List from './list';

const img1 = require('./images/1.svg');
const img2 = require('./images/2.svg');
const img3 = require('./images/3.svg');
const img4 = require('./images/4.svg');
const img5 = require('./images/5.svg');
const img6 = require('./images/6.svg');
const img7 = require('./images/7.svg');
const img8 = require('./images/8.svg');
const img9 = require('./images/9.svg');
const img10 = require('./images/10.svg');
const empty = require('./images/empty.png');
const loading = require('./images/loading.png');

const data = [
  {
    id: 0,
    anchor: 'caveat',
    title: '警告提示',
    description: '',
    src: img1,
  },
  {
    id: 1,
    anchor: 'drawer',
    title: '抽屉',
    description: '抽屉层级分为：一级抽屉、多级抽屉、表单抽屉',
    src: img2,
  },
  {
    id: 2,
    anchor: 'dialog',
    title: '对话框',
    description: '',
    src: '',
    children: [
      {
        id: '2-1',
        title: '对话框样式',
        src: img3,
      },
      {
        id: '2-2',
        title: '对话框提示状态',
        src: img4,
      },
    ],
  },
  {
    id: 3,
    anchor: 'global_remind',
    title: '全局提示',
    description: '',
    src: img5,
  },
  {
    id: 4,
    anchor: 'notice',
    title: '通知提醒',
    description: '',
    src: img6,
  },
  {
    id: 5,
    anchor: 'progress',
    title: '进度条',
    description: '',
    src: img7,
  },
  {
    id: 6,
    anchor: 'bubble',
    title: '气泡确认框',
    description: '',
    src: img8,
  },
  {
    id: 7,
    anchor: 'result',
    title: '结果状态',
    description: '',
    src: img9,
  },
  {
    id: 10,
    anchor: 'empty',
    title: '空状态',
    description: '',
    src: empty,
  },
  {
    id: 11,
    anchor: 'loading',
    title: '加载中',
    description: '',
    src: loading,
  },
  {
    id: 8,
    anchor: 'skeleton',
    title: '骨架屏',
    description: '',
    src: img10,
  },
];
export default () => (
  <div className="design-layout feedback">
    <Anchor dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    <div className="feedback-secondary">
      <Secondary
        title={<div style={{ color: '#5C57F2' }}>提示&反馈</div>}
        description={(
          <div>
            用于在必要时向用户反馈操作结果或传达消息。
            <br />
            设计目标：在不同事件下用户都能感知与操作场景和紧急程度匹配的结果反馈或消息提示，做到合理有效的信息传达。
          </div>
        )}
      />
    </div>
    <div style={{ marginTop: 40 }}>
      <Anchor position="static" color="#5c57f2" dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    </div>
    <div className="feedback-list">
      <List data={data} />
    </div>
  </div>
);
