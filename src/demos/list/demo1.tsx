import React from 'react';
import { List } from 'union-design';

/* start
<h3>操作项、描述、标题展示</h3>
end */

export default () => {
  const anotherData = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];
  return (
    <div>
      <List
        dataSource={anotherData}
        renderItem={
          (item, index) => (
            <List.Item
              key={`${index}`}
              // actions={[<span key={1}>查看详情</span>]}
            >
              <List.Item.Meta
                title={<span>{item.title}</span>}
                description="text text"
              />
              <div>content</div>
            </List.Item>
          )
        }
      />
    </div>
  );
};
