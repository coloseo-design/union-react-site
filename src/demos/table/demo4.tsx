import React from 'react';
import { Table } from 'union-design';

/* start
<h3>可筛选过滤</h3>
<p>对某一列数据进行筛选，使用列的 filters 属性来指定需要筛选菜单的列，onFilter 用于筛选当前数据，filterMultiple 用于指定多选和单选</p>
end */

export default () => {
  const render1 = (k: string, row: any) => (
    <div>
      {row.name}
      @
      {k}
    </div>
  );
  const columns: any = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      fixed: true,
      filteredValue: ['张三', '李四'],
      filters: [
        {
          text: '张三 family',
          value: '张三',
        },
        {
          text: '李四 family',
          value: '李四',
        },
      ],
      onFilter: (value: any, record: { name: string | any[]; }) => record.name.includes(value),
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 150,
      fixed: 'right',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      filteredValue: ['No. 1'],
      filters: [
        {
          text: 'Jim family',
          value: 'No. 1',
        },
        {
          text: 'Joe family',
          value: 'No. 2',
        },
      ],
      onFilter: (value: any, record: any) => record.address.includes(value),
      render: render1,
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
    selectedRowKeys: ['4'],
  };
  const data1 = [
    {
      key: '1',
      name: '张三',
      age: 32,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park',
      province: 'a',
    },
    {
      key: '2',
      name: '李四',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park',
      province: 'b',
    },
    {
      key: '3',
      name: '张三一',
      age: 32,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sidney No. 1 Lake Park',
      province: 'c',
    },
    {
      key: '4',
      name: '李四一',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'London No. 2 Lake Park',
      province: 'd',
    },
    {
      key: '5',
      name: '小明',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park',
      province: 'e',
    },
  ];
  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        pagination={{ pageSize: 2 }}
        dataSource={data1}
        rowKey="key"
        scroll={{ y: 200, x: 1500 }}
      />
    </div>
  );
};
