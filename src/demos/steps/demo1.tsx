import React from 'react';
import { Icon, Steps } from 'union-design';

/* start
<h3>横向展示-步骤条 size = big</h3>
end */

export default () => (
  <Steps current={1} size="big" direction="horizontal">
    <Steps.Step title="处理完成" description="这里是描述文案，超出折行显示" />
    <Steps.Step title="正在处理" description="这里是描述文案，超出折行显示" />
    <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示" />
  </Steps>
);
