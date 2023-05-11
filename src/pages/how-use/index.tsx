/* eslint-disable no-template-curly-in-string */
/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import ReactHight from 'highlight-for-react';

const ths = {
  padding: '16px 24px',
  textAlign: 'left',
  border: '1px solid #f0f0f0',
  color: '#5c6b77',
  fontWeight: 500,
  background: 'rgba(0,0,0,.02)',
};
const tds = {
  padding: '16px 24px',
  textAlign: 'left',
  border: '1px solid #f0f0f0',
};

const spanS = {
  display: 'inline-block',
  backgroundColor: '#f2f4f5',
  padding: '2px 6px',
  margin: '0px 4px',
};

const HowUse = () => (
  <div>
    <h2 id="agent">设置代理</h2>
    <p>在项目里的.npmrc中设置。</p>
    <ReactHight>registry=http://ccp.tianti.tg.unicom.local/artifactory/api/npm/sjxt-npm-virtual/</ReactHight>
    <p>在.yarnrc</p>
    <ReactHight>{`registry "http://ccp.tianti.tg.unicom.local/artifactory/api/npm/sjxt-npm-virtual/"`}</ReactHight>
    <h2 style={{ marginTop: 32 }} id="install">安装</h2>
    <h3>使用 npm 或 yarn 安装</h3>
    <p>我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>
    <ReactHight>$ npm install union-design --save</ReactHight>
    <ReactHight>$ yarn add union-design </ReactHight>
    <h2 style={{ marginTop: 32 }} id="browser">浏览器支持</h2>
    <li>现代浏览器和 IE11</li>
    <li>支持服务端渲染</li>
    <table
      style={{
        marginTop: 12, width: '100%', borderCollapse: 'collapse', direction: 'ltr', border: '1px solid #f0f0f0', borderSpacing: 0,
      }}
    >
      <thead>
        <th style={ths}>
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="ie/edge" width="24" height="24" />
          <br />
          IE / Edge
        </th>
        <th style={ths}>
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="ie/edge" width="24" height="24" />
          <br />
          Firefox
        </th>
        <th style={ths}>
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="ie/edge" width="24" height="24" />
          <br />
          Chrome
        </th>
        <th style={ths}>
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="ie/edge" width="24" height="24" />
          <br />
          Safari
        </th>
        <th style={ths}>
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="ie/edge" width="24" height="24" />
          <br />
          Opera
        </th>
      </thead>
      <tbody>
        <tr>
          <td style={tds}>IE11, Edge</td>
          <td style={tds}>last 2 versions</td>
          <td style={tds}>last 2 versions</td>
          <td style={tds}>last 2 versions</td>
          <td style={tds}>last 2 versions</td>
        </tr>
      </tbody>
    </table>
    <h2 style={{ marginTop: 32 }} id="ts">TypeScript</h2>
    <p>
      <span
        style={spanS}
      >
        union-design
      </span>
      使用 TypeScript 进行书写并提供了完整的定义文件。（不要引用
      <span
        style={spanS}
      >
        @types/union-design
      </span>
      ）。
    </p>
    <h2 style={{ marginTop: 32 }} id="plugin">按需加载</h2>
    <p>
      <span style={spanS}>union-design</span>
      默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入
      <span style={spanS}>{'import { Button } from \'union-design\''}</span>
      就会有按需加载的效果。
    </p>
    <p style={{ marginTop: 12 }}>按需加载css需要在webpak.config.js文件中配置。</p>
    <ReactHight>{'[\'import\', { libraryName: \'union-design\', libraryDirectory: \'lib\', style: (name) => `${name}/styles/css` }, \'uni\']'}</ReactHight>
    <h2 style={{ marginTop: 32 }} id="demo">示例</h2>
    <ReactHight>
      {`
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { Button, DatePicker, version } from 'union-design-h5';
        
        ReactDOM.render(
          <div className="App">
            <h1>antd version: {version}</h1>
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
              Primary Button
            </Button>
          </div>,
          document.getElementById("root")
        );
        `}
    </ReactHight>
  </div>
);

export default HowUse;
