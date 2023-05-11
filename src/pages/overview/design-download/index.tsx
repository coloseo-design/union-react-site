/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable global-require */
import React from 'react';
import './download.less';
import { Icon, Row, Col } from 'union-design';
import { Anchor } from '../../../components/anchor';
import Secondary from '../../common/secondary';
import Typography from '../../../components/typography';
import config from '../../../utils/config';

const d1 = require('./images/1.svg');
const d2 = require('./images/2.svg');
const d3 = require('./images/3.svg');
const d4 = require('./images/4.svg');
const d9 = require('./images/9.svg');
const d10 = require('./images/10.svg');
const d11 = require('./images/11.svg');
const d12 = require('./images/12.svg');
const d13 = require('./images/13.svg');

export interface mapp {
  [x: string]: string;
}

const loadMap: mapp = {
  1: `${config.url.archive}/resource/pc/web端UIUX设计规范评分管理标准V1.0.pdf`,
  2: `${config.url.archive}/resource/pc/Web端Sketch组件库V1.0.sketch`,
  3: `${config.url.archive}/resource/pc/Web端Axure部件库V1.0.rplib`,
};
const handleDownload = (key: string) => (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
  e.preventDefault();
  window.open(`${loadMap[key]}`, key === '1' ? '_blank' : '_self');
};

