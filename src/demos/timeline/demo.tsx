import React from 'react';
import { Timeline } from 'union-design';

const TimelineDemo: React.FC<unknown> = () => (
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

export default TimelineDemo;
