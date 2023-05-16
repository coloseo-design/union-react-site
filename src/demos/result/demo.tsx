import React from 'react';
import { Result, Icon, Button } from 'union-design';

/* start
<h3>自定义icon</h3>
end */

const ResultDemo: React.FC<unknown> = () => (
  <Result
    icon={<Icon type="user-circle" style={{ fontSize: 72, color: 'red', textAlign: 'center' }} />}
    title="自定义icon"
    subTitle="这是一句创建成功的描述这是一句创建成功的描述"
    extra={[
      <Button type="primary" key="1">创建应用</Button>,
      <Button key="2">返回列表</Button>,
    ]}
  />
);

export default ResultDemo;
