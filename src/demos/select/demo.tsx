import React from 'react';
import { Select } from 'union-design';
import Codeframe from '../../components/code-frame';

const { Option } = Select;

const SelectDemo = () => {
  const data = [
    {
      value: '1',
      label: '联通设计系统1',
    },
    {
      value: 2,
      label: '联通设计系统2',
    },
  ];
  const [dataT, setData] = React.useState([]);
  const [data1, setData1] = React.useState([]);
  const [lastFetchId, setlastFetchId] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setData(data);
    }, 2000);
  }, []);

  const fetchUser = (value: any) => {
    setlastFetchId(lastFetchId + 1);
    data1.push({
      value: lastFetchId,
      label: value,
    });
  };

  const [value1, setvalue] = React.useState(['1']);
  return (
    <div>
      <Codeframe
        rightCode={`
import React from 'react';
import { Select } from 'union-design';

const { Option } = Select;

const data = [
  {
    value: '1',
    label: '联通设计系统1',
  },
  {
    value: 2,
    label: '联通设计系统2',
  },
];

const [dataT, setData] = React.useState([]);

React.useEffect(() => {
  setTimeout(() => {
    setData(data);
  }, 2000);
}, []);

const demo = () => (
  <div>
    <Select
      onSelect={
        (value, label) => {
          console.log('--- value ', value, label);
        }
      }
      placeholder="请选择选项"
      style={{ width: 220 }}
      value="1"
    >
      {dataT.map((item: any) => (
        <Option value={item.value} key={item.value}>{item.label}</Option>
      ))}
    </Select>
  </div>
);
      `}
        rightDemo={(
          <div>
            <Select
              onSelect={
                (value, label) => {
                  console.log('--- value ', value, label);
                }
              }
              placeholder="请选择选项"
              style={{ width: 220 }}
              value="1"
            >
              {dataT.map((item: any) => (
                <Option value={item.value} key={item.value}>{item.label}</Option>
              ))}
            </Select>
          </div>
      )}
        description={(
          <h3>基础选择框</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Select } from 'union-design';

const { Option } = Select;

const demo = () => (
  <div>
    <Select
      onChange={
        (value, label) => {
          console.log('--- value ', value);
          console.log('--- label ', label);
        }
      }
      placeholder="请选择选项"
      style={{ width: 220 }}
      type="multiple"
      value={value1}
      maxTagCount={2}
    >
      <Option key="1" value="1">这是一个很长的很长的选项111</Option>
      <Option key="2" value="2">选项1222</Option>
      <Option disabled key="3" value="3">选项33333</Option>
      <Option key="4" value="4">选项1rt2</Option>
      <Option key="5" value="5">选项12try22</Option>
      <Option key="6" value="6">选项12yhr22</Option>
    </Select>
  </div>
);
      `}
        rightDemo={(
          <div>
            <Select
              onChange={
          (value, label) => {
            console.log('--- value ', value);
            console.log('--- label ', label);
          }
        }
              placeholder="请选择选项"
              style={{ width: 220 }}
              type="multiple"
              value={value1}
              maxTagCount={2}
            >
              <Option key="1" value="1">这是一个很长的很长的选项111</Option>
              <Option key="2" value="2">选项1222</Option>
              <Option disabled key="3" value="3">选项33333</Option>
              <Option key="4" value="4">选项1rt2</Option>
              <Option key="5" value="5">选项12try22</Option>
              <Option key="6" value="6">选项12yhr22</Option>
            </Select>
          </div>
      )}
        description={(
          <h3>多选框</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Select } from 'union-design';

const { Option } = Select;

const demo = () => (
  <div>
    <Select
      onSelect={
        (value, label) => {
          console.log('--- value ', value);
          console.log('--- label ', label);
        }
      }
      placeholder="请选择选项"
      style={{ width: 220 }}
      type="search"
      onSearch={(val) => { console.log('--- val ', val); }}
    >
      <Option key="1" value="1">选项111</Option>
      <Option key="2" value="2">选项1222</Option>
      <Option disabled key="3" value="3">选项33333</Option>
    </Select>
  </div>
);
      `}
        rightDemo={(
          <div>
            <Select
              onSelect={
          (value, label) => {
            console.log('--- value ', value);
            console.log('--- label ', label);
          }
        }
              placeholder="请选择选项"
              style={{ width: 220 }}
              type="search"
              onSearch={(val) => { console.log('--- val ', val); }}
            >
              <Option key="1" value="1">选项111</Option>
              <Option key="2" value="2">选项1222</Option>
              <Option disabled key="3" value="3">选项33333</Option>
            </Select>
          </div>
      )}
        description={(
          <h3>可搜索选择框</h3>
      )}
      />

      {/* <h1>
        远程搜索选择框 - (备注：使用方法参见
        <a target="_blank" rel="noreferrer" href="https://ant.design/components/select-cn/#components-select-demo-search-box">antd select 搜索框</a>
        )
      </h1>
      <Select
        onSelect={
          (value, label) => {
            console.log('--- value ', value);
            console.log('--- label ', label);
          }
        }
        placeholder="请选择选项"
        style={{ width: 220 }}
        type="search"
        remoteSearch
        onSearch={fetchUser}
      >
        <Option key="1" value="1">选项111</Option>
        <Option key="2" value="2">选项1222</Option>
        <Option disabled key="3" value="3">选项33333</Option>
      </Select> */}
    </div>
  );
};

export default SelectDemo;
