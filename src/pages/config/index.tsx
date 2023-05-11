/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import ReactHight from 'highlight-for-react';
import './index.less';

const Config = () => {
  const LiType = (type: any, val: any) => (
    <ul>
      <li>
        Type:
        {' '}
        <span className="other">{type}</span>
      </li>
      <li>
        Default:
        {' '}
        <span className="other">{val}</span>
      </li>
    </ul>
  );
  return (
    <div className="config">
      <h1>配置</h1>
      <p>使用union-tool运行项目，在项目根目录下新建.unirc.js 或者 .unirc.json文件，再添加如下配置。</p>
      <h2>union-tool下载</h2>
      <ReactHight>
        {
          `$ yarn add union-tool --save
$ npm  install union-tool --save
          `
        }
      </ReactHight>
      <div className="config-section">
        <h2 id="htmlTitle">htmlTitle</h2>
        {LiType('string', 'Unicom Design')}
        <div>配置标题。 可以在项目的根目录下新建 public/index.html, 自定义index.html，这样就不需要再配置htmlTitle。</div>
      </div>
      <div className="config-section">
        <h2 id="alias">alias</h2>
        {LiType('object', '{}')}
        <div>配置别名，对引用路径进行映射。</div>
        <ReactHight>
          {
            `
export default {
  alias: {
    foo: '/tmp/a/b/foo',
  },
};
 `
          }
        </ReactHight>
      </div>
      <div className="config-section">
        <h2 id="outputPath">outputPath</h2>
        {LiType('string', 'dist')}
        <div>
          不允许设定为
          {' '}
          <span className="other">src、public、pages、mock、config</span>
          {' '}
          等约定目录。
        </div>
      </div>
      <div className="config-section">
        <h2 id="publicPath">publicPath</h2>
        {LiType('string', '/')}
        <div>配置 webpack 的 publicPath。当打包的时候，webpack 会在静态文件路径前面添加 publicPath 的值，当你需要修改静态文件地址时，比如使用 CDN 部署，把 publicPath 的值设为 CDN 的值就可以。</div>
        <div style={{ marginTop: 12 }}>
          如果你的应用部署在域名的子路径上，例如
          {' '}
          <span className="other">https://www.your-app.com/foo/</span>
          ，你需要设置 publicPath 为
          {' '}
          <span className="other">/foo/</span>
        </div>
      </div>
      <div className="config-section">
        <h2 id="define">define</h2>
        {LiType('object', '{}')}
        <div>用于提供给代码中可用的变量。</div>
        <ReactHight>
          {
            `export default {
   define: {
    API: 'http://test',
    },
  };`
          }
        </ReactHight>
        <div>
          然后你写
          {' '}
          <span>console.log(hello, API);</span>
          {' '}
          会被编译成
          {' '}
          <span>console.log(hello, 'http://test')。</span>
        </div>
        <div>注意：define 对象的属性值会经过一次 JSON.stringify 转换。</div>
      </div>
      <div className="config-section">
        <h2 id="devServer">devServer</h2>
        {LiType('object', '{}')}
        <div>配置开发服务器。</div>
        <div>包含以下子配置项：</div>
        <ul>
          <li>
            port，端口号，默认
            {' '}
            <span className="other">8000</span>
          </li>
          <li>
            host，默认
            {' '}
            <span className="other">0.0.0.0</span>
          </li>
        </ul>
      </div>
      <div className="config-section">
        <h2 id="devtool">devtool</h2>
        {LiType('string', 'inline-source-map')}
        <div>用户配置 sourcemap 类型。</div>
      </div>
      <div className="config-section">
        <h2 id="theme">theme</h2>
        {LiType('object', '{}')}
        <div>配置主题，实际上是配 less 变量。</div>
        <div>比如：</div>
        <ReactHight>
          {
            ` const config = {
  theme: {
    '@primary-color': 'green',
    }
  };
  module.exports = config;
            `
          }
        </ReactHight>
      </div>
      <div className="config-section">
        <h2 id="babel">babel</h2>
        {LiType('object', '{}')}
        <div>配置plugin，presets等</div>
        <div>包含以下子配置项：</div>
        <div>
          <h3>plugins</h3>
          <div style={{ paddingLeft: 12 }}>{LiType('Array', '[]')}</div>
        </div>
        <div>
          <h3>presets</h3>
          <div style={{ paddingLeft: 12 }}>{LiType('Array', '[]')}</div>
        </div>
        <div>
          <h3>browserslist</h3>
          <div style={{ paddingLeft: 12 }}>{LiType('Array', '[]')}</div>
        </div>
        <ReactHight>
          {
            `const config = {
  babel: {
    plugins: [['import', { libraryName: 'union-design', libraryDirectory: 'lib', style: (name) => ${name}/styles/index }, 'uni']],
    presets: ['@babel/preset-react', ['@babel/preset-env',]],
    browserslist: ['>1%',
    'last 4 versions',
    'Firefox ESR',
    'not ie < 9',],
  }
};
module.exports = config;`
          }
        </ReactHight>
      </div>
    </div>
  );
};

export default Config;
