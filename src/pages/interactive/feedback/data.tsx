// eslint-disable-next-line import/newline-after-import
import React from 'react';

const f1 = require('./assets/1.svg');
const f2 = require('./assets/2.svg');

/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
export default {
  header: {
    title: <h1 style={{ color: '#3B5ED9', fontSize: 36 }}>即时反馈</h1>,
    description: <div style={{ fontSize: 14, lineHeight: 2, color: 'rgba(0, 0, 0, 0.85)' }}>用户进行了操作或者内部数据发生了变化，系统就应该立即有一个对应的反馈，同时输入量级越大、重要性越高，那么反馈量级越大、重要性越高。</div>,
  },
  logList: [
    {
      id: 'f_search',
      name: '查询模式',
    },
    {
      id: 'f_back',
      name: '反馈模式',
    },
  ],
  contentList: [
    {
      id: 'f_search',
      title: <div className="title">查询模式</div>,
      descriptions: <div className="description">
        <div>用户输入时，下拉列表会随着输入的关键词显示匹配项。</div>
      </div>,
      pic: <img src={f1} alt="" />,
      border: true,
    },
    {
      id: 'f_back',
      title: <div className="title">反馈模式</div>,
      descriptions: <div className="description">
        <div>即时告知进度，保持与用户的沟通。常见的进度指示：『按钮加载』、『表格加载』、『富列表加载』、『页面加载』。</div>
      </div>,
      pic: <img src={f2} alt="" />,
    },
  ],
};
