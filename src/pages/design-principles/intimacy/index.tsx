/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React from 'react';
import '../index.less';
import Typography from '../../../components/typography';
import { Anchor } from '../../../components/anchor';

const img1 = require('./images/1.svg');
const img2 = require('./images/2.svg');
const img3 = require('./images/3.svg');
const img4 = require('./images/4.svg');

export default () => (
  <div className="design-principles">
    <section>
      <Typography
        id=""
        title={<span className="title">亲密性</span>}
        descriptions={[
          <div className="content" key="key">
            <p>
              亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。信息之间关联性越高，它们
              之间的距离就应该越接近，也越像一个视觉单元。
            </p>
            <p>
              彼此相关的项应归组在一起，建立一个视觉单元，不能是多个孤立元素。有助于组织信息、减少混乱、
              结构清晰，使画面变得有条理、阅读逻辑清晰。
            </p>
            <p>
              中国联通设计规范中规定了“纵向间距关系”和“横向间距关系”，通过『小号间距』、『中号间距』、
              『大号间距』这三种规格来划分信息层次，
            </p>
            <p>
              这三种规格分别为：8px（小号间距）、16px（中号间距）、24px（大号间距）。
              ——参见图例
            </p>
          </div>,
        ]}
      />
    </section>
    <section>
      <Anchor position="static" color="#953893" dirs={[{ id: '纵向间距关系', name: '纵向间距关系' }, { id: '横向间距关系', name: '横向间距关系' }]} />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="纵向间距关系"
        title={<span className="title" style={{ fontSize: 24 }}>纵向间距关系：</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>通过「小号间距」、「中号间距」、「大号间距」这三种规格来划分信息层次。</span>]}
        pic={<img src={img1} alt="" />}
        style={{ marginBottom: 40 }}
      />
      <Typography
        id=""
        descriptions={[
          <div key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>
            <p style={{ marginBottom: 0 }}>在这三种规格不适用的情况下，可以通过</p>
            <p style={{ marginBottom: 0 }}>1.  加减「基础间距」的倍数。</p>
            <p style={{ marginBottom: 0 }}>2. 增加元素（如分割线）来拉开信息层次。</p>
          </div>,
        ]}
        pic={<img src={img2} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ marginBottom: 0 }}>
      <Typography
        id="横向间距关系"
        title={<span className="title" style={{ fontSize: 24 }}>横向间距关系：</span>}
        descriptions={[
          <span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>为了适用不同尺寸的屏幕，在横向采用基于栅格的相对布局来排布组件，从而保证布局的灵活性。</span>,
        ]}
        pic={<img src={img3} alt="" />}
        style={{ marginBottom: 40 }}
      />
      <Typography
        id=""
        descriptions={[
          <span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>为了适用不同尺寸的屏幕，在横向采用基于栅格的相对布局来排布组件，从而保证布局的灵活性。</span>,
        ]}
        pic={<img src={img4} alt="" />}
      />
    </section>

    <Anchor dirs={[{ id: '纵向间距关系', name: '纵向间距关系' }, { id: '横向间距关系', name: '横向间距关系' }]} />
  </div>
);
