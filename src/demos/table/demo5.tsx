import React from 'react';
import { Table } from 'union-design';
/* start
<h3>可展开行</h3>
通过expandedRowRender 返回null 或者ReactNode来设置
end */

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

export default () => {
  const dataSource = [
    {
      key: '1',
      name: 'H01-001',
      age: '省分分公司领导班子调整',
      address: '董事会监管会',
      description: '展开行测试测试测试测试测试',
    },
    {
      key: '2',
      name: 'H01-001',
      age: '省分分公司领导班子调整',
      address: '董事会监管会',
      description: '展开行测试测试测试测试测试',
    },
    {
      key: '3',
      name: 'H01-001',
      age: '省分分公司领导班子调整',
      address: '董事会监管会',
      description: '展开行测试测试测试测试测试',
    },
    {
      key: '4',
      name: 'H01-001',
      age: '省分分公司领导班子调整',
      address: '董事会监管会',
      description: '展开行测试测试测试测试测试',
    },
    {
      key: '5',
      name: 'H01-001',
      age: '省分分公司领导班子调整',
      address: '董事会监管会',
      description: '展开行测试测试测试测试测试',
    },
    {
      key: '6',
      name: 'H01-001',
      age: '省分分公司领导班子调整',
      address: '董事会监管会',
      description: '展开行测试测试测试测试测试',
    },
  ];
  return (
    <Table
      dataSource={dataSource}
      columns={columnsBase}
      expandedRowRender={(record) => <p>{record.description}</p>}
    />
  );
};
