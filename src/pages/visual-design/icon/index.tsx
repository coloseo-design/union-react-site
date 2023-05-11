/* eslint-disable react/display-name */
/* eslint-disable max-len */
import React from 'react';
import Typography from '../../../components/typography';
import { Anchor } from '../../../components/anchor';
import '../index.less';

const IconDefinedImg = require('./images/1.svg');
const IconSizeImg = require('./images/2@2x.png');
const IconCategoryImg = require('./images/3.svg');
const IconGroupImg = require('./images/4.svg');
const IconStandardImg = require('./images/5.svg');
const DrawingBoardImg = require('./images/6.svg');
const IconLevelImg = require('./images/7.svg');
const ConsultImg = require('./images/8.svg');
const IconModellingImg = require('./images/9.svg');

const dirs = [
  { id: 'icon-defined', name: '定义' },
  { id: 'icon-size', name: '图标尺寸' },
  { id: 'icon-groups', name: '分类与组合' },
  { id: 'icon-standard', name: '设计规范' },
];
const marginBottomStyle = {
  marginBottom: 40,
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
          title={<h2 className="title" style={topTitleStyle}>图标</h2>}
          descriptions={[
            <div className="content-top-level" key="content-top-level">
              <p>图标是UI设计中必不可少的组成。是将某个概念转换成清晰易读的图形，从而降低用户的理解成本，提升界面的美观度。</p>
              <p>一整套优质的图标对于设计质量的影响是非常巨大的，这考验着设计师的协作能力，以及对图形塑造的系统性思维，同时也能反映一个团队对于细节的追求。</p>
            </div>,
          ]}
        />
      </section>
      <section>
        <Anchor dirs={dirs} position="static" color="#d6386b" />
      </section>
      <section>
        <Typography
          id="icon-defined"
          title={<div className="title" style={secondaryTitleStyle}>定义</div>}
          descriptions={[
            <div className="content-secondary" key="content-secondary">
              <p>图标是用于表示功能，功能或内容的符号，是 UI 设计中必不可少的组成。通常我们将某个概念转换成清晰易读的图形，从而降低用户的理解成本，提升界面的美观度。在我们的企业级应用设计中，由于应用场景的多样性以及功能需求的多变性，在设计体系中实现一套美观、清晰、一致、便于延展的图标体系则变的尤为重要。</p>
            </div>,
          ]}
          pic={<img src={IconDefinedImg} alt="Icon defined" />}
          vertical
        />
      </section>
      <div className="section-border-bottom" />
      <section>
        <Typography
          id="icon-size"
          title={<div className="title" style={secondaryTitleStyle}>图标尺寸</div>}
          pic={<img src={IconSizeImg} alt="Icon size" />}
        />
      </section>
      <div className="section-border-bottom" />
      <section>
        <Typography
          id="icon-groups"
          title={<div className="title" style={secondaryTitleStyle}>分类与组合</div>}
          descriptions={[
            <div className="content-secondary" key="content-secondary">
              <p>联通设计体系中对图标根据其属性进行了五大分类：</p>
              <p>通用图标、应用-名词类图标、功能-动词类图标、流程-状态类图标和数据-展示类图标。</p>
            </div>,
          ]}
          pic={<img src={IconCategoryImg} alt="Icon category" />}
          vertical
        />
      </section>
      <section>
        <Typography
          title={<div style={{ display: 'none' }}>slot</div>}
          descriptions={[
            <div className="content-secondary" key="content-secondary">
              <p>在具使用与设计过程中，可以根据应用需求的不同类型的图标进行组合从而生成新的图标；</p>
              <p>如名词类的图标“文档”与通用类图标“搜索”组合成为功能-动词类图标“查看日志”，这样的设计与分类极大提高了图标体系的延展性，可以快速满足不同种类的功能需求。</p>
            </div>,
          ]}
          pic={<img src={IconGroupImg} alt="Icon group" />}
          vertical
        />
      </section>
      <div className="section-border-bottom" />
      <section>
        <Typography
          id="icon-standard"
          title={<div className="title" style={secondaryTitleStyle}>设计规范</div>}
          descriptions={[
            <div className="content-secondary" key="content-secondary">
              <p>在图标的设计风格定义上，整体采用了识别度较高的面性图标，方便用户在应用过程中清晰快速寻找并理解。在与整体布局的搭配使用中面性图标也可以更好地丰富视觉效果，达到高效美观的目的。</p>
            </div>,
          ]}
          pic={<img src={IconStandardImg} alt="Icon standard" />}
        />
      </section>
      <section>
        <Typography
          title={<div style={thirdTitleStyle}>画板与出血</div>}
          descriptions={[
            <div className="content-secondary" key="content-secondary">
              <p>联通设计系统的图标都是按照 1024 x 1024 的画板进行制作的。在设计中为了预防某些造型的图标在具体应用时出现边缘被切掉的风险，要在设计过程中预留出血。我们规定在图形的外围预留了 64px 的出血位，多数的图标在设计中我们都不建议超过这个区域。</p>
            </div>,
          ]}
          pic={<img src={DrawingBoardImg} alt="drawing board" />}
        />
      </section>
      <section>
        <Typography
          title={<div style={thirdTitleStyle}>层级</div>}
          descriptions={[
            <div className="content-secondary" key="content-secondary">
              <p>为了更合理的进行团队协作，联通设计系统为图标设计的工作流进行了四个层级的规范；</p>
              <p>1：画板（1024*1024px）；</p>
              <p>2：透明边框，为保持icon在使用时的标准尺寸需要在设计中内置一个透明的标准图层（1024*1024px）；</p>
              <p>3：设计参考层，为了让生成的icon更加统一，需要在设计上尽量贴合参考层；</p>
              <p>4：图形层，最后的设计成果层。</p>
            </div>,
          ]}
          pic={<img src={IconLevelImg} alt="icon level" />}
        />
      </section>
      <section>
        <Typography
          title={<div style={thirdTitleStyle}>设计参考层</div>}
          descriptions={[
            <div className="content-secondary" key="content-secondary">
              <p>为了让生成icon更加一致统一，我们根据较为常用的形状进行了设计参考层的设计。</p>
              <p>分别是三个矩形，圆形，等边三角形和内切圆与矩形。</p>
              <p>这些都是图标设计中最常用的基本形式，设计师可以快速的调用并在此基础上做变形。</p>
            </div>,
          ]}
          pic={<img src={ConsultImg} alt="consult" />}
        />
      </section>
      <section>
        <Typography
          title={<div style={thirdTitleStyle}>图标造型</div>}
          descriptions={[
            <div className="content-secondary" style={marginBottomStyle} key="content-secondary">
              <p>联通设计规范的整套基础图标基本上都是由圆、方、三角这样的图形演变而成的。通过理性的思考与组合构成复杂的图形。</p>
              <p>我们将图标中最常见的元素归纳为：点、线、圆角、三角。</p>
            </div>,
            <div className="content-secondary" style={marginBottomStyle} key="content-secondary">
              <p>点是图标中最常见的元素之一，为了设计的一致性原则，我们制定了点的四种基础尺寸：80、96、112、128</p>
              <p>如果需要特殊的尺寸可以根据16的倍数累加。</p>
            </div>,
            <div className="content-secondary" style={marginBottomStyle} key="content-secondary">
              <p>线的粗细变化会给设计带来不一样的感觉，在本系统中我们制定了线的四种基础尺寸：48、64、80、128</p>
              <p>如果需要特殊的尺寸可以根据16的倍数累加。</p>
            </div>,
            <div className="content-secondary" style={marginBottomStyle} key="content-secondary">
              <p>三角形是构成图标图形的一种较为特殊的形状，为了让本系统中的三角形更为理性，我们选用了黄金分割矩形的内切等腰三角形作为基础三角形，其顶角角度约为78度为主体角度。同时我们也定义了主角的1/2约39度为第一幅辅助角和180度的黄金分割角180*（1-0.618）≈69度作为第二辅助角。</p>
            </div>,
            <div className="content-secondary" key="content-secondary">
              <p>圆角让图形更加具有细节，语义也更加柔和丰富，本系统中图标的圆角制定了三8、24、40三种半径圆角尺寸，图标内部空间的圆角则保持直角的处理方式。</p>
            </div>,
          ]}
          pic={<img src={IconModellingImg} alt="Icon modelling" />}
        />
      </section>
    </div>
  </div>
);
