/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React from 'react';
import '../index.less';
import Typography from '../../../components/typography';
import { Anchor } from '../../../components/anchor';

const Img1 = require('./images/1.svg');
const Img2 = require('./images/2.svg');
const Img3 = require('./images/3.svg');

export default () => (
  <div className="typical-template">
    <section>
      <Typography
        id=""
        title={<span className="title">详情页</span>}
        descriptions={[
          <div className="content" key="key">
            展示一个页面的完整信息，主要用于信息浏览，允许对该页面发起编辑等操作。
          </div>,
        ]}
      />
    </section>
    <section>
      <Anchor
        dirs={[
          { id: '设计原则', name: '设计原则' },
          { id: '布局方式', name: '布局方式' },
          { id: '页面类型', name: '页面类型' },
        ]}
        color="#E98A00"
        position="static"
      />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="设计原则"
        vertical
        title={<span className="title" style={{ fontSize: 24 }}>设计原则</span>}
        descriptions={[
          <div className="content" style={{ fontSize: 14 }} key="key">
            <p>直截了当——信息尽量平铺展示，尽量不要做大量隐藏、折叠等操作；</p>
            <p>层次分明——按照接近原则，对信息分层、分组展示，降低单个页面内信息复杂度；</p>
            <p>化繁为简——减少复杂结构的使用，尽量使用相似结构和模块。</p>
          </div>,
        ]}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="布局方式"
        vertical
        title={<span className="title" style={{ fontSize: 24 }}>布局方式</span>}
        descriptions={[
          <div className="content" style={{ fontSize: 14 }} key="key">
            <p>1.选择模版：根据信息的复杂度和相关性模型，选用相应的信息呈现方式，选用合理的布局方案来承载详情页的内容。（见下图）</p>
            <p>2.布局分隔方式：单张卡片/多张卡片/页签分隔。</p>
          </div>,
        ]}
        pic={<img src={Img1} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        id="页面类型"
        vertical
        title={<span className="title" style={{ fontSize: 24 }}>页面类型</span>}
        descriptions={[
          <div className="title" style={{ fontSize: 24, color: 'rgba(0, 0, 0, 0.85)' }} key="key">
            <p style={{ marginBottom: 8, fontSize: 20 }}>基础详情页</p>
            <p style={{ fontSize: 14 }}>仅用做详情查看，不带操作按钮。</p>
          </div>,
        ]}
        pic={<img src={Img2} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ marginBottom: 0 }}>
      <Typography
        vertical
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>高级详情页</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>在页面中跳转新的页面，并带有操作按钮。</span>]}
        pic={<img src={Img3} alt="" />}
      />
    </section>

    <Anchor
      dirs={[
        { id: '设计原则', name: '设计原则' },
        { id: '布局方式', name: '布局方式' },
        { id: '页面类型', name: '页面类型' },
      ]}
    />
  </div>
);
