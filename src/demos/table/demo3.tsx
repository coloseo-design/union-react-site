import React from 'react';
import { Table, Radio } from 'union-design';

/* start
<h3>可选择行</h3>
<p>第一列是联动的选择框。可以通过 rowSelection.type 属性指定选择类型，默认为 checkbox。</p>
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
  const columnsFixed: any = [
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
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, selectedRowKeys, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: { name: string; }) => ({
      disabled: record.name === 'Jim Red', // Column configuration not to be checked
      name: record.name,
    }),
  };
  const [selectType, $type] = React.useState('1');
  const radioChange = (e: any) => {
    $type(e.target.value);
  };
  return (
    <div>
      <Radio.Group onChange={radioChange} style={{ marginBottom: 24 }} value={selectType}>
        <Radio value="1">checkbox</Radio>
        <Radio value="2">radio</Radio>
      </Radio.Group>
      <Table
        rowSelection={{ ...rowSelection, type: selectType === '2' ? 'radio' : 'checkbox' }}
        columns={columnsFixed}
        dataSource={dataSource}
        rowKey="key"
        scroll={{ y: 200, x: 1500 }}
      />
    </div>
  );
};
