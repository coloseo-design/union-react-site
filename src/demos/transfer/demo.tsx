import React from 'react';
import { Transfer } from 'union-design';
import Codeframe from '../../components/code-frame';

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
      <Codeframe
        rightCode={`
import React from 'react';
import { Transfer } from 'union-design';

const mockData = [];
for (let i = 0; i < 20; i += 1) {
  mockData.push({
    key: i.toString(),
    title: \`集团法务部\${i}\`,
    description: \`description of content\${i + 1}\`,
    name: \`张某\${i}好\`,
    disabled: i % 3 < 1,
  });
}
const Keys = mockData.filter((item) => +item.key % 3 > 1).map((item) => item.key);

const demo = () => (
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
      `}
        rightDemo={(
          <div>
            <Transfer
              dataSource={mockData}
              targetKeys={Keys}
              titles={['源列表', '目的列表']}
              operations={['to right', 'to left']}
              selectedKeys={['1']}
            />
          </div>
      )}
        description={(
          <h3>常规的</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Transfer } from 'union-design';

const mockData = [];
for (let i = 0; i < 20; i += 1) {
  mockData.push({
    key: i.toString(),
    title: \`集团法务部\${i}\`,
    description: \`description of content\${i + 1}\`,
    name: \`张某\${i}好\`,
    disabled: i % 3 < 1,
  });
}
const Keys = mockData.filter((item) => +item.key % 3 > 1).map((item) => item.key);

const demo = () => (
  <div>
    <Transfer
      dataSource={mockData}
      targetKeys={Keys}
      titles={['源列表', '目的列表']}
      showSearch
    />
  </div>
);
      `}
        rightDemo={(
          <div>
            <Transfer
              dataSource={mockData}
              targetKeys={Keys}
              titles={['源列表', '目的列表']}
              showSearch
            />
          </div>
      )}
        description={(
          <h3>普通的搜索</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Transfer } from 'union-design';

const mockData = [];
for (let i = 0; i < 20; i += 1) {
  mockData.push({
    key: i.toString(),
    title: \`集团法务部\${i}\`,
    description: \`description of content\${i + 1}\`,
    name: \`张某\${i}好\`,
    disabled: i % 3 < 1,
  });
}
const Keys = mockData.filter((item) => +item.key % 3 > 1).map((item) => item.key);

const demo = () => (
  <div>
    <Transfer
      dataSource={mockData}
      targetKeys={Keys}
      titles={['source', 'target']}
      showSearch
      filterOption={(value, option) => option.name.indexOf(value) > -1}
    />
  </div>
);
      `}
        rightDemo={(
          <div>
            <Transfer
              dataSource={mockData}
              targetKeys={Keys}
              titles={['source', 'target']}
              showSearch
              filterOption={(value, option) => option.name.indexOf(value) > -1}
            />
          </div>
      )}
        description={(
          <h3>自定义搜索</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Transfer } from 'union-design';

const mockData = [];
for (let i = 0; i < 20; i += 1) {
  mockData.push({
    key: i.toString(),
    title: \`集团法务部\${i}\`,
    description: \`description of content\${i + 1}\`,
    name: \`张某\${i}好\`,
    disabled: i % 3 < 1,
  });
}
const Keys = mockData.filter((item) => +item.key % 3 > 1).map((item) => item.key);

const demo = () => (
  <div>
    <Transfer
      dataSource={mockData}
      targetKeys={Keys}
      listStyle={{
        width: 250,
        height: 280,
      }}
      render={renderItem}
      titles={['待发起会议通知', '待发起会议通知']}
    />
  </div>
);
      `}
        rightDemo={(
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
      )}
        description={(
          <h3>自定义渲染行数据</h3>
      )}
      />
    </div>

  );
};

export default TransferDemo;
