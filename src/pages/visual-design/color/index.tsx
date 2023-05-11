/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/display-name */
/* eslint-disable max-len */
import React from 'react';
import Typography from '../../../components/typography';
import { Anchor } from '../../../components/anchor';
import '../index.less';

const BasicColorBoardImg = require('./images/1.svg');
const NeturalColorImg = require('./images/2.svg');
const ColorSystemImg = require('./images/3.svg');
const ColorSystemExampleImg = require('./images/4.svg');
const DynamicDescriptionImg = require('./images/5.svg');
const AuxiliaryColorImg = require('./images/6.svg');
const SemanticColorImg = require('./images/7.svg');
const FeatColorImg = require('./images/8.svg');
const AuxiliaryColorExampleImg = require('./images/9.svg');

const dirs = [
  { id: 'color-model', name: '色彩模型' },
  { id: 'color-board', name: '基础色板+中性色板' },
  { id: 'brand-color', name: '产品级色彩体系（品牌色）' },
  { id: 'auxiliary-color', name: '产品级色彩体系（辅助色）' },
];
const lineHeightStyle = {
  lineHeight: '72px',
};
const topTitleStyle = {
  fontSize: 36,
};
const secondaryTitleStyle = {
  fontSize: 24,
};

const thirdTitleStyle = {
  fontSize: 20,
};

