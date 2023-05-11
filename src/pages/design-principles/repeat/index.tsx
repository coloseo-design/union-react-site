/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React from 'react';
import '../index.less';
import Typography from '../../../components/typography';
import { Anchor } from '../../../components/anchor';

const img1 = require('./images/1.svg');
const img2 = require('./images/2.svg');
const img3 = require('./images/3.svg');

export default () => (
  <div className="design-principles">
    <section>
      <Typography
        id=""
        title={<span className="title">重复</span>}
        descriptions={[
          <div className="content" key="key">
            <p>
              视觉要素在作品中重复出现，增加条理性和统一性。有助于统一整个设计，使一致的元素更为突出，统一、增强视觉效果。帮助用户识别出这些元素之间的关联性。
              重复元素可以是一条粗线、一种线框，某种相同的颜色、设计要素、设计风格，某种格式、空间关系等。
            </p>
            <p>
              中国联通设计规范描述三种重复类型，分别是：线框重复、设计要素重复、文案格式重复。
            </p>
            <p>
              ——参见图例
            </p>
          </div>,
        ]}
      />
    </section>
    <section>
      <Anchor position="static" color="#953893" dirs={[{ id: '线框重复', name: '线框重复' }, { id: '设计要素重复', name: '设计要素重复' }, { id: '文案格式重复', name: '文案格式重复' }]} />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="线框重复"
        title={<span className="title" style={{ fontSize: 24 }}>线框重复：</span>}
        descriptions={[]}
        pic={<img src={img1} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="设计要素重复"
        title={<span className="title" style={{ fontSize: 24 }}>设计要素重复：</span>}
        descriptions={[]}
        pic={<img src={img2} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ marginBottom: 0 }}>
      <Typography
        id="文案格式重复"
        title={<span className="title" style={{ fontSize: 24 }}>文案格式重复：</span>}
        descriptions={[]}
        pic={<img src={img3} alt="" />}
      />
    </section>

    <Anchor dirs={[{ id: '线框重复', name: '线框重复' }, { id: '设计要素重复', name: '设计要素重复' }, { id: '文案格式重复', name: '文案格式重复' }]} />
  </div>
);
