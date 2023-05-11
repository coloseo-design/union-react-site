/* eslint-disable global-require */
import React from 'react';
import { Anchor } from '../../../components/anchor';
import Secondary from '../../common/secondary';
import Item from './item';
import './worth.less';

const ReasonImg = require('./images/reason.svg');
const ConsistentImg = require('./images/consistent.svg');
const EfficientImg = require('./images/efficient.svg');
const GrowImg = require('./images/grow.svg');

const data = [
  {
    id: 1,
    title: '理性',
    anchor: 'reason',
    description: [
      <div key="key">
        可以帮助设计者做出更好的设计决策，给予研发团队一种高确定性的。
        <br />
        保持克制： 能做，但想清楚了不做。设计者应当聚焦在最有价值产品功能打磨，并用尽可能少的设计元素将其表达。
        <br />
        面向对象的方法： 探索设计规律，并将其抽象成『对象』，增强界面设计的灵活性和可维护性，同时也减少『设计者』的主观干扰，从而降低系统的不确定性。
        <br />
        模块化设计： 将复杂或者重复出现的局部封装成模块，提供有限接口与其他模块互动，最终全面减少系统的复杂度，进而增进可靠性以及可维护性。
        设计者可运用现有的组件、或者模板或者自行抽象可复用的组件/模板，节约无谓的设计且保持系统一致性，让『设计者』把创造力专注在最需要的地方。
      </div>],
    src: ReasonImg,
  },
  {
    id: 2,
    title: '一致',
    anchor: 'consistent',
    description: [
      <div key="key">
        联通5G致力科技创新、赋能行业的态度以及给用户带来无限的、更开放的精彩体验。
        <br />
        多端合作生态：让更多的系统、产品在未来保持优秀的用户体验及一致性。
        <br />
        对产品：在项目筹备时，参考公司的设计规范，统一公司视觉设计规范及某些特定交互设计规范。同一个项目会有多个设计师的参与，规范化的设计语言，避免因设计控件混乱而影响设计输出。
        <br />
        团队协作生态：在设计系统中，打造设计师、产品经理、开发人员产品规范的统一输出形态。通过设计规范的制定，共同实现一套可供复用和扩展的组件库，助力上下游交接及团队协作。
      </div>,
    ],
    src: ConsistentImg,
  },
  {
    id: 3,
    title: '高效',
    anchor: 'efficient',
    description: [
      <div key="key">
        为后台产品制定设计规范的价值点：
        <br />
        对自己：组件化同类元素，提高工作效率，建立公司产品的组件库，以便不同项目的复用及设计延展。在同一个项目中也能更好的把控该项目的视觉规范，提高效率。
        <br />
        对团队：设计规范的制定，规范了设计团队的输出，同时方便了与开发团队的交接和协作。通过设计规范的制定，前端实现也能拥有一套可供复用和扩展的组件库，助力上下游交接及团队协作。
        <br />
        对客户：制定设计规范的同时需要考虑设计延展性，为不同客户的定制化需求提供更高效的输出。同时在进行产品迭代时，设计规范的组件化调整也大大提高了工作效率。
      </div>],
    src: EfficientImg,
  },
  {
    id: 4,
    title: '生长',
    anchor: 'grow',
    description: [
      <div key="key">
        企业级产品功能的增长与用户系统角色的演变相生相伴。设计者应为自己创造的产品负责，提升功能、价值的可发现性。用发展的眼光做设计，充分考虑人、机两端的共同生长。
        <br />
        价值连接：设计者应建立系统设计思维，洞悉产品功能的价值，探索用户在不同场景下的需求，在价值和需求间建立连接。让产品价值被发现，帮助用户建立更有效、更高效的工作方式。
        <br />
        人机共生：产品功能和用户需求的更多连接，让人机互动更加紧密，用户和系统共生。产品设计时，不应将用户和系统独立开来，应作为一个动态发展的共同体来思考，确保其足够的灵活、包容，充满生命力。
      </div>],
    src: GrowImg,
  },
];
const Worth = () => (
  <div className="worth">
    <Anchor dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    <div>
      <Secondary
        title="设计价值观"
        description={(
          <div>
            中国联通企业级设计系统是一个庞大且复杂的体系。团队经过大量的项目实践和总结，正在逐步打磨一个服务于企业级产品的设计系统。
            <br />
            企业级后台产品不仅量级巨大且功能复杂，常常需要设计与开发能够快速的做出响应。
            <br />
            这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
            <br />
            我们基于“
            <span style={{ color: '#A00707' }}>理性</span>
            ”“
            {' '}
            <span style={{ color: '#A00707' }}>一致</span>
            ”“
            {' '}
            <span style={{ color: '#A00707' }}>
              高效
            </span>
            ”“
            {' '}
            <span style={{ color: '#A00707' }}>
              生长
            </span>
            ”的设计价值观，运用模块化的解决方案，降低冗余的生产成本，让设计者更好的专注于用户体验。
          </div>
        )}
      />
    </div>
    <div style={{ margin: '40px 0' }}>
      <Anchor position="static" color="#a00707" dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    </div>
    <div className="worth-item">
      <Item data={data} />
    </div>
  </div>
);

export default Worth;
