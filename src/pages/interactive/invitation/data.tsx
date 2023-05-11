// eslint-disable-next-line import/newline-after-import
import React from 'react';

const in1 = require('./assets/1.svg');
const in2 = require('./assets/2.svg');

/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
export default {
  header: {
    title: <h1 style={{ color: '#3B5ED9', fontSize: 36 }}>提供邀请</h1>,
    description: <div style={{ fontSize: 14, lineHeight: 2, color: 'rgba(0, 0, 0, 0.85)' }}>邀请就是引导用户进入下一个交互层次的提醒和暗示，以表明在下一个界面可以做什么；很多富交互模式（『拖放』、『行内编辑』、『上下文工具』）都有一个共同问题，就是缺少易发现性。所以『提供邀请』是成功完成人机交互的关键所在。</div>,
  },
  logList: [
    {
      id: 'in_static',
      name: '静态邀请',
    },
    {
      id: 'in_dynamic',
      name: '动态邀请',
    },
  ],
  contentList: [
    {
      id: 'in_static',
      title: <div className="title">静态邀请</div>,
      descriptions: <div className="description">
        <div>一般以静态说明形式出现在页面上，不过它们在视觉上也可以表现出多种不同样式。常见类型：『文本邀请』、『白板式邀请』、『未完成邀请』。</div>
      </div>,
      pic: <img src={in1} alt="" />,
      border: true,
    },
    {
      id: 'in_dynamic',
      title: <div className="title">动态邀请</div>,
      descriptions: <div className="description">
        <div>一般以响应用户在特定位置执行特定操作的方式，提供特定的邀请。</div>
      </div>,
      pic: <img src={in2} alt="" />,
    },
  ],
};
