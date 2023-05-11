/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React from 'react';
import '../index.less';
import Typography from '../../../components/typography';
import { Anchor } from '../../../components/anchor';

const img1 = require('./images/1.svg');
const img2 = require('./images/2.svg');
const img3 = require('./images/3.svg');

export default () => (
  <div className="typical-template">
    <section>
      <Typography
        id=""
        title={<span className="title">结果页</span>}
        descriptions={[
          <div className="content" key="content">
            是用一个页面反馈操作结果，是反馈模式中最强的一种。即：弹框提示。
          </div>,
        ]}
      />
    </section>
    <section>
      <Anchor
        dirs={[
          { id: '设计原则', name: '设计原则' },
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
          <div className="content" style={{ fontSize: 14 }} key="content">
            <p>慎重使用——用于吸引用户强注意的场景。</p>
            <p>即时结束——当结果状态为成功时，可以默认提供几秒（建议3-5秒）后自动跳转。</p>
            <p>精简信息——信息需精简，仅展示结果相关内容，特殊场景可以增加补充信息。</p>
          </div>,
        ]}
        pic={<img src={img1} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <div id="页面类型">
        <div className="title" style={{ fontSize: 24 }}>页面类型</div>
        <div key="content" className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)', marginTop: 16 }}>基础结果页</div>
        <img src={img2} alt="" style={{ width: '100%', marginTop: 16 }} />
      </div>
    </section>

    <div>
      <div style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}> 高级结果页</div>
      <img src={img3} alt="" style={{ marginTop: 16, width: '100%' }} />
    </div>

    <Anchor
      dirs={[
        { id: '设计原则', name: '设计原则' },
        { id: '页面类型', name: '页面类型' },
      ]}
    />
  </div>
);
