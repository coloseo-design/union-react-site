import React from 'react';
import { Table } from 'union-design';

/* start
<h3>固定头表格</h3>
end */

export default () => {
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
  const columnsFixed = [
    {
      title: '事项代码',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      fixed: true,
    },
    {
      title: '事项名称',
      dataIndex: 'age',
      key: 'age',
      width: 200,
      fixed: 'right',
    },
    {
      title: '决策过程',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columnsFixed as any}
        rowKey="key"
        bordered
        scroll={{ y: 200, x: 1500 }}
      />
    </div>
  );
};
