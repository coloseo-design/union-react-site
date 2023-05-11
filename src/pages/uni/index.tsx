import React from 'react';
import { Row, Col } from 'union-design';
import Highlight from 'highlight-for-react';
import './assets/styles/index.less';
import Item from './item';

const spces = [
  {
    title: '可扩展',
    description: 'UniJS 实现了完整的生命周期，并使其插件化，UniJS 内部功能也全由插件完成。此外还支持插件和插件集，以满足功能和垂直域的分层需求。',
    type: 'puzzle',
  },
  {
    title: '开箱即用',
    description: 'UniJS 内置了路由、构建、部署、测试等，仅需一个依赖即可上手开发。并且还提供针对 React 的集成插件集，内涵丰富的功能，可满足日常 80% 的开发需求。',
    type: 'box',
  },
  {
    title: '企业级',
    description: '经蚂蚁内部 3000+ 项目以及阿里、优酷、网易、飞猪、口碑等公司项目的验证，值得信赖。',
    type: 'shield',
  },
];

const scroll = (evt: React.MouseEvent<HTMLDivElement>) => {
  evt.preventDefault();
  window.scrollTo({
    top: 1000,
    left: 0,
  });
};

const UniJS = () => (
  <div className="page-unijs">
    <div className="banner">
      <div className="title">
        <h2>UniJS</h2>
        <div className="description">插件化的企业级前端应用框架</div>
        <div className="start" onClick={scroll}>快速上手</div>
      </div>
    </div>
    <div className="container">
      <div className="specs">
        <Row gutter={80}>
          {spces.map((item) => <Col span={8} key={item.type}><Item {...item} /></Col>)}
        </Row>
      </div>
      <div className="usage" id="usage">
        <div className="usage__title">三分钟上手 UniJS</div>
        <div className="usage__description">手动创建文件，</div>
        <Highlight>
          {
`# 创建目录\t
$ mkdir myapp && cd myapp

# 安装脚手架
$ npm create union-app

# 启动开发
$ yarn dev

# 打包生产
$ yarn build
`
          }
        </Highlight>
      </div>
    </div>
  </div>
);

export default UniJS;
