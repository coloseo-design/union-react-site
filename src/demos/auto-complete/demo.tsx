import React, { useState } from 'react';
import { AutoComplete } from 'union-design';
import Codeframe from '../../components/code-frame';

const { Option, OptGroup } = AutoComplete;
export default () => {
  const inputRef = React.createRef();
  const [data, SetData] = useState([]);
  const handleSearch = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
    }
    SetData(result);
  };
  const children = data.map((email) => <Option key={email} value={email}>{email}</Option>);
  const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
  const searchChild = dataSource.map((item) => <Option key={item} value={item}>{item}</Option>);
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
  function renderTitle(title) {
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
      <Codeframe
        rightCode={`
        import React, { useState } from 'react';
        import { AutoComplete } from 'union-design';

        const Demo = () => {
          const [data, SetData] = useState([]);
          const handleSearch = (value) => {
            let result;
            if (!value || value.indexOf('@') >= 0) {
              result = [];
            } else {
              result = ['gmail.com', '163.com', 'qq.com'].map((domain) => {value}@{domain});
            }
            SetData(result);
          };
          const children = data.map((email) => <Option key={email} value={email}>{email}</Option>);

          return (
            <AutoComplete
              placeholder="请输入"
              onSearch={handleSearch}
              dataSource={children}
              style={{ width: 256 }}
            />
          )
        }
        `}
        rightDemo={(
          <AutoComplete
            placeholder="请输入"
            onSearch={handleSearch}
            dataSource={children}
            style={{ width: 256 }}
          />
        )}
        description={
          <h3>基本用法</h3>
        }
      />
      <Codeframe
        rightCode={`
        import React, { useState } from 'react';
        import { AutoComplete } from 'union-design';


        const Demo = () => {
          const [data, SetData] = useState([]);
          const handleSearch = (value) => {
            let result;
            if (!value || value.indexOf('@') >= 0) {
              result = [];
            } else {
              result = ['gmail.com', '163.com', 'qq.com'].map((domain) => {value}@{domain});
            }
            SetData(result);
          };
          const inputRef = React.createRef();
          const children = data.map((email) => <Option key={email} value={email}>{email}</Option>);

          return (
            <AutoComplete
              onSearch={handleSearch}
              dataSource={children}
              placeholder="请输入"
              style={{ marginLeft: 32, width: 256 }}
              multiInput
              ref={inputRef}
              rows={3}
            />
          )
        }
        `}
        rightDemo={(
          <AutoComplete
            onSearch={handleSearch}
            dataSource={children}
            placeholder="请输入"
            style={{ width: 256 }}
            multiInput
            ref={inputRef}
            rows={3}
          />
        )}
        description={
          <h3>多行的</h3>
        }
      />
      <Codeframe
        rightCode={`
        import React, { useState } from 'react';
        import { AutoComplete } from 'union-design';

        const Demo = () => {
          const handleSearch = (value) => {
            let result;
            if (!value || value.indexOf('@') >= 0) {
              result = [];
            } else {
              result = ['gmail.com', '163.com', 'qq.com'].map((domain) => {value}@{domain});
            }
            SetData(result);
          };
          const { Option, OptGroup } = AutoComplete;
          const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
          const searchChild = dataSource.map((item) => <Option key={item} value={item}>{item}</Option>);
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
          function renderTitle(title) {
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
            <>
              <AutoComplete
                placeholder="请输入"
                onSearch={handleSearch}
                style={{ margin: 32, width: 256 }}
                showSearch
                dataSource={searchChild}
              />
              <AutoComplete
                placeholder="请输入"
                style={{ marginTop: 32, display: 'block', width: 256 }}
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
              >
                dew
              </AutoComplete>
              <AutoComplete
                placeholder="请输入"
                onSearch={handleSearch}
                style={{ marginTop: 32, width: 256 }}
                dataSource={options}
              />
            </>
          )
        }
        `}
        rightDemo={(
          <>
            <AutoComplete
              placeholder="请输入"
              onSearch={handleSearch}
              style={{ marginTop: 32, width: 256 }}
              showSearch
              dataSource={searchChild}
            />
            <AutoComplete
              placeholder="请输入"
              style={{ marginTop: 32, display: 'block', width: 256 }}
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
            <AutoComplete
              placeholder="请输入"
              onSearch={handleSearch}
              style={{ marginTop: 32, width: 256 }}
              dataSource={options}
            />
          </>
        )}
        description={
          <h3>可搜索的</h3>
        }
      />
    </div>
  );
};
