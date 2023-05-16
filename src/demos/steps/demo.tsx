import React from 'react';
import { Steps } from 'union-design';

const Demo = () => (
  <Steps onClick={(cur) => console.log(cur)} current={0} size="default" direction="horizontal" style={{ width: '100%' }}>
    <Steps.Step title="正在处理" description="这里是描述文案，超出折行显示" />
    <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示" />
    <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示" />
  </Steps>
);

export default Demo;
