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
const img5 = require('./images/5.svg');
const img6 = require('./images/6.svg');
const img7 = require('./images/7.svg');
const img8 = require('./images/8.svg');
const img9 = require('./images/9.svg');
const img10 = require('./images/10.svg');
const img11 = require('./images/11.svg');
const img12 = require('./images/12.svg');
const img13 = require('./images/13.svg');

export default () => (
  <div className="component-design-specification">
    <section>
      <Typography
        id=""
        title={<span className="title">数据录入</span>}
        descriptions={[
          <div className="content" key="key">
            数据录入（input）是获取对象信息的重要交互方式，用户会频繁的增加、修改或删除信息。
            多种多样的文本录入和选择录入方式帮助用户更加清晰和高效的完成这项体验。
            在设计规范中，数据录入被分为三大类：文本录入、选择录入、文件上传 并且定义了三种尺寸（大、默认、小）高度：40px/32px/24px，
            长度按各系统进行设计，默认为160px起，以8的倍数自定义长度。
          </div>,
        ]}
      />
    </section>
    <section>
      <Anchor color="#5C57F2" position="static" dirs={[{ id: '文本录入', name: '文本录入' }, { id: '选择录入', name: '选择录入' }, { id: '文件上传', name: '文件上传' }]} />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="文本录入"
        vertical
        title={<span className="title" style={{ fontSize: 24 }}>文本录入</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>输入框与表单</span>]}
        pic={<img src={img1} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        id="选择录入"
        vertical
        title={<span className="title" style={{ fontSize: 24 }}>选择录入</span>}
        descriptions={[
          <div className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }} key="key">
            <p style={{ marginBottom: 8 }}>单选框</p>
            <p style={{ fontSize: 14 }}>一定多于 2 个，一般少于 5 个。</p>
          </div>,
        ]}
        pic={<img src={img2} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        vertical
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>多选框</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>一般用于状态标记，需要和提交操作配合。</span>]}
        pic={<img src={img3} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        vertical
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>选择器</span>}
        pic={<img src={img4} alt="" style={{ marginTop: 8 }} />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        vertical
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>级联选择与树选择</span>}
        pic={<img src={img5} alt="" style={{ marginTop: 8 }} />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ marginBottom: 16 }}>
      <Typography
        vertical
        title={<div className="title" style={{ fontSize: 20, marginBottom: 16, color: 'rgba(0, 0, 0, 0.85)' }}>日期选择</div>}
        pic={<img src={img6} alt="" />}
      />
    </section>
    <section style={{ marginBottom: 16 }}>
      <Typography
        vertical
        pic={<img src={img7} alt="" />}
      />
    </section>
    <section>
      <Typography
        vertical
        pic={<img src={img8} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        vertical
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>时间选择</span>}
        pic={<img src={img9} alt="" style={{ marginTop: 8 }} />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        vertical
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>滑动输入条</span>}
        pic={<img src={img10} alt="" style={{ marginTop: 8 }} />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        vertical
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>穿梭框</span>}
        pic={<img src={img11} alt="" style={{ marginTop: 8 }} />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        vertical
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>评分与开关</span>}
        pic={<img src={img12} alt="" style={{ marginTop: 8 }} />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ marginBottom: 0 }}>
      <Typography
        id="文件上传"
        vertical
        title={<span className="title" style={{ fontSize: 24 }}>文件上传</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>简单点击上传、缩略图上传、拖拽样式。</span>]}
        pic={<img src={img13} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>

    <Anchor dirs={[{ id: '文本录入', name: '文本录入' }, { id: '选择录入', name: '选择录入' }, { id: '文件上传', name: '文件上传' }]} />
  </div>
);
