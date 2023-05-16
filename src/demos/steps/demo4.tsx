import React from 'react';
import { Icon, Steps } from 'union-design';

/* start
<h3>自定义Icon-步骤条</h3>
end */

export default () => (
  <Steps size="big" direction="horizontal" style={{ width: '100%' }}>
    <Steps.Step icon={<Icon type="like" style={{ fontSize: 16 }} />} status="finish" title="处理完成" description="这里是描述文案，超出折行显示" />
    <Steps.Step icon={<Icon type="computer" style={{ fontSize: 16 }} />} status="process" title="正在处理" description="这里是描述文案，超出折行显示" />
    <Steps.Step icon={<Icon type="notice-board" style={{ fontSize: 16 }} />} status="wait" title="等待处理" description="这里是描述文案，超出折行显示" />
  </Steps>
);
