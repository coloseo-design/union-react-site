import React from 'react';
import { Transfer } from 'union-design';

/* start
<h3>自定义渲染行数据</h3>
end */

export default () => {
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
  const renderItem = (item: any) => {
    const customLabel = (
      <span className="custom-item">
        {item.title}
        {' '}
        -
        {item.name}
      </span>
    );

    return {
      label: customLabel, // for displayed item
      value: item.title, // for title and filter matching
    };
  };
  return (
    <div>
      <Transfer
        dataSource={mockData}
        targetKeys={Keys}
        listStyle={{
          width: 230,
          height: 280,
        }}
        render={renderItem}
        titles={['待发起会议通知', '待发起会议通知']}
      />
    </div>
  );
};
