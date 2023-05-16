import React from 'react';
import { Transfer } from 'union-design';

const TransferDemo = () => {
  const mockData = [];
  for (let i = 0; i < 20; i += 1) {
    mockData.push({
      key: i.toString(),
      title: `集团法务部${i}`,
      description: `description of content${i + 1}`,
      name: `张某${i}好`,
      disabled: i % 3 < 1,
    });
  }
  const Keys = mockData.filter((item) => +item.key % 3 > 1).map((item) => item.key);

  return (
    <div>
      <Transfer
        dataSource={mockData}
        targetKeys={Keys}
        titles={['源列表', '目的列表']}
        operations={['to right', 'to left']}
        selectedKeys={['1']}
      />
    </div>

  );
};

export default TransferDemo;
