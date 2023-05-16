import React from 'react';
import { List } from 'union-design';

export default () => {
  const data = [
    'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  return (
    <div>
      <List
        dataSource={data}
        renderItem={
  (item, index) => (
    <List.Item
      key={`${index}`}
    >
      {item}
    </List.Item>
  )
}
      />
    </div>
  );
};
