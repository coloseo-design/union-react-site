import React from 'react';
import { Select } from 'union-design';

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
  const [dataT, setData] = React.useState<any[]>([]);
  React.useEffect(() => {
    setTimeout(() => {
      setData(data);
    }, 2000);
  }, []);

  return (
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
};

export default SelectDemo;
