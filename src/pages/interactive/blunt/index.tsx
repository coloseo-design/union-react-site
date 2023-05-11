/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import data from './data';
import Typography from '../../../components/typography';
import '../index.less';
import { Anchor } from '../../../components/anchor';

export default () => (
  <div className="Container">
    <Typography
      key="blunt"
      id=""
      title={data.header.title}
      descriptions={[data.header.descriptions]}
    />
    <div style={{ marginTop: 40 }}>
      <Anchor dirs={data.logList} position="static" color="#3B5ED9" />
    </div>
    <div className="section">
      {(data.contentList || []).map((item, index) => (
        <Typography
          key={item.id}
          id={item.id}
          title={item.title}
          descriptions={[item.descriptions]}
          pic={item.pic}
          style={{ paddingBottom: (index !== data.contentList.length - 1) ? 40 : 0, borderBottom: item.border ? '1px solid #d8d8d8' : 'none', paddingTop: index !== 0 ? 40 : 0 }}
        />
      ))}
    </div>
    <Anchor dirs={data.logList} />
  </div>
);
