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
        title={<span className="title">对齐</span>}
        descriptions={[
          <div className="content" key="key">
            <p>
              一种元素与另一元素有某种视觉联系，任何元素都不能在页面上随意安放，即使这些项并不靠近，但它们属于同一组，以一条看不见的线将彼此连在一起。
              其目的是体现统一性，有条理，在各个单独元素中建立视觉纽带，即使物理位置可能不靠近，视觉上统一且相关；同时避免混合使用多种文本对齐方式；
              避免无意识地居中对齐。在界面设计中，将元素进行对齐，既符合用户的认知特性，也能引导视觉流向，让用户更流畅地接收信息。
            </p>
            <p>
              中国联通设计规范中规定三种对齐方式，分别是：文案类、表单类、数字类。
            </p>
            <p>
              ——参见图例
            </p>
          </div>,
        ]}
      />
    </section>
    <section>
      <Anchor dirs={[{ id: '文案类', name: '文案类' }, { id: '表单类', name: '表单类' }, { id: '数字类', name: '数字类' }]} color="#953893" position="static" />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="文案类"
        title={<span className="title" style={{ fontSize: 24 }}>文案类对齐：</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>如果页面的字段或段落较短、较散时，需要确定一个统一的视觉起点。</span>]}
        pic={<img src={img1} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="表单类"
        title={<span className="title" style={{ fontSize: 24 }}>表单类对齐：</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>冒号对齐（右对齐）能让内容锁定在一定范围内，让用户眼球顺着冒号的视觉流，就能找到所有填写项，从而提高填写效率。</span>]}
        pic={<img src={img2} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ marginBottom: 0 }}>
      <Typography
        id="数字类"
        title={<span className="title" style={{ fontSize: 24 }}>数字类对齐：</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>为了快速对比数值大小，建议所有数值取相同有效位数，并且右对齐。</span>]}
        pic={<img src={img3} alt="" />}
      />
    </section>

    <Anchor dirs={[{ id: '文案类', name: '文案类' }, { id: '表单类', name: '表单类' }, { id: '数字类', name: '数字类' }]} />
  </div>
);
