import React from 'react';
import { Icon, Steps } from 'union-design';
import Codeframe from '../../components/code-frame';

const Demo = () => (
  <div style={{
    // minHeight: '40vh', padding: 40, backgroundColor: 'rgb(250, 250, 250)',
  }}
  >
    <Codeframe
      rightDemo={(
        <>
          <Steps onClick={(cur) => console.log(cur)} current={0} size="default" direction="horizontal" style={{ width: '100%' }}>
            <Steps.Step title="正在处理" description="这里是描述文案，超出折行显示" />
            <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示" />
            <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示" />
          </Steps>
        </>
      )}
      rightCode={`
import React from 'react';
import { Steps } from 'union-design';

const Demo = () => (
  <Steps onClick={(cur) => console.log(cur)} current={0} size="default" direction="horizontal" style={{ width: '100%' }}>
    <Steps.Step title="正在处理" description="这里是描述文案，超出折行显示" />
    <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示" />
    <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示" />
  </Steps>
)
`}
      description={
        <h3>横向展示-步骤条</h3>
      }
    />
    <Codeframe
      rightCode={`
import React from 'react';
import { Steps } from 'union-design';

const Demo = () => (
  <Steps current={1} size="big" direction="horizontal">
    <Steps.Step title="处理完成" description="这里是描述文案，超出折行显示" />
    <Steps.Step title="正在处理" description="这里是描述文案，超出折行显示" />
    <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示" />
  </Steps>
)
`}
      rightDemo={(
        <Steps current={1} size="big" direction="horizontal">
          <Steps.Step title="处理完成" description="这里是描述文案，超出折行显示" />
          <Steps.Step title="正在处理" description="这里是描述文案，超出折行显示" />
          <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示" />
        </Steps>
      )}
      description={
        <h3>横向展示-步骤条 size = big</h3>
      }
    />
    <Codeframe
      rightCode={`
import React from 'react';
import { Steps } from 'union-design';

const Demo = () => (
  <Steps size="default" direction="vertical" style={{ width: '100%' }}>
    <Steps.Step title="处理完成" description="这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示" />
    <Steps.Step title="正在处理" description="这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示" />
    <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示" />
  </Steps>
)
`}
      rightDemo={(
        <Steps size="default" direction="vertical" style={{ width: '100%' }}>
          <Steps.Step title="处理完成" description="这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示" />
          <Steps.Step title="正在处理" description="这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示这里是描述文案，超出折行显示" />
          <Steps.Step title="等待处理" description="这里是描述文案，超出折行显示" />
        </Steps>
      )}
      description={
        <h3>竖向展示-步骤条</h3>
      }
    />
    <Codeframe
      rightCode={`
import React from 'react';
import { Steps } from 'union-design';

const Demo = () => (
  <Steps size="big" direction="vertical" style={{ width: '100%' }}>
    <Steps.Step status="finish" title="处理完成" description="这里是描述文案，超出折行显示" />
    <Steps.Step status="process" title="正在处理" description="这里是描述文案，超出折行显示" />
    <Steps.Step status="wait" title="等待处理" description="这里是描述文案，超出折行显示" />
  </Steps>
)
`}
      rightDemo={(
        <Steps size="big" direction="vertical" style={{ width: '100%' }}>
          <Steps.Step status="finish" title="处理完成" description="这里是描述文案，超出折行显示" />
          <Steps.Step status="process" title="正在处理" description="这里是描述文案，超出折行显示" />
          <Steps.Step status="wait" title="等待处理" description="这里是描述文案，超出折行显示" />
        </Steps>
      )}
      description={
        <h3>竖向展示-步骤条 size = big</h3>
      }
    />
    <Codeframe
      rightDemo={(
        <Steps size="big" direction="horizontal" style={{ width: '100%' }}>
          <Steps.Step icon={<Icon type="like" style={{ fontSize: 16 }} />} status="finish" title="处理完成" description="这里是描述文案，超出折行显示" />
          <Steps.Step icon={<Icon type="computer" style={{ fontSize: 16 }} />} status="process" title="正在处理" description="这里是描述文案，超出折行显示" />
          <Steps.Step icon={<Icon type="notice-board" style={{ fontSize: 16 }} />} status="wait" title="等待处理" description="这里是描述文案，超出折行显示" />
        </Steps>
      )}
      rightCode={`
import React from 'react';
import { Steps } from 'union-design';

const Demo = () => (
  <Steps size="big" direction="horizontal" style={{ width: '100%' }}>
    <Steps.Step icon={<Icon type="like" />} status="finish" title="处理完成" description="这里是描述文案，超出折行显示" />
    <Steps.Step icon={<Icon type="computer" />} status="process" title="正在处理" description="这里是描述文案，超出折行显示" />
    <Steps.Step icon={<Icon type="notice-board" />} status="wait" title="等待处理" description="这里是描述文案，超出折行显示" />
  </Steps>
)
`}
      description={
        <h3>自定义Icon-步骤条</h3>
      }
    />
  </div>
);

export default Demo;
