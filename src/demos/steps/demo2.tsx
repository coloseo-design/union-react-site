import React from 'react';
import { Icon, Steps } from 'union-design';

/* start
<h3>竖向展示-步骤条</h3>
end */

export default () => (
  <Steps size="default" direction="vertical" style={{ width: '100%' }}>
    <Steps.Step title="处理完成" description="这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示" />
    <Steps.Step title="正在处理" description="这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示" />
    <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示" />
  </Steps>
);
