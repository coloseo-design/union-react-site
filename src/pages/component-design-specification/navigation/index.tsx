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
const img14 = require('./images/14.svg');
const img15 = require('./images/15.svg');
const img16 = require('./images/16.svg');
const img17 = require('./images/17.svg');
const img18 = require('./images/18.svg');
const img19 = require('./images/19.svg');
const img20 = require('./images/20.svg');

export default () => (
  <div className="component-design-specification">
    <section>
      <Typography
        id=""
        title={<span className="title">导航</span>}
        descriptions={[
          <div className="content" key="key">
            明确知晓当前所处产品中的位置，并方便快捷地带用户到他想去的地方。
            正确理解和使用导航组件对产品全局体验至关重要。
          </div>,
        ]}
      />
    </section>
    <section>
      <Anchor
        dirs={[
          { id: '概述', name: '概述' },
          { id: '导航路径', name: '导航路径' },
          { id: '全局导航', name: '全局导航' },
          { id: '返回式导航', name: '返回式导航' },
          { id: '页内导航', name: '页内导航' },
          { id: '联想类导航', name: '联想类导航' },
        ]}
        color="#5C57F2"
        position="static"
      />
    </section>
    <section>
      <Typography
        id="概述"
        title={<span className="title" style={{ fontSize: 24 }}>概述</span>}
        descriptions={[
          <div className="content" style={{ fontSize: 14 }} key="key">
            <p>导航可以分为5类：</p>
            <p>1. 全局导航（侧面导航/顶部导航/弹出式导航/子站点多级菜单导航）；</p>
            <p>2. 返回类导航（home图标）；</p>
            <p>3. 页内导航（Tab页签/树型导航/锚点导航/走马灯/回到顶部）；</p>
            <p>4. 下钻类导航（列表类导航）；</p>
            <p>5. 联想类导航（步骤条）。</p>
          </div>,
        ]}
        pic={<img src={img1} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>导航组件清单</span>]}
        pic={<img src={img2} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="导航路径"
        title={<span className="title" style={{ fontSize: 24, marginBottom: 0 }}>导航路径</span>}
        pic={<img src={img3} alt="" style={{ marginTop: 16 }} />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        id="全局导航"
        vertical
        title={<span className="title" style={{ fontSize: 24 }}>全局导航</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>全局导航体现网站的核心组织结构。</span>]}
        pic={<img src={img4} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>全局导航-侧面导航</span>}
        descriptions={[
          <div key="key" className="content" style={{ fontSize: 14 }}>
            <p>很多菜单时使用，建议菜单多于 6 项时使用；</p>
            <p>可以承载多个层级，但建议 1-3 个层级；</p>
            <p>企业级产品推荐使用侧栏导航，其可见性更好易于扫读，各菜单重要性受菜单排列顺序影响较小。</p>
          </div>,
        ]}
        pic={<img src={img5} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>侧边导航组件样式</span>]}
        pic={<img src={img6} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>侧边深色导航组件样式</span>]}
        pic={<img src={img7} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>全局导航-顶部导航</span>}
        descriptions={[
          <div key="key" className="content" style={{ fontSize: 14 }}>
            <p>各菜单权重常常与排列顺序呈正相关，即排列顺序影响用户使用频次；</p>
            <p>建议 2~7 项内容使用；</p>
            <p>建议 1-2 个层级；超出 2 个层级时，建议采用弹出式导航。</p>
          </div>,
        ]}
        pic={<img src={img8} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>顶部导航组件样式</span>]}
        pic={<img src={img9} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>全局导航-弹出式导航</span>}
        descriptions={[
          <div key="key" className="content" style={{ fontSize: 14 }}>
            <p>用于拓展导航承载层级，适用于大型网站。</p>
            <p>站点地图式导航可以让用户对整个网站的可用功能一目了然。</p>
            <p>不要让用户延着狭窄的悬停路径获取导航菜单；</p>
            <p>不要让用户逐层打开每层菜单去查找，低效又困难；</p>
            <p>此建议仅针对导航类菜单，不适用于操作类菜单。</p>
          </div>,
        ]}
        pic={<img src={img10} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>全局导航-子站点多级菜单导航</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>用于拥有多个子站点的大型平台网站，结合了顶部导航与侧面导航的特点，当子站点也拥有大量层级菜单的时候侧面导航变换为子站点多级菜单导航。</span>]}
        pic={<img src={img11} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        id="返回式导航"
        title={<span className="title" style={{ fontSize: 24 }}>返回式导航</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>在本系统中仅有点击顶部站点图标返回站点首页一种返回模式。</span>]}
        pic={<img src={img12} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        id="页内导航"
        title={<span className="title" style={{ fontSize: 24 }}>页内导航</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>息架构中较低层级的内容导航可以使用页内导航。常用的页内导航方式包括Tab页签导航，页内树形导航，锚点导航，分页导航，走马灯，返回顶部。</span>]}
        pic={<img src={img13} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>页内导航——Tab页签</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>Tab页签导航位于页内容上方，主要作用是申明页面主题、页内信息导航、页面级内容操作。</span>]}
        pic={<img src={img14} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>页内导航——树型导航</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>页面内多层次的结构展示。</span>]}
        pic={<img src={img15} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>页内导航——锚点导航</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>在各个页面分区之间跳转，当平铺呈现的内容过长时使用。</span>]}
        pic={<img src={img16} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>页内导航——分页导航</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>页面标签，可以快速切换内容页。</span>]}
        pic={<img src={img17} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>页内导航——走马灯</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>循环播放一系列内容。</span>]}
        pic={<img src={img18} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section style={{ borderBottom: '1px solid #d8d8d8' }}>
      <Typography
        title={<span className="title" style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.85)' }}>页内导航——返回顶部</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>当页面内容区域比较长时，或者当用户需要频繁返回顶部查看相关内容时，返回页面顶部的操作按钮。</span>]}
        pic={<img src={img19} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>
    <section>
      <Typography
        id="联想类导航"
        vertical
        title={<span className="title" style={{ fontSize: 24 }}>联想类导航</span>}
        descriptions={[<span key="key" className="title" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.85)' }}>按照预先定义的顺序引导用户一步一步前后移动。在一系列页面的每一页上都展示步骤条，并标记当前页面在这条线性路径上的位置。Steps 步骤条（提供两种尺寸：32px/24px）。</span>]}
        pic={<img src={img20} alt="" />}
        style={{ marginBottom: 40 }}
      />
    </section>

    <Anchor
      dirs={[
        { id: '概述', name: '概述' },
        { id: '导航路径', name: '导航路径' },
        { id: '全局导航', name: '全局导航' },
        { id: '返回式导航', name: '返回式导航' },
        { id: '页内导航', name: '页内导航' },
        { id: '联想类导航', name: '联想类导航' },
      ]}
    />
  </div>
);
