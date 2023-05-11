/* eslint-disable react/display-name */
/* eslint-disable max-len */
import React from 'react';
import Typography from '../../../components/typography';
import { Anchor } from '../../../components/anchor';
import '../index.less';

const LayoutOneImg = require('./images/1.svg');
const LayoutTwoImg = require('./images/2.svg');
const LayoutThreeImg = require('./images/3.svg');
const LayoutFourImg = require('./images/4.svg');
const LayoutFiveImg = require('./images/5.svg');

const dirs = [
  { id: 'layout-one', name: '布局一（首页/系统内新页面）' },
  { id: 'layout-two', name: '布局二（系统外新建页面+面包屑）' },
  { id: 'layout-three', name: '布局三（顶部+侧面双导航）' },
  { id: 'layout-four', name: '布局四（双导航+内开页签）' },
  { id: 'layout-five', name: '布局五（双导航+内开页签+多标签态）' },
];
const topTitleStyle = {
  fontSize: 36,
};
const secondaryTitleStyle = {
  fontSize: 24,
};

export default () => (
  <div className="visual-design">
    <Anchor dirs={dirs} />
    <div className="container">
      <section>
        <Typography
          title={<h2 className="title" style={topTitleStyle}>布局</h2>}
          descriptions={[
            <div className="content-top-level" key="content-top-level">
              <p>空间布局是体系化视觉设计的起点，和传统的平面设计的不同之处在于，UI 界面的布局空间要基于「动态、体系化」的角度出发展开。</p>
              <p>适配统一画板。</p>
              <p>在设计过程中，设计师需要建立适配的概念，根据具体情况判断系统是否需要进行适配，以及哪些区块需要考虑动态布局。中台系统的用户的主流分辨率主要为 1920、1440 和 1366，个别系统还存在 1280 的显示设备。其中 1366*768使用最为广泛 。</p>
              <p>该规范通过网格体系来实现视觉体系的秩序。网格的基数为 8（8的倍数），不仅符合偶数的思路同时能够匹配多数主流的显示设备。通过建立网格的思考方式，还能帮助设计者快速实现布局空间的设计决策同时也能简化设计到开发的沟通损耗。</p>
            </div>,
          ]}
        />
      </section>
      <section>
        <Anchor dirs={dirs} position="static" color="#d6386b" />
      </section>
      <section>
        <Typography
          id="layout-one"
          title={<div className="title" style={secondaryTitleStyle}>布局一（首页/系统内新页面）</div>}
          descriptions={[
            <div className="content-secondary" key="content-secondary">
              <p>首页布局：</p>
              <p>锁定首页，Tab标签页打开依次排开在首页后。按上图尺寸精确布局设计。采用24栅格，每格自适应换算。</p>
              <p>跳转方式：</p>
              <p>采用页面内tab页签跳转方式</p>
            </div>,
          ]}
          pic={<img src={LayoutOneImg} alt="Layout one" />}
          vertical
        />
      </section>
      <div className="section-border-bottom" />
      <section>
        <Typography
          id="layout-two"
          title={<div className="title" style={secondaryTitleStyle}>布局二（系统外新建页面+面包屑）</div>}
          descriptions={[
            <div className="content-secondary" key="content-secondary">
              <p>首页布局：</p>
              <p>锁定首页，新建页面于外部跳转方式实现。按上图尺寸精确布局设计。采用24栅格，每格自适应换算。</p>
              <p>跳转方式：</p>
              <p>外部新页面跳转+面包屑</p>
            </div>,
          ]}
          pic={<img src={LayoutTwoImg} alt="Layout two" />}
          vertical
        />
      </section>
      <div className="section-border-bottom" />
      <section>
        <Typography
          id="layout-three"
          title={<div className="title" style={secondaryTitleStyle}>布局三（顶部+侧面双导航）</div>}
          descriptions={[
            <div className="content-secondary" key="content-secondary">
              <p>首页布局：</p>
              <p>锁定首页，双导航布局。新建页面于外部跳转方式实现。按上图尺寸精确布局设计。采用24栅格，每格自适应换算。</p>
              <p>跳转方式：</p>
              <p>外部新页面跳转+面包屑</p>
            </div>,
          ]}
          pic={<img src={LayoutThreeImg} alt="Layout three" />}
          vertical
        />
      </section>
      <div className="section-border-bottom" />
      <section>
        <Typography
          id="layout-four"
          title={<div className="title" style={secondaryTitleStyle}>布局四（双导航+内开页签）</div>}
          descriptions={[
            <div className="content-secondary" key="content-secondary">
              <p>首页布局：</p>
              <p>锁定首页，双导航布局。新建页面于外部跳转方式实现。按上图尺寸精确布局设计。采用24栅格，每格自适应换算。</p>
              <p>跳转方式：</p>
              <p>外部新页面跳转+面包屑</p>
            </div>,
          ]}
          pic={<img src={LayoutFourImg} alt="Layout four" />}
          vertical
        />
      </section>
      <div className="section-border-bottom" />
      <section>
        <Typography
          id="layout-five"
          title={<div className="title" style={{ ...secondaryTitleStyle, marginBottom: 16 }}>布局五（双导航+内开页签+多标签态）</div>}
          pic={<img src={LayoutFiveImg} alt="Layout five" />}
        />
      </section>
    </div>
  </div>
);
