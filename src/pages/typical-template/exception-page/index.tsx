/* eslint-disable react/display-name */
import React from 'react';
import Typography from '../../../components/typography';
import { Anchor } from '../../../components/anchor';
import './styles/index.less';

const PrincipleImg = require('./images/principle.svg');
const NotFoundImg = require('./images/2@2x.png');
const InternetServerErrorImg = require('./images/3@2x.png');
const networkPng = require('./images/4@2x.png');
const ImcompatibleImg = require('./images/imcompatiple.svg');

const dirs = [
  { id: 'design-principle', name: '设计原则' },
  { id: 'error-404', name: '错误404' },
  { id: 'error-500', name: '错误500' },
  { id: 'network', name: '无网络' },
  { id: 'imcompatible', name: '浏览器不兼容' },
];

const topTitleStyle = {
  fontSize: 36,
};
const secondaryTitleStyle = {
  fontSize: 24,
};

export default () => (
  <div className="exception-page">
    <Anchor dirs={dirs} />
    <div className="container">
      <section>
        <Typography
          title={<h2 className="title" style={topTitleStyle}>异常页</h2>}
          descriptions={[
            <div className="content-top-level" key="key">
              <p>用于展示页面异常状态;（错误404、错误403、错误500、不兼容等…）</p>
              <p>解释发生了什么异常，为用户提供相应建议或操作，避免用户感到迷失和困惑。</p>
            </div>,
          ]}
        />
      </section>
      <section>
        <Anchor dirs={dirs} position="static" color="#e98a00" />
      </section>
      <section>
        <Typography
          id="design-principle"
          title={<div className="title" style={secondaryTitleStyle}>设计原则</div>}
          descriptions={[
            <div className="content-secondary" key="key">
              <p>友好——使用友好、清晰的语言来表达；</p>
              <p>提供邀请——引导用户进入下一个交互层次的提醒和暗示，以表明在下一个界面可以做什么。</p>
            </div>,
          ]}
          pic={<img src={PrincipleImg} alt="principle" />}
          vertical
        />
      </section>
      <div className="section-border-bottom" />
      <section>
        <div id="error-404">
          <div className="title" style={secondaryTitleStyle}>错误404</div>
          <img src={NotFoundImg} alt="404" style={{ marginTop: 16, width: '100%' }} />
        </div>
      </section>
      <div className="section-border-bottom" />
      <section>
        <div id="error-500">
          <div className="title" style={secondaryTitleStyle}>错误500</div>
          <img src={InternetServerErrorImg} alt="404" style={{ marginTop: 16, width: '100%' }} />
        </div>
      </section>
      <div className="section-border-bottom" />
      <section>
        <div id="network">
          <div className="title" style={secondaryTitleStyle}>无网络</div>
          <img src={networkPng} alt="404" style={{ marginTop: 16, width: '100%' }} />
        </div>
      </section>
      <div className="section-border-bottom" />
      <section>
        <Typography
          id="imcompatible"
          title={<div className="title" style={secondaryTitleStyle}>浏览器不兼容</div>}
          descriptions={[
            <div className="content-secondary" key="key">
              <p>异常页除了众所周知的异常提示页面，在联通M域系统中还有“浏览器不兼容解决方案页”。</p>
              <p>这里提供三种常见解决方案</p>
            </div>,
          ]}
          pic={<img src={ImcompatibleImg} alt="Imcompatible" />}
          vertical
        />
      </section>
    </div>
  </div>
);
