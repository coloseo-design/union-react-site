import React from 'react';
import { Result, Icon, Button } from 'union-design';
import Codeframe from '../../components/code-frame';

const statusMapping = {
  success: '项目创建成功',
  error: '项目创建失败',
  applicationSuccess: '应用创建成功',
  applicationError: '应用创建失败',
};

const demo = (status: string) => (
  <Result
    status={status}
    title={statusMapping[status]}
    subTitle="这是一句创建成功的描述这是一句创建成功的描述"
    extra={[
      <Button type="primary" key="1">创建应用</Button>,
      <Button key="2">返回列表</Button>,
    ]}
  />
);

const hight1 = (status: string) => `
import React from 'react';
import { Result, Icon, Button } from 'union-design';
            
const demo = () => (
  <div>
    <Result
      status=${JSON.stringify(status)}
      title=${JSON.stringify(statusMapping[status])}
      subTitle="这是一句创建成功的描述这是一句创建成功的描述"
      extra={[
        <Button type="primary" key="1">创建应用</Button>,
        <Button key="2">返回列表</Button>,
      ]}
    />
  </div>
)
`;

const ResultDemo: React.FC<unknown> = () => (
  <div>
    <Codeframe
      rightCode={hight1('success')}
      rightDemo={demo('success')}
      description={(
        <h3>项目创建成功</h3>
        )}
    />
    <Codeframe
      rightCode={hight1('error')}
      rightDemo={demo('error')}
      description={(
        <h3>项目创建失败</h3>
        )}
    />
    <Codeframe
      rightCode={hight1('applicationSuccess')}
      rightDemo={demo('applicationSuccess')}
      description={(
        <h3>应用创建成功</h3>
        )}
    />
    <Codeframe
      rightCode={hight1('applicationError')}
      rightDemo={demo('applicationError')}
      description={(
        <h3>应用创建失败</h3>
        )}
    />
    <Codeframe
      rightCode={`
import React from 'react';
import { Result, Icon, Button } from 'union-design';
            
const demo = () => (
  <div>
    <Result
      icon={<Icon type="user-circle" style={{ fontSize: 72, color: 'red', textAlign: 'center' }} />}
      title="自定义icon"
      subTitle="这是一句创建成功的描述这是一句创建成功的描述"
      extra={[
        <Button type="primary" key="1">创建应用</Button>,
        <Button key="2">返回列表</Button>,
      ]}
    />
  </div>
)
      `}
      rightDemo={(
        <Result
          icon={<Icon type="user-circle" style={{ fontSize: 72, color: 'red', textAlign: 'center' }} />}
          title="自定义icon"
          subTitle="这是一句创建成功的描述这是一句创建成功的描述"
          extra={[
            <Button type="primary" key="1">创建应用</Button>,
            <Button key="2">返回列表</Button>,
          ]}
        />
      )}
      description={(
        <h3>自定义icon</h3>
        )}
    />
  </div>
);

export default ResultDemo;
