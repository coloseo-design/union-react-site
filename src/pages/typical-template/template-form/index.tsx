/* eslint-disable react/display-name */
/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import Catalog from '../../interactive/common/catalog';
import data from './data';
import Typography from '../../../components/typography';
import '../../interactive/index.less';
import { Anchor } from '../../../components/anchor';

const form3 = require('./assets/3.svg');
const form4 = require('./assets/4.svg');
const form5 = require('./assets/5.svg');
const form6 = require('./assets/6.svg');

export default () => (
  <div className="Container">
    <Typography
      key="blunt"
      id="f_title"
      title={data.header.title}
      descriptions={[data.header.descriptions]}
    />
    {/* <Catalog logList={data.logList} color="#E98A00" /> */}
    <div style={{ marginTop: 40 }}>
      <Anchor dirs={data.logList} position="static" color="#E98A00" />
    </div>
    <div className="section">
      {(data.contentList || []).map((item) => (
        <Typography
          key={item.id}
          id={item.id}
          title={item.title}
          descriptions={[item.descriptions]}
          pic={item.pic}
          vertical={item.vertical || false}
          style={{ paddingBottom: 40, borderBottom: item.border ? '1px solid #d8d8d8' : 'none' }}
        />
      ))}
      <div style={{ color: 'rgba(0,0,0.85)' }}>
        <div>
          <div>分步表单样式：</div>
          <div style={{ marginBottom: 16 }}>将用户需要填写和确认的信息按照线性流程组织，利用步骤条告知用户完整流程和进度，常在最后提交前让用户再次确认信息，并在流程结束给与明确的结果反馈。适用于具有明确的线性逻辑的任务。</div>
          <img src={form3} alt="open" style={{ width: '100%' }} />
        </div>
        <div>
          <p style={{ margin: '40px 0px 16px 0px' }}>分步表单（紧凑）：</p>
          <img src={form4} alt="open" style={{ width: '100%' }} />
        </div>
        <div>
          <p style={{ margin: '40px 0px 16px 0px' }}>分步表单（出错提示）：</p>
          <img src={form5} alt="open" style={{ width: '100%' }} />
        </div>
        <div>
          <p style={{ marginBottom: 0, marginTop: 40 }}>高级表单样式：</p>
          <p style={{ marginBottom: 16 }}>单次任务的表单页中需要填写内容众多，且不同内容之中存在一定可分类归纳性。</p>
          <img src={form6} alt="open" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
    <Anchor dirs={data.logList} />
  </div>
);
