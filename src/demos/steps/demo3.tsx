import React from 'react';
import { Icon, Steps } from 'union-design';

/* start
<h3>竖向展示-步骤条 size = big</h3>
end */

export default () => (
  <Steps size="big" direction="vertical" style={{ width: '100%' }}>
    <Steps.Step status="finish" title="处理完成" description="这里是描述文案，超出折行显示" />
    <Steps.Step status="process" title="正在处理" description="这里是描述文案，超出折行显示" />
    <Steps.Step status="wait" title="等待处理" description="这里是描述文案，超出折行显示" />
  </Steps>
);
