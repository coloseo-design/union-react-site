import React from 'react';
import { Table, Switch } from 'union-design';

const dataSource = [
  {
    key: '1',
    name: 'H01-001',
    age: '省分分公司领导班子调整',
    address: '董事会监管会',
  },
  {
    key: '2',
    name: 'H01-001',
    age: '省分分公司领导班子调整',
    address: '董事会监管会',
  },
  {
    key: '3',
    name: 'H01-001',
    age: '省分分公司领导班子调整',
    address: '董事会监管会',
  },
  {
    key: '4',
    name: 'H01-001',
    age: '省分分公司领导班子调整',
    address: '董事会监管会',
  },
  {
    key: '5',
    name: 'H01-001',
    age: '省分分公司领导班子调整',
    address: '董事会监管会',
  },
  {
    key: '6',
    name: 'H01-001',
    age: '省分分公司领导班子调整',
    address: '董事会监管会',
  },
];

const columnsBase = [
  {
    title: '事项代码',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: '事项名称',
    dataIndex: 'age',
    key: 'age',
    width: 150,
  },
  {
    title: '决策过程',
    dataIndex: 'address',
    key: 'address',
  },
];

const TableDemo: React.FC<unknown> = () => {
  const [bordered, setBordered] = React.useState(false);
  const [loading, $loading] = React.useState(false);
  const onChange = (v: boolean) => {
    setBordered(v);
  };
  const onChange1 = (v: boolean) => {
    $loading(v);
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        是否展示border：
        <Switch checked={bordered} onChange={onChange} />
        <br />
        <br />
        loading：
        <Switch checked={loading} onChange={onChange1} />
      </div>
      <Table
        dataSource={dataSource}
        columns={columnsBase}
        rowKey="key"
        bordered={bordered}
        loading={loading}
      />
    </div>
  );
};

export default TableDemo;
