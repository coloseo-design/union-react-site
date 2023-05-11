import React from 'react';
import { List } from 'union-design';
import Codeframe from '../../components/code-frame';

export default () => {
  const data = [
    'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

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
      <Codeframe
        rightCode={`
import React from 'react';
import { List } from 'union-design';

const data = [
  'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const demo = () => (
  <div>
    <List
      dataSource={data}
      renderItem={
        (item, index) => (
          <List.Item
            key={index}
          >
            {item}
          </List.Item>
        )
      }
    />
  </div>
);
      `}
        rightDemo={(
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
      )}
        description={(
          <h3>基本用法</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { List } from 'union-design';

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

const demo = () => (
  <div>
    <List
      dataSource={anotherData}
      renderItem={
        (item, index) => (
          <List.Item
            key={index}
            actions={[<span key={1}>查看详情</span>]}
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
      `}
        rightDemo={(
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
      )}
        description={(
          <h3>操作项、描述、标题展示</h3>
      )}
      />
    </div>
  );
};
