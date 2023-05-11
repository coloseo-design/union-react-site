/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React from 'react';
import { Anchor } from '../../../components/anchor';
import Secondary from '../../common/secondary';
import './button.less';
import List from './list';

const img1 = require('./images/1.svg');
const img2 = require('./images/2.svg');
const img3 = require('./images/3.svg');
const img4 = require('./images/4.svg');
const img5 = require('./images/5.svg');
const img6 = require('./images/6.svg');
const img7 = require('./images/7.svg');
const img8 = require('./images/8.svg');
const img9 = require('./images/9.svg');

const data = [
  {
    id: 1,
    title: '按钮类型、属性与状态',
    description: (
      <div>
        在设计规范中，我们将按钮分成
        <span className="buton-storng">常规按钮</span>
        、
        <span className="buton-storng">特殊按钮</span>
        两大类共9种类型，分为有高强调、中强调、弱强调、不强调4种不同的状态，并且根据使用场景的不同赋予大、中、小3种尺寸。
      </div>),
    anchor: 'type',
    src: '',
    children: [
      {
        id: '0-1',
        title: '按钮类型',
        description: '主按钮：突出“完成”、“推荐”类操作；一个按钮区最多使用一个主按钮。',
        src: img1,
      },
      {
        id: '0-2',
        title: '',
        description: '默认按钮：用于没有主次之分的一组行动点。',
        src: img2,
      },
      {
        id: '0-3',
        title: '',
        description: '虚线按钮：常用于添加操作。',
        src: img3,
      },
      {
        id: '0-4',
        title: '',
        description: '次按钮：用于非主要动作。如果不确定选择哪种按钮，次按钮永远是最安全的选择。',
        src: img4,
      },
      {
        id: '0-5',
        title: '',
        description: '链接按钮：用于次要或外链的行动点。',
        src: img5,
      },
      {
        id: '0-6',
        title: '按钮属性',
        description: '',
        src: img6,
      },
      {
        id: '0-7',
        title: '按钮状态',
        description: '',
        src: img7,
      },
    ],
  },
  {
    id: 2,
    title: '按钮放置位置与顺序',
    description: (
      <div>
        该规范中确定了一个清晰的设计策略来决策按钮区位置：应将按钮放置于用户浏览路径中，
        便于被用户发现，并且应尽量靠近其所控制的对象。在未刻意建立信息层级引导视觉路径时，经典“F”“Z”网页浏览模式作为了我们按钮位置放置规则的基础指导。
        <br />
        主按钮需遵循的摆放位置：
        <span style={{ color: '#716dea' }}>左对齐从左往右阅读，右对齐从右往左阅读，每列只有1个主按钮。</span>
      </div>),
    anchor: 'sort',
    src: img8,
  },
  {
    id: 3,
    title: '按钮使用场景',
    description: <div>联通设计规范中提供了丰富的按钮类型以覆盖各种场景，根据多个系统的抽象，如下图所示：</div>,
    anchor: 'scenes',
    src: img9,
  },
];
export default () => (
  <div className="design-layout design-button">
    <Anchor dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    <div className="button-secondary">
      <Secondary
        title={<div style={{ color: '#5C57F2' }}>按钮</div>}
        description={(
          <div>
            按钮是一种使用广泛的基础界面元素，正因其使用的普遍性和重要性，因此有必要建立约束又包容的规范，以广泛满足多层级、跨场景的设计需要。
            在制定规则时，原则是简单易记（约束）并满足企业级场景的广泛兼容（包容），把问题最少化。我们的解决方案是：
            <br />
            <span className="description-start">「默认规则」</span>
            ：提供一套默认的设计规则，在现有的模板、组件等设计资产中提供示例方案，满足简单场景需求，直接使用即可；
            <br />
            <span className="description-start">「设计建议」</span>
            ：为默认规则无法满足的复杂场景提供设计建议，让使用者在一定的策略上自定义，同时又与默认规则保持一致的认知逻辑；
            <br />
            <span className="description-start">「设计目标」</span>
            ：明确设计目标，设计者依据设计目标决策设计。
          </div>
        )}
      />
    </div>
    <div style={{ marginTop: 40 }}>
      <Anchor position="static" color="#5c57f2" dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    </div>
    <div className="design-button-list">
      <List data={data} />
    </div>
  </div>
);
