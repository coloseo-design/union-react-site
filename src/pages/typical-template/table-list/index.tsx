/* eslint-disable react/display-name */
/* eslint-disable global-require */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import data from './data';
import Typography from '../../../components/typography';
import '../../interactive/index.less';
import { Anchor } from '../../../components/anchor';

const t3 = require('./assets/3.svg');
const t4 = require('./assets/4.svg');
const t5 = require('./assets/5.svg');

export default () => (
  <div className="Container">
    <Typography
      key="blunt"
      id=""
      title={data.header.title}
      descriptions={[data.header.descriptions]}
    />
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
      <div style={{ color: 'rgba(0,0,0,0.85)' }}>
        <div>
          <p style={{ marginBottom: 16 }}>筛选（展开）：</p>
          <img src={t3} alt="open" style={{ width: '100%' }} />
        </div>
        <div>
          <p style={{ margin: '40px 0px 16px 0px' }}>基础列表（提示）：</p>
          <img src={t4} alt="open" style={{ width: '100%' }} />
        </div>
        <div>
          <p style={{ margin: '40px 0px 16px 0px' }}>多级筛选：</p>
          <img src={t5} alt="open" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
    <Anchor dirs={data.logList} />
  </div>
);
