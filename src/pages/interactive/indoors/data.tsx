// eslint-disable-next-line import/newline-after-import
import React from 'react';

const i1 = require('./assets/1.svg');
const i2 = require('./assets/2.svg');
const i3 = require('./assets/3.svg');
const i4 = require('./assets/4.svg');
const i5 = require('./assets/5.svg');
const i6 = require('./assets/6.svg');
const i7 = require('./assets/7.svg');
const i8 = require('./assets/8.svg');
const i9 = require('./assets/9.svg');

/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
export default {
  header: {
    title: <h1 style={{ color: '#3B5ED9', fontSize: 36 }}>足不出户</h1>,
    description: <div style={{ fontSize: 14, lineHeight: 2, color: 'rgba(0, 0, 0, 0.85)' }}>『能在这个页面解决的问题，就不要去其它页面解决，因为任何页面刷新和跳转都会引起变化盲视，导致用户心流（Flow）被打断。</div>,
  },
  logList: [
    {
      id: 'i_cover',
      name: '覆盖层',
    },
    {
      id: 'i_embed',
      name: '嵌入层',
    },
    {
      id: 'i_processing',
      name: '流程处理',
    },
  ],
  contentList: [
    {
      id: 'i_cover',
      title: <div className="title" style={{ marginBottom: 16 }}>覆盖层</div>,
      descriptions: <div className="description">
        <div className="second_title">输入覆盖层：</div>
        <div>在覆盖层上，让用户直接进行少量字段的输入。</div>
      </div>,
      pic: <img src={i1} alt="" />,
    },
    {
      id: 'i_cover1',
      title: '',
      descriptions: <div className="description">
        <div className="second_title">二次确认覆盖层：</div>
        <div>通过简单的覆盖提醒与点击，而非是频繁的『对话框』让用户有二次选择与反悔的机会。</div>
        <div style={{ marginTop: 8 }}>正确示例：</div>
        <div>用户点击『删除』后，直接操作；出现 『全局提醒』 告知用户操作成功，并提供用户『撤销』的按钮；用户进行下一个操作或者 1 分钟内不进行任何操作， 『全局提醒』 消失，用户无法再『撤销』。</div>
      </div>,
      pic: <img src={i2} alt="" />,
    },
    {
      id: 'i_cover2',
      title: '',
      descriptions: <div className="description">
        <div>特例：</div>
        <div>在执行某些无法『撤销』的操作时，可以点击『删除』后，出现『气泡确认框』进行二次确认，在当前页面完成任务。</div>
      </div>,
      pic: <img src={i3} alt="" />,
    },
    {
      id: 'i_cover3',
      title: '',
      descriptions: <div className="description">
        <div>错误示例：</div>
        <div> 滥用 『对话框』进行二次确认，就像『狼来了』一样，既打断用户心流，也无法避免失误的发生。</div>
      </div>,
      pic: <img src={i4} alt="" />,
    },
    {
      id: 'i_cover4',
      title: '',
      descriptions: <div className="description">
        <div className="second_title">详情页覆盖层：</div>
        <div>一般在列表中，通过用户『悬停』/『点击』某个区块，在当前页加载该条列表项的更多详情信息。</div>
      </div>,
      pic: <img src={i5} alt="" />,
      border: true,
    },
    {
      id: 'i_embed',
      title: <div className="title" style={{ marginBottom: 16 }}>嵌入层</div>,
      descriptions: <div className="description">
        <div className="second_title">列表嵌入层：</div>
        <div>在列表中，显示某条列表项的详情信息，保持上下文不中断。</div>
      </div>,
      pic: <img src={i6} alt="" />,
      top: true,
    },
    {
      id: 'i_embed1',
      title: '',
      descriptions: <div className="description">
        <div className="second_title">标签页：</div>
        <div>将多个平级的信息进行整理和分类了，一次只显示一组信息。</div>
      </div>,
      pic: <img src={i7} alt="" />,
      border: true,
    },
    {
      id: 'i_processing',
      title: <div className="title" style={{ marginBottom: 16 }}>流程处理</div>,
      descriptions: <div className="description">
        <div className="second_title">连续选择：</div>
        <div>基于用户的一系列选择，确定某个信息。</div>
      </div>,
      pic: <img src={i8} alt="" />,
      top: true,
    },
    {
      id: 'i_processing1',
      title: '',
      descriptions: <div className="description">
        <div className="second_title">弹出框式步骤条：</div>
        <div>虽然弹出框的出现会打断用户的心流，但是有时候在弹出框中使用「步骤条」来管理复杂流程也是可行的。</div>
      </div>,
      pic: <img src={i9} alt="" />,
    },
  ],
};