const data = [
  {
    id: 1,
    title: 'web端资源包',
    anchor: 'webResource',
    line: true,
    description: [
      <div>
        <div className="desContainter">
          <div className="descurrent" style={{ marginRight: 60 }}>
            <img src={d1} style={{ width: '100%' }} alt="" />
            <div className="current_title">Web端UI/UX设计规范文档</div>
            <div className="current_details">
              在Web端UI/UX设计规范文档中详细全面描述了联通设计系统（Uni-Design System）的概述、设计价值观 、设计原则与交互原则，以图文结合的形式展示了各类型组件的设计规则与使用场景，方便各类型工作人员对设计系统建立详细的认识。
            </div>
            <div className="current_all">
              <Icon type="download" onClick={handleDownload('1')} style={{ marginRight: 19, cursor: 'pointer' }} />
              <span style={{ color: '#207EEA', paddingRight: 16 }}>设计系统规范文档_2021.1.0</span>
              <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>78MB（.pdf）</span>
            </div>
          </div>
          <div className="descurrent">
            <img src={d2} style={{ width: '100%' }} alt="" />
            <div className="current_title">Web端sketch模板库</div>
            <div className="current_details">
              在Web端sketch模板库中设计系统团队将系统中的组件设计的原始文件进行打包整理，对使用场景和典型页面进行了详细的设计说明，并在组件中附加了颜色，字体，样式等基础设计规范，方便设计人员快速建立高保真设计原型，进行敏捷开发。
            </div>
            <div className="current_all">
              <Icon type="download" onClick={handleDownload('2')} style={{ marginRight: 19, cursor: 'pointer' }} />
              <span style={{ color: '#207EEA', paddingRight: 16 }}> Web端sketch组件包_2021.1.0</span>
              <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>73MB（.sketch）</span>
            </div>
          </div>
        </div>
        <div className="desContainter" style={{ marginTop: 50 }}>
          <div className="descurrent" style={{ marginRight: 60 }}>
            <img src={d3} alt="" />
            <div className="current_title">Wed端Axure部件库</div>
            <div className="current_details">
              在Wed端Axure部件库中设计系统团队将Web端sketch组件包中的组件在axure中进行了还原，并详细描述了各类组件的使用场景与交互方式，方便需求方快速构建交互原型，无损对接设计人员，快速构建项目方案与开发内容。
            </div>
            <div className="current_all">
              <Icon type="download" onClick={handleDownload('3')} style={{ marginRight: 19, cursor: 'pointer' }} />
              <span style={{ color: '#207EEA', paddingRight: 16 }}>Wed端Axure部件库_2021.1.0</span>
              <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>78MB（.rp）</span>
            </div>
          </div>
          <div className="descurrent">
            <img src={d4} alt="" />
            <div className="current_title">Wed端前端组件库</div>
            <div className="current_details">
              正在建设中……
            </div>
          </div>
        </div>
      </div>,
    ],
  },
  {
    id: 2,
    title: '移动端资源包',
    anchor: 'moveResource',
    line: true,
    description: [
      <div>
        <div className="desContainter">
          <div className="descurrent" style={{ marginRight: 60 }}>
            <img src={d4} alt="" />
            <div className="current_title">移动端UI/UX设计规范文档</div>
            <div className="current_details">
              正在建设中……
            </div>
          </div>
          <div className="descurrent">
            <img src={d4} alt="" />
            <div className="current_title">移动端端sketch模板库</div>
            <div className="current_details">
              正在建设中……
            </div>
          </div>
        </div>
        <div className="desContainter" style={{ marginTop: 50 }}>
          <div className="descurrent" style={{ marginRight: 60 }}>
            <img src={d4} alt="" />
            <div className="current_title">Wed端Axure部件库</div>
            <div className="current_details">
              正在建设中……
            </div>
          </div>
          <div className="descurrent">
            <img src={d4} alt="" />
            <div className="current_title">Wed端前端组件库</div>
            <div className="current_details">
              正在建设中……
            </div>
          </div>
        </div>
      </div>,
    ],
  },
  {
    id: 3,
    title: '致敬',
    anchor: 'salute',
    description: [
      <div>
        <Row>
          <Col span={12} style={{ paddingRight: 82 }}>
            <div className="salute_title">
              《About Face 4: 交互设计精髓》
            </div>
            <div className="salute_details">
              《About Face 4: 交互设计精髓》是一本数字产品和系统的交互设计指南，全面系统地讲述了交互设计的过程、原理和方法，涉及的产品和系统有个人计算机上的个人和商务软件、Web 应用、手持设备、信息亭、数字医疗系统、数字工业系统等。运用《About Face 4: 交互设计精髓》的交互设计过程和方法，有助于了解使用者和产品之间的交互行为，进而更好地设计出更具吸引力和更具市场竞争力的产品。
            </div>
          </Col>
          <Col span={12}>
            <img src={d9} style={{ width: '100%' }} alt="" />
          </Col>
        </Row>
        <Row style={{ marginTop: 48 }}>
          <Col span={12} style={{ paddingRight: 82 }}>
            <div className="salute_title">
              《Web界面设计》
            </div>
            <div className="salute_details">
              <div>作者：Bill Scott / Theresa Neil</div>
              本书涵盖了在基于独一无二的Web环境下、在创建丰富体验的过程中设计Web界面的最佳实践、模式和原理。UI专家Bill Scott和Theresa Neil在他们多年实践经验和不懈探索的基础上，总结提炼出了Web界面设计的六大原理——直截了当、简化交互、足不出户、提供邀请、使用变换和即时反应，并以这六大原理为依托，以当今Web上各类开风气之先的流行网站为示例，向读者展示了超过75种基于富交互构建Web界面的模式，并以简单明了的语言，阐明了数以百计行之有效的最佳实践。
            </div>
          </Col>
          <Col span={12}>
            <img src={d10} style={{ width: '100%' }} alt="" />
          </Col>
        </Row>
        <Row style={{ marginTop: 48 }}>
          <Col span={12} style={{ paddingRight: 82 }}>
            <div className="salute_title">
              《设计心理学》
            </div>
            <div className="salute_details">
              <div>作者：唐纳德·诺曼（Donald Norman）</div>
              设计心理学是设计专业一门理论课，是设计师必须掌握的学科。设计心理学是建立在心理学基础上，把人们心理状态，尤其是人们对于需求的心理通过意识作用于设计的一门学问。它同时研究人们在设计创造过程中的心态。以及设计对社会及对社会个体所产生的心理反应，反过来在作用于设计，使设计更能够反映和满足人们的心理作用。
            </div>
          </Col>
          <Col span={12}>
            <img src={d11} style={{ width: '100%' }} alt="" />
          </Col>
        </Row>
        <Row style={{ marginTop: 48 }}>
          <Col span={12} style={{ paddingRight: 82 }}>
            <div className="salute_title">
              《写给大家看的设计书》
            </div>
            <div className="salute_details">
              <div>作者：罗宾·威廉姆斯(RobinWilliams)</div>
              写给大家看的设计书》出自一位世界级设计师之手。复杂的设计原理在《写给大家看的设计书》中凝炼为亲密性、对齐、重复和对比4个基本原则。作者以其简洁明快的风格，将优秀设计所必须遵循的这4个基本原则及其背后的原理通俗易懂地展现在读者面前。《写给大家看的设计书》包含大量的示例，让你了解怎样才能按照自己的方式设计出美观且内容丰富的产品。
            </div>
          </Col>
          <Col span={12}>
            <img src={d12} style={{ width: '100%' }} alt="" />
          </Col>
        </Row>
        <Row style={{ marginTop: 48 }}>
          <Col span={12} style={{ paddingRight: 82 }}>
            <div className="salute_title">
              《设计体系》
            </div>
            <div className="salute_details">
              <div>作者：阿拉·霍尔马托娃（Alla Kholmatova</div>
              本书主要介绍如何帮助中小型产品团队尽快打造一套新型、实用的设计体系。本书分为两个部分。第一部分讨论设计体系的基础——模式与实践。设计模式包括功能性模式与感知性模式。实践则是创建、捕获、共享和使用这些模式的方法。第二部分侧重于阐释建立和维护设计体系的实际步骤和实用技术：规划任务，编写界面清单，建立模式库，以及创建、记录、发展和维护设计模式等。
            </div>
          </Col>
          <Col span={12}>
            <img src={d13} style={{ width: '100%' }} alt="" />
          </Col>
        </Row>
      </div>,
    ],
  },
];
const Download = () => (
  <div className="download">
    <Anchor dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    <div>
      <Secondary
        title="资源与下载"
        description={(
          <div style={{ lineHeight: 2 }}>
            <div>为了更好的传播与应用，我们在这里汇总了与联通设计系统（Uni-Design System）相关的所有资源，并提供相关设计资源和设计工具的下载，更多设计资源正在整理和完善中。</div>
            <div>在设计系统的构建与建设过程中我们也进行了大量的文献与调研，吸取了众多前人的经验与知识，并结合中国联通的业务特点进行了内容的整合与优化。</div>
            <div>我们希望通过理论与实践的统一将联通设计系统（Uni-Design System）打造成具有联通特色的设计系统，为用户、设计者和开发者带来不一样的体验。</div>
          </div>
        )}
      />
    </div>
    <div style={{ margin: '48px 0' }}>
      <Anchor position="static" color="#a00707" dirs={data.map((item) => ({ id: item.anchor, name: item.title }))} />
    </div>
    <div className="worth-item">
      {
        data.map((item) => (
          <Typography
            id={item.anchor}
            title={(
              <div style={{
                color: '#B30000', fontSize: 24, fontWeight: 400, marginBottom: 48,
              }}
              >
                {item.title}
              </div>
)}
            descriptions={item.description}
            style={{ borderBottom: item.line ? '1px solid #E8E7E7' : 'none', paddingBottom: item.line ? 48 : 0, marginBottom: item.line ? 48 : 0 }}
          />
        ))
      }
    </div>
  </div>
);

export default Download;
