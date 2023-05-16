import React from 'react';
import { Result, Button } from 'union-design';

/* start
<h3>项目创建成功</h3>
end */

export default () => (
  <Result
    status="success"
    title="项目创建成功"
    subTitle="这是一句创建成功的描述这是一句创建成功的描述"
    extra={[
      <Button type="primary" key="1">创建应用</Button>,
      <Button key="2">返回列表</Button>,
    ]}
  />
);
