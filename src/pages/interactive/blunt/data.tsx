// eslint-disable-next-line import/newline-after-import
import React from 'react';

const b1 = require('./assets/images/1.svg');
const b2 = require('./assets/images/2.svg');

/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
export default {
  header: {
    title: <h1 style={{ color: '#3B5ED9', fontSize: 36 }}>直截了当</h1>,
    descriptions: <div style={{ fontSize: 14, lineHeight: 2, color: 'rgba(0, 0, 0, 0.85)' }}>『需要在哪里输出，就要允许在哪里输入』。这就是直接操作的原理。不要为了编辑内容而打开另一个页面，应该直接在上下文中实现编辑。</div>,
  },
  logList: [
    {
      id: 'b_single',
      name: '单字段行页内编辑',
    },
    {
      id: 'b_multi',
      name: '多字段行页内编辑',
    },
  ],
  contentList: [
    {
      id: 'b_single',
      title: <div className="title">单字段行页内编辑</div>,
      descriptions: <div className="description">
        <div>状态一：在可编辑行附近出现提示图标；</div>
        <div>状态二：鼠标悬停时，『指针』变为『手型』，编辑区域出现提示颜色，出现『Tooltips』提示单击编辑； </div>
        <div>状态三：鼠标点击后，出现『输入框』、『确定』、『取消』表单元素，同时光标定位在『输入框』中。</div>
      </div>,
      pic: <img src={b1} alt="" />,
      border: true,
    },
    {
      id: 'b_multi',
      title: <div className="title">多字段行页内编辑</div>,
      descriptions: <div className="description">
        <div>编辑模式在不破坏整体性的前提下，可扩大空间，以便放下『输入框』等表单元素；其中，在 Table 中进行编辑模式切换时，需要保证每列的不跳动。</div>
      </div>,
      pic: <img src={b2} alt="" />,
    },
  ],
};
