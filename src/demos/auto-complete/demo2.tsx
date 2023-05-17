import React, { useState } from 'react';
import { AutoComplete } from 'union-design';

/* start
<div>
<h3>可搜索的</h3>

</div>
end */

const { Option, OptGroup } = AutoComplete;
export default () => {
  const [data, SetData] = useState<any[]>([]);
  const handleSearch = (value: string) => {
    let result: any[];
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
    }
    SetData(result);
  };
  const dataSource1 = [
    {
      title: 'Libraries',
      children: [
        {
          title: 'union-design',
          count: 10000,
        },
        {
          title: 'union-design UI',
          count: 10600,
        },
      ],
    },
    {
      title: 'Solutions',
      children: [
        {
          title: 'union-design UI',
          count: 60100,
        },
        {
          title: 'union-design',
          count: 30010,
        },
      ],
    },
    {
      title: 'Articles',
      children: [
        {
          title: 'union-design design language',
          count: 100000,
        },
      ],
    },
  ];
  function renderTitle(title: any) {
    return (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          more
        </a>
      </span>
    );
  }
  const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
  const searchChild = dataSource.map((item) => <Option key={item} value={item}>{item}</Option>);
  const options = dataSource1.map((group) => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
      {group.children.map((opt) => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
          <span className="certain-search-item-count">
            {opt.count}
            {' '}
            people
          </span>
        </Option>
      ))}
    </OptGroup>
  )).concat([
    <Option disabled key="all" className="show-all">
      <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
        View all results
      </a>
    </Option>,
  ]);
  return (
    <div>
      <p>设置defaultOpen 默认展开下拉弹窗，通过设置showSearch展示搜索框， 通过设置autoFocus为true自动聚焦</p>
      <AutoComplete
        placeholder="请输入"
        onSearch={handleSearch}
        style={{ width: 256 }}
        showSearch
        dataSource={searchChild}
        defaultOpen
        autoFocus
      />
      <p style={{ marginTop: 32 }}>通过 Option设置下拉列表样式</p>
      <AutoComplete
        placeholder="请输入"
        style={{ width: 256 }}
        dataSource={[
          {
            value: 1,
            label: 'glyphicon',
          },
          {
            value: 2,
            label: 'fff',
          },
        ]}
        showSearch
      />
      <p style={{ marginTop: 32 }}>通过OptGroup, Option设置自定义样式或者内容</p>
      <AutoComplete
        placeholder="请输入"
        onSearch={handleSearch}
        style={{ width: 256 }}
        dataSource={options}
      />
    </div>
  );
};
