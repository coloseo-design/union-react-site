/* eslint-disable react/jsx-curly-brace-presence */
// eslint-disable-next-line import/newline-after-import
import React from 'react';

const t1 = require('./assets/1.svg');
const t2 = require('./assets/2.svg');

/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
export default {
  header: {
    title: <h1 style={{ color: '#E98A00', fontSize: 36 }}>列表页</h1>,
    descriptions: <p style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)', lineHeight: 2 }}>列表页可以查看和处理大量的条目，常有导航至详情的作用。用户可在列表页对条目进行筛选、对比、新增、分析、下钻至条目完整详情页等操作。</p>,
  },
  logList: [
    {
      id: 't_design',
      name: '设计原则',
    },
    {
      id: 't_layout',
      name: '页面布局',
    },
    {
      id: 't_style',
      name: '列表样式',
    },
  ],
  contentList: [
    {
      id: 't_design',
      title: <div className="title" style={{ color: '#E98A00' }}>设计原则</div>,
      descriptions: <div className="description">
        <p>易扫读——采用格式一致的外观，突出有利于对象识别的关键信息。利用富交互分层展示信息以减少认知负荷。</p>
        <p>可寻性——列表以易于浏览的逻辑排序。提供合适的搜寻组件帮助用户快速查找信息。</p>
      </div>,
      border: true,
    },
    {
      id: 't_layout',
      title: <div className="title" style={{ color: '#E98A00', marginTop: 40, width: 96 }}>页面布局</div>,
      descriptions: <div className="description">{''}</div>,
      vertical: false,
      pic: <img src={t1} alt="6" style={{ paddingTop: 40 }} />,
      border: true,
    },
    {
      id: 't_style',
      title: <div className="title" style={{ color: '#E98A00', marginTop: 40 }}>列表样式</div>,
      descriptions: <div className="description" style={{ marginRight: 0 }}>
        <div style={{ margin: '8px 0px' }}>筛选（收起）：</div>
      </div>,
      vertical: true,
      pic: <img src={t2} alt="5" />,
    },
  ],
};
