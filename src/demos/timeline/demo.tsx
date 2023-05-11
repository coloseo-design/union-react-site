import React from 'react';
import { Timeline } from 'union-design';
import Codeframe from '../../components/code-frame';

const TimelineDemo: React.FC<unknown> = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Timeline } from 'union-design';

const demo = () => (
  <div>
    <Timeline reverse>
      <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案1</Timeline.Item>
      <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案2</Timeline.Item>
      <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案3</Timeline.Item>
      <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案4</Timeline.Item>
      <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案5</Timeline.Item>
      <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案6</Timeline.Item>
      <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案7</Timeline.Item>
    </Timeline>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Timeline reverse>
            <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案1</Timeline.Item>
            <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案2</Timeline.Item>
            <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案3</Timeline.Item>
            <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案4</Timeline.Item>
            <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案5</Timeline.Item>
            <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案6</Timeline.Item>
            <Timeline.Item>这里是描述文案这里是描述文案这里是描述文案7</Timeline.Item>
          </Timeline>
        </div>
      )}
      description={(
        <h3>基本的</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Timeline } from 'union-design';

const demo = () => (
  <div>
    <Timeline>
      <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案1</Timeline.Item>
      <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案2</Timeline.Item>
      <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案3</Timeline.Item>
      <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案4</Timeline.Item>
      <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案5</Timeline.Item>
      <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案6</Timeline.Item>
      <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案7</Timeline.Item>
    </Timeline>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Timeline>
            <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案1</Timeline.Item>
            <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案2</Timeline.Item>
            <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案3</Timeline.Item>
            <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案4</Timeline.Item>
            <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案5</Timeline.Item>
            <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案6</Timeline.Item>
            <Timeline.Item label="2019-12-20 15:30">这里是描述文案这里是描述文案这里是描述文案7</Timeline.Item>
          </Timeline>
        </div>
      )}
      description={(
        <h3>带标签的</h3>
      )}
    />
  </div>

);

export default TimelineDemo;
