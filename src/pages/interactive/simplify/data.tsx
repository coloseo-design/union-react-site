// eslint-disable-next-line import/newline-after-import
import React from 'react';

const s1 = require('./assets/1.svg');
const s2 = require('./assets/2.svg');
const s3 = require('./assets/3.svg');
const s4 = require('./assets/4.svg');

/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
export default {
  header: {
    title: <h1 style={{ color: '#3B5ED9', fontSize: 36 }}>简化交互</h1>,
    description: <div style={{ fontSize: 14, lineHeight: 2, color: 'rgba(0, 0, 0, 0.85)' }}>如果用户鼠标移动距离越少、对象相对目标越大，那么用户越容易操作。通过运用上下文工具（即：放在内容中的操作工具），使内容和操作融合，从而简化交互。</div>,
  },
  logList: [
    {
      id: 's_time',
      name: '实时可见',
    },
    {
      id: 's_hover',
      name: '悬停即现',
    },
    {
      id: 's_switch',
      name: '开关显示',
    },
    {
      id: 's_expand',
      name: '扩大可点击区域',
    },
  ],
  contentList: [
    {
      id: 's_time',
      title: <div className="title">实时可见</div>,
      descriptions: <div className="description">
        <div>如果某个操作非常重要，就应该把它放在界面中，并实时可见。</div>
        <div style={{ marginTop: 8 }}>状态一：在文案中出现一个相对明显的点击区域；</div>
        <div>状态二：鼠标悬停时，鼠标『指针』变为『手型』，底色发生变化，邀请用户点击。</div>
        <div>状态三：鼠标点击后，和未点击前有明显的区分。</div>
      </div>,
      pic: <img src={s1} alt="" />,
      border: true,
    },
    {
      id: 's_hover',
      title: <div className="title">悬停即现</div>,
      descriptions: <div className="description">
        <div>如果某个操作不那么重要，或者使用『实时可见工具』过于啰嗦会影响用户阅读时，可以在悬停在该对象上时展示操作项。</div>
        <div style={{ marginTop: 8 }}>悬停即现工具示例</div>
        <div>鼠标悬停时，出现操作项。</div>
      </div>,
      pic: <img src={s2} alt="" />,
      border: true,
    },
    {
      id: 's_switch',
      title: <div className="title">开关显示</div>,
      descriptions: <div className="description">
        <div>如果某些操作只需要在特定模式时显示，可以通过开关来实现。</div>
        <div style={{ marginTop: 8 }}> 开关显示工具示例</div>
        <div>用户点击『修改』后，Table 中『文本』变成『输入框』，开启编辑功能。</div>
      </div>,
      pic: <img src={s3} alt="" />,
      border: true,
    },
    {
      id: 's_expand',
      title: <div className="title">扩大可点击区域</div>,
      descriptions: <div className="description">
        <div>设置整个单元格为热区，以便用户触发；当需要增强按钮的响应性时，可以通过增加用户点击热区的范围，而不是增大按钮形状，从而增强响应性，又不缺失美感。</div>
        <div style={{ marginTop: 8 }}> 文字链热区示例</div>
        <div>当悬浮在 ID 所在的文字链单元格时，鼠标『指针』随即变为『手型』，单击即可跳转。</div>
        <div style={{ marginTop: 8 }}>按钮热区示例</div>
        <div>鼠标移入按钮附近，即可激活 Hover 状态。</div>
      </div>,
      pic: <img src={s4} alt="" />,
    },
  ],
};
