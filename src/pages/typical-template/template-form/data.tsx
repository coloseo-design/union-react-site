// eslint-disable-next-line import/newline-after-import
import React from 'react';

const form1 = require('./assets/1.svg');
const form2 = require('./assets/2.svg');

/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
export default {
  header: {
    title: <h1 style={{ color: '#E98A00', fontSize: 36 }}>表单页</h1>,
    descriptions: <p style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)', lineHeight: 2 }}>表单页——信息添加、信息录入页面，用来确保用户按照要求录入信息并提交给系统进行设置； 是B端页面中最为重要的信息输入页面。</p>,
  },
  logList: [
    {
      id: 'form_design',
      name: '设计原则',
    },
    {
      id: 'form_layout',
      name: '布局方式',
    },
    {
      id: 'form_style',
      name: '表单样式',
    },
  ],
  contentList: [
    {
      id: 'form_design',
      title: <div className="title" style={{ color: '#E98A00' }}>设计原则</div>,
      descriptions: <div className="description">
        <p>高效——需求人员整理出有逻辑的字段后，用户通过该页面快速完成表单任务；</p>
        <p>明确——字段内容传达准确，用户感知及时响应并反馈；</p>
        <p>安全——合理的操作后果保障机制，如：针对复杂表单提供分步或即时保存机制；针对不同场景任务提供返回、重置、取消、清空、撤销等操作。</p>
      </div>,
      border: true,
    },
    {
      id: 'form_layout',
      title: <div className="title" style={{ color: '#E98A00', marginTop: 40 }}>布局方式</div>,
      descriptions: <div className="description" style={{ marginRight: 0 }}>
        <p>选择模版：根据信息的复杂度和相关性模型，选用相应的信息呈现方式，选用合理的布局方案来承载详情页的内容。（见下图） 布局分隔方式：基础布局/区域内分组/卡片分组。</p>
      </div>,
      vertical: true,
      pic: <img src={form1} alt="" />,
      border: true,
    },
    {
      id: 'form_style',
      title: <div className="title" style={{ color: '#E98A00', marginTop: 40 }}>表单样式</div>,
      descriptions: <div className="description" style={{ marginRight: 0 }}>
        <div>基础表单样式：当需要完成一个简单快速的任务，例如输入少量信息即可完成创建。</div>
      </div>,
      vertical: true,
      pic: <img src={form2} alt="" />,
    },
  ],
};
