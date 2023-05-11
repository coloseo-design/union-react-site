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
        title={<span className="title">对比</span>}
        descriptions={[
          <div className="content" key="key">
            <p>
              运用对比，以达到组织信息、清晰层级、指引读者、制造焦点等效果。避免元素太过相似，避免元素不同但区别不大、对比信息的组织层次不明确。
            </p>
            <p>
              如果元素不同，就让他们截然不同。运用页面中的各种元素如字体、线宽、颜色、形状、大小、空间等；对比要强烈；拉开距离，做到截然不同。
            </p>
            <p>
              中国联通设计规范中规定三种对比类型，分别是：主次关系对比、总分关系对比、状态关系对比。
            </p>
            <p>
              ——参见图例
            </p>
          </div>,
        ]}
      />
    </section>
    <section>
      <Anchor position="static" color="#953893" dirs={[{ id: '主次关系对比', name: '主次关系对比' }, { id: '总分关系对齐', name: '总分关系对齐' }, { id: '状态关系对比', name: '状态关系对比' }]} />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="主次关系对比"
        title={<span className="title" style={{ fontSize: 24 }}>主次关系对比：</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>为了让用户能在操作上（类似表单、弹出框等场景）快速做出判断， 来突出其中一项相对更重要或者更高频的操作。在一些需要用户慎重决策的场景中，系统应该保持中立，不能替用户或者诱导用户做出判断。</span>]}
        pic={<img src={img1} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="总分关系对齐"
        title={<span className="title" style={{ fontSize: 24 }}>总分关系对齐：</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>通过调整排版、字体、大小等方式来突出层次感，区分总分关系，使得页面更具张力和节奏感。</span>]}
        pic={<img src={img2} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ marginBottom: 0 }}>
      <Typography
        id="状态关系对比"
        title={<span className="title" style={{ fontSize: 24 }}>状态关系对比：</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>通过改变颜色、增加辅助形状等方法来实现状态关系的对比，以便用户更好的区分信息。</span>]}
        pic={<img src={img3} alt="" />}
        style={{ marginBottom: 16 }}
      />
      <Typography
        descriptions={[]}
        pic={<img src={img4} alt="" />}
      />
    </section>

    <Anchor dirs={[{ id: '主次关系对比', name: '主次关系对比' }, { id: '总分关系对齐', name: '总分关系对齐' }, { id: '状态关系对比', name: '状态关系对比' }]} />
  </div>
);
