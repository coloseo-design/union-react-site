import React from 'react';
import { Descriptions } from 'union-design';

/* start
  <h3>设置有边框的描述列表</h3>
end */
export default () => (
  <div>
    <Descriptions bordered>
      <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="Remark">empty</Descriptions.Item>
      <Descriptions.Item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </Descriptions.Item>
    </Descriptions>
  </div>
);
