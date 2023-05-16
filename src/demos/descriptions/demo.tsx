import React from 'react';
import { Descriptions } from 'union-design';
import Codeframe from '../../components/code-frame';

/* start
  <h3>设置有边框的描述列表</h3>
end */

const DescriptionsDemo = () => (
  <div>
    <Descriptions>
      <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="Remark">empty</Descriptions.Item>
      <Descriptions.Item label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
  </div>
);

export default DescriptionsDemo;
