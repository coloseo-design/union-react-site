/* eslint-disable react/display-name */
import React from 'react';
import Typography from '../../../components/typography';
import { Anchor } from '../../../components/anchor';
import './styles/index.less';

const ComponentImg = require('./images/component.svg');
const AvatarImg = require('./images/avatar.svg');
const DatePickerImg = require('./images/date_picker.svg');
const PictureImg = require('./images/picture.svg');
const CollapseImg = require('./images/collapse.svg');
const DescriptionsImg = require('./images/descriptions.svg');
const ListImg = require('./images/list.svg');
const TableImg = require('./images/table.svg');

const dirs = [
  { id: 'data-display-components', name: '数据展示组件清单' },
  { id: 'components-one', name: '头像、徽标、日历、图片' },
  { id: 'components-two', name: '折叠面部、描述列表、列表与表格' },
];

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
          title={<h2 className="title" style={topTitleStyle}>数据展示一</h2>}
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
          id="components-one"
          title={<h3 className="title" style={{ ...secondaryTitleStyle, color: '#5C57F2' }}>头像与徽标、日历、图片</h3>}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ margin: '16px 0px', fontSize: 20 }}>头像与徽标</h3>}
          pic={<img src={AvatarImg} alt="avatar" />}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ marginBottom: 16, fontSize: 20 }}>日历</h3>}
          pic={<img src={DatePickerImg} alt="Data picker" />}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ marginBottom: 16, fontSize: 20 }}>图片</h3>}
          pic={<img src={PictureImg} alt="pic" />}
        />
      </section>
      <div className="section-border-bottom" />
      <section style={{ marginBottom: 0 }}>
        <Typography
          id="components-two"
          title={<h3 className="title" style={{ ...secondaryTitleStyle, color: '#5C57F2' }}>折叠面板、描述列表、列表与表格</h3>}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ margin: '16px 0px', fontSize: 20 }}>折叠面板</h3>}
          pic={<img src={CollapseImg} alt="collapase" />}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ marginBottom: 16, fontSize: 20 }}>描述列表</h3>}
          pic={<img src={DescriptionsImg} alt="descriptions" />}
        />
      </section>
      <section>
        <Typography
          title={<h3 style={{ marginBottom: 16, fontSize: 20 }}>列表</h3>}
          pic={<img src={ListImg} alt="list" />}
        />
      </section>
      <section style={{ marginBottom: 0 }}>
        <Typography
          title={<h3 style={{ marginBottom: 16, fontSize: 20 }}>表格</h3>}
          pic={<img src={TableImg} alt="table" />}
        />
      </section>
    </div>
  </div>
);
