/* eslint-disable max-len */
/* eslint-disable react/display-name */
import React from 'react';
import Typography from '../../../components/typography';
import { Anchor } from '../../../components/anchor';
import '../data-display-one/styles/index.less';

const ComponentImg = require('./images/1.svg');
const CardImg = require('./images/2.svg');
const PopoverImg = require('./images/3.svg');
const TooltipImg = require('./images/4.svg');
const StatisticImg = require('./images/5.svg');
const CarouselImg = require('./images/6.svg');
const TreeImg = require('./images/7.svg');
const TimelineImg = require('./images/8.svg');
const TagImg = require('./images/9.svg');
const TabsImg = require('./images/10.svg');

const dirs = [
  { id: 'data-display-components', name: '数据展示组件清单' },
  { id: 'component-three', name: '卡片、气泡卡片、文字提示、统计数值' },
  { id: 'component-four', name: '走马灯、树型控件、时间轴、标签与标签页' },
];
const marginBottomStyle = {
  marginBottom: 8,
};
const topTitleStyle = {
  fontSize: 36,
};
const secondaryTitleStyle = {
  fontSize: 24,
};

export default () => (
  <div className="data-presentation">
    <Anchor dirs={dirs} />
    <div className="container">
      <section>
        <Typography
          title={<h2 className="title" style={topTitleStyle}>数据展示二</h2>}
          descriptions={[
            <div className="content-top-level" key="key">
              <p>合适的数据展示方式可以帮助用户快速地定位和浏览数据，以及更高效得协同工作，在设计时有以下几点需要注意：</p>
              <p>依据信息的重要等级、操作频率和关联程度来编排展示的顺序；注意极端情况下的引导。如数据信息过长，内容为空的初始化状态等。</p>
            </div>,
          ]}
        />
      </section>
      <section>
        <Anchor dirs={dirs} position="static" color="#5c57f2" />
      </section>
      <section>
        <Typography
          id="data-display-components"
          title={<h3 className="title" style={{ ...secondaryTitleStyle, color: '#5C57F2' }}>数据展示组件清单</h3>}
          descriptions={['']}
          pic={<img src={ComponentImg} alt="component" />}
        />
      </section>
      <div className="section-border-bottom" />
      <section style={{ marginBottom: 16 }}>
        <Typography
          id="component-three"
          title={<h3 className="title" style={{ ...secondaryTitleStyle, color: '#5C57F2', marginBottom: 16 }}>卡片、气泡卡片、文字提示、统计数值</h3>}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ ...marginBottomStyle, fontSize: 20 }}>卡片</h3>}
          descriptions={['']}
          pic={<img src={CardImg} alt="card" />}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ marginBottom: 16, fontSize: 20 }}>气泡卡片</h3>}
          pic={<img src={PopoverImg} alt="popover" />}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ marginBottom: 16, fontSize: 20 }}>文字提示</h3>}
          pic={<img src={TooltipImg} alt="tooltip" />}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ ...marginBottomStyle, fontSize: 20 }}>统计数值</h3>}
          descriptions={['']}
          pic={<img src={StatisticImg} alt="statistic" />}
        />
      </section>
      <div className="section-border-bottom" />
      <section style={{ marginBottom: 16 }}>
        <Typography
          id="component-four"
          title={<h3 className="title" style={{ ...secondaryTitleStyle, color: '#5C57F2' }}>走马灯、树型控件、时间轴、标签与标签页</h3>}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ ...marginBottomStyle, fontSize: 20 }}>走马灯</h3>}
          descriptions={['']}
          pic={<img src={CarouselImg} alt="carousel" />}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ ...marginBottomStyle, fontSize: 20 }}>树形控件</h3>}
          descriptions={['']}
          pic={<img src={TreeImg} alt="tree" />}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ ...marginBottomStyle, fontSize: 20 }}>时间轴</h3>}
          descriptions={['']}
          pic={<img src={TimelineImg} alt="timeline" />}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ ...marginBottomStyle, fontSize: 20 }}>标签</h3>}
          descriptions={['']}
          pic={<img src={TagImg} alt="tag" />}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ marginBottom: 16, fontSize: 20 }}>标签页</h3>}
          pic={<img src={TabsImg} alt="tabs" />}
        />
      </section>
    </div>
  </div>
);