export default () => (
  <div className="visual-design">
    <Anchor dirs={dirs} />
    <div className="container">
      <section>
        <Typography
          title={<h2 className="title" style={topTitleStyle}>色彩</h2>}
          descriptions={[
            <div className="content-top-level" key="content-top-level">
              <p>中国联通设计规范中将色彩体系解读成两个层面：系统级色彩体系和产品级色彩体系。</p>
              <p>系统级色彩体系：主要定义了设计规范中的基础色板、中性色板和数据可视化色板；</p>
              <p>产品级色彩体系：则是在具体设计过程中，基于系统色彩进一步定义符合产品调性以及功能诉求的颜色。</p>
            </div>,
          ]}
        />
      </section>
      <section>
        <Anchor dirs={dirs} position="static" color="#d6386b" />
      </section>
      <section>
        <Typography
          id="color-model"
          title={<div className="title" style={secondaryTitleStyle}>色彩模型</div>}
          descriptions={[
            <div className="content-secondary" key="content-top-level">
              <p>
                设计系统优先使用HSB颜色模式，在这个颜色模型中，H表示色相，S表示饱和度，B表示亮度。 用HSB模式调色就是依靠我们的眼睛对画面的感受进行调整，sketch中的拾色器就是以HSB的形式拾色，色相是以360度来排列颜色的，当色相处于0度与360度的时候都是最纯的红色。该模型更便于设计师在调整色彩时对于颜色有明确的心理预期，同时也方便团队间的沟通。
              </p>
            </div>,
          ]}
        />
      </section>
      <div className="section-border-bottom" />
      <section>
        <Typography
          id="color-board"
          title={<div className="title" style={secondaryTitleStyle}>基础色板+中性色板</div>}
          descriptions={[
            <div className="content-secondary" key="content-top-level">
              <p>在设计色彩体系的时候，设计师并不是依据经验对色板做简单的定义，而是运用理性的设计思维方法，通过大量的观察，对变化中的色彩进行提炼。设计师将大量的色彩搭配模块化、组件化，将色彩规则进行前置，用户只要去选择合适的色彩组件用就可以，不必担心界面里面的跳转细节，这就极大降低专业性和沟通成本，也就降低研发的不确定性。</p>
              <p>
                本设计规范中，以红、黄、蓝为基础色板，辅助色板生成器，设计师可自由搭配产品配色，这些颜色可以满足目前研发中心的中后台系统色彩需求。
                ——参见以下图例
              </p>
            </div>,
          ]}
          pic={<img src={BasicColorBoardImg} alt="Basic color board" />}
          vertical
        />
      </section>
      <section>
        <Typography
          title={<div style={thirdTitleStyle}>中性色</div>}
          descriptions={[
            <div className="content-secondary" key="content-top-level">
              <p>中性色主要被大量的应用在界面的文字部分，此外背景、边框、分割线、等场景中也非常常见。产品中性色的定义需要考虑深色背景以及浅色背景的差异。建议：中性色在落地的时候按照 黑、白 透明度的方式实现。</p>
              <p>其他在系统中出现的颜色，可根据色彩体系中的“辅助色”透明度变化，自行调配。</p>
              <p>——参见以下图例</p>
            </div>,
          ]}
          pic={<img src={NeturalColorImg} alt="netural color" />}
        />
      </section>
      <div className="section-border-bottom" />
      <section style={{ marginBottom: 16 }}>
        <Typography
          id="brand-color"
          title={<div className="title" style={secondaryTitleStyle}>产品级色彩体系（品牌色）</div>}
          descriptions={[
            <div className="content-secondary" key="content-top-level">
              <p>品牌色是体现产品特性和传播理念最直观的视觉元素之一。在色彩选取时，需要先明确品牌色在界面中的使用场景及范围。</p>
              <p>
                品牌色的数量根据品牌特性制定，可以1个也可以多个，用于“
                <span className="keyword">界面色、Button、提示、ICON</span>
                等”需要突出品牌特征的地方，是在业务中经常使用的颜色。
              </p>
              <p>联通设计系统的品牌色取自中国联通品牌色红色色彩范围，通过色彩生成算法，形成完整色彩域。该规范中，主品牌色Hex 值为 #b30000，辅助新联通二级品牌色Hex 值为 #207EEA，应用场景包括：关键行动点，操作状态、重要信息高亮，图形化等场景。</p>
              <p>——参见以下图例</p>
            </div>,
          ]}
          pic={<img src={ColorSystemImg} alt="Color system" />}
          vertical
        />
      </section>
      <section>
        <Typography
          pic={<img src={ColorSystemExampleImg} alt="example" />}
        />
      </section>
      <section>
        <Typography
          title={<div style={thirdTitleStyle}>动态描述</div>}
          pic={<img src={DynamicDescriptionImg} alt="Dynamic description" />}
        />
      </section>
      <div className="section-border-bottom" />
      <section>
        <Typography
          id="auxiliary-color"
          title={<div className="title" style={secondaryTitleStyle}>产品级色彩体系（辅助色）</div>}
          descriptions={[
            <div className="content-secondary" key="content-top-level">
              <p>辅助色是基于色彩体系，并结合数据可视化特性而设计。在可视化设计中，色板的运用原则上优先保障准确性，考虑在操作指引、交互反馈上起到强化或凸显的作用。其次需兼顾色障碍群体（色彩范围符合web内容无障碍指南WCAG2.0标准）帮助有色盲色弱的人群也能在数据可视化中获取洞见。</p>
              <p>根据不同数据类型、将其使用场景扩展出可视化色板类型，可用于各系统中的首页、工作台等界面。</p>
              <p>——参见以下图例</p>
            </div>,
          ]}
          pic={<img src={AuxiliaryColorImg} alt="Auxiliary color" />}
          vertical
        />
      </section>
      <section>
        <div style={{ marginBottom: 16 }}>通用语义色板</div>
        <Typography
          descriptions={[
            <div className="content-secondary" key="content-top-level">
              <p style={lineHeightStyle}>表达负面的、不可行、严重、危险、失败、热量；</p>
              <p style={lineHeightStyle}>表达正面的、可行、植物、安全、成功等含义；</p>
              <p style={lineHeightStyle}>表达警告、注意、阻止等含义。</p>
            </div>,
          ]}
          pic={<img src={SemanticColorImg} alt="Semantic color" />}
        />
      </section>
      <section>
        <Typography
          title={<div style={thirdTitleStyle}>功能色板</div>}
          descriptions={[
            <div className="content-secondary" key="content-top-level">
              <p>功能色代表了明确的信息以及状态，比如成功、出错、失败、提醒、链接等。功能色的选取需要遵守用户对色彩的基本认知。我们建议在一套产品体系下，功能色尽量保持一致，不要有过多的自定义干扰用户的认知体验。</p>
            </div>,
          ]}
          pic={<img src={FeatColorImg} alt="Feat color" />}
        />
      </section>
      <section style={{ marginBottom: 0 }}>
        <Typography
          pic={<img src={AuxiliaryColorExampleImg} alt="Auxiliary color example" />}
        />
      </section>
    </div>
  </div>
);
