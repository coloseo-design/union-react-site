/* eslint-disable react/display-name */
/* eslint-disable max-len */
import React from 'react';
import Typography from '../../../components/typography';
import { Anchor } from '../../../components/anchor';
import '../index.less';

const FontFamilyImg = require('./images/1.svg');
const FontSizeImg = require('./images/2.svg');
const FontExampleOneImg = require('./images/3.svg');
const FontExampleTwoImg = require('./images/4.svg');

const dirs = [
  { id: 'font-family', name: '字体家族' },
  { id: 'font-size', name: '字体大小' },
  { id: 'font-example', name: '字体案例' },
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
          title={<h2 className="title" style={topTitleStyle}>字体</h2>}
          descriptions={[
            <div className="content-top-level" key="key">
              <p>字体是体系化界面设计中最基本的构成之一。</p>
              <p>文字是信息内容的载体，是记录思想、交流思想、承载语言的图像或符号，而字体则是文字的外在形式特征，是文字的视觉风格表现。合适的字体可以辅助文字，将信息清晰、准确地传递给用户。</p>
            </div>,
          ]}
        />
      </section>
      <section>
        <Anchor dirs={dirs} position="static" color="#d6386b" />
      </section>
      <section>
        <Typography
          id="font-family"
          title={<div className="title" style={secondaryTitleStyle}>字体家族</div>}
          descriptions={[
            <div className="content-secondary" key="key">
              <p>中国联通设计规范体系优先使用系统默认的界面字体，字体的选择是由产品属性或品牌特性的关键词而决定。</p>
              <p>中文推荐：微软雅黑/思源黑体/宋体，</p>
              <p>其中 iOS 系统默认中文字体是</p>
              <p>「苹方 (PingFang)」，</p>
              <p>Android 系统中文字体使用</p>
              <p>「思源黑体 (Noto Sans CJK)」</p>
              <p>英文推荐：Arial，Helvetica Neue</p>
              <p>其中 iOS 系统默认英文字体为</p>
              <p>「San Francisco」，</p>
              <p>Android 系统默认英文字体为：「Roboto」。</p>
            </div>,
          ]}
          pic={<img src={FontFamilyImg} alt="Font family" />}
        />
      </section>
      <div className="section-border-bottom" />
      <section>
        <Typography
          id="font-size"
          title={<div className="title" style={secondaryTitleStyle}>字体大小</div>}
          descriptions={[
            <div className="content-secondary" key="key">
              <p>该规范视觉体系中，我们建议的主要字体为 14，与之对应的行高为 22。其余的字阶的选择可根据具体情况进行自由的定义。建议在一个系统设计中（展示型页面除外），字阶（字号）的选择尽量控制在 3-5 种之间，保持克制的原则。</p>
            </div>,
          ]}
          pic={<img src={FontSizeImg} alt="Font size" />}
        />
      </section>
      <div className="section-border-bottom" />
      <section style={{ marginBottom: 16 }}>
        <Typography
          id="font-example"
          title={<div className="title" style={secondaryTitleStyle}>字体案例</div>}
          descriptions={[
            <div className="content-secondary" key="key">
              <p>如图：分别为两个系统（1366*768）等比例视觉效果由此可见，同比例下，14px + 16px 的字号方案相对 12px 字号方案比较，用户使用起来更为舒适。12px 适用于更大的显示器效果。各系统在进行页面设计时，需考虑使用的屏幕大小。 </p>
            </div>,
          ]}
          pic={<img src={FontExampleOneImg} alt="Font example one" />}
        />
      </section>
      <section>
        <Typography
          descriptions={['']}
          pic={<img src={FontExampleTwoImg} alt="Font example two" />}
        />
      </section>
    </div>
  </div>
);
