import React from 'react';
import { Table } from 'union-design';
import Codeframe from '../../components/code-frame';

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

const render1 = (k: string, row: any) => (
  <div>
    {row.name}
    @
    {k}
  </div>
);

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

const columns = [
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
        value: '张三',
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

const renderContent = (value: any, row: any, index: number) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const spanColumns = [
  {
    title: '部门',
    dataIndex: 'name',
    render: (text: unknown | null | undefined, row: any, index: number) => {
      if (index < 4) {
        return <span style={{ color: '#207EEA' }}>{text}</span>;
      }
      return {
        children: <span style={{ color: '#207EEA' }}>{text}</span>,
        props: {
          colSpan: 6,
        },
      };
    },
  },
  {
    title: '工号',
    align: 'right',
    dataIndex: 'age',
    render: renderContent,
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    render: (value: any, row: any, index: number) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 2) {
        obj.props.rowSpan = 2;
      }
      if (index === 3) {
        obj.props.rowSpan = 0;
      }
      if (index === 4) {
        obj.props.colSpan = 0;
      }
      return obj;
    },
  },
  {
    title: '电话',
    colSpan: 0,
    dataIndex: 'phone',
    render: renderContent,
  },
  {
    title: '地址',
    dataIndex: 'address',
    colSpan: 2,
    render: renderContent,
  },
  {
    title: '省市',
    dataIndex: 'province',
    render: renderContent,
    colSpan: 0,
  },
];

const data = [
  {
    key: '1',
    name: '监管部门',
    age: 'H-001',
    tel: '0571-22098909',
    phone: 18889898989,
    address: '朝阳区',
    province: '北京',
  },
  {
    key: '2',
    name: '设计部',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 'H-002',
    address: '朝阳区',
    province: '北京',
  },
  {
    key: '3',
    name: '产品部',
    age: 'H-003',
    tel: '0575-22098909',
    phone: 18900010002,
    address: '朝阳区',
    province: '北京',
  },
  {
    key: '4',
    name: '开发部',
    age: 'H-004',
    tel: '0575-22098909',
    phone: 18900010002,
    address: '朝阳区',
    province: '北京',
  },
  {
    key: '5',
    name: '总部',
    age: 'H-005',
    tel: '0575-22098909',
    phone: 18900010002,
    address: '朝阳区',
    province: '北京',
  },
];
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

const TableDemo: React.FC<unknown> = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Table } from 'union-design';

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

const demo = () => (
  <div>
    <Table
      dataSource={dataSource}
      columns={columnsBase}
      rowKey="key"
      bordered
      scroll={{ y: 200 }}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Table
            dataSource={dataSource}
            columns={columnsBase}
            rowKey="key"
            bordered
            scroll={{ y: 200 }}
          />
        </div>
      )}
      description={(
        <h3>基础表格</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Table } from 'union-design';

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

const demo = () => (
  <div>
    <Table
      dataSource={dataSource}
      columns={columnsFixed}
      rowKey="key"
      bordered
      scroll={{ y: 200, x: 1500 }}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Table
            dataSource={dataSource}
            columns={columnsFixed}
            rowKey="key"
            bordered
            scroll={{ y: 200, x: 1500 }}
          />
        </div>
      )}
      description={(
        <h3>固定头表格</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Table } from 'union-design';

const spanColumns = [
  {
    title: '部门',
    dataIndex: 'name',
    render: (text: unknown | null | undefined, row: any, index: number) => {
      if (index < 4) {
        return <span style={{ color: '#b30000' }}>{text}</span>;
      }
      return {
        children: <span style={{ color: '#b30000' }}>{text}</span>,
        props: {
          colSpan: 6,
        },
      };
    },
  },
  {
    title: '工号',
    align: 'right',
    dataIndex: 'age',
    render: renderContent,
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    render: (value: any, row: any, index: number) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 2) {
        obj.props.rowSpan = 2;
      }
      if (index === 3) {
        obj.props.rowSpan = 0;
      }
      if (index === 4) {
        obj.props.colSpan = 0;
      }
      return obj;
    },
  },
  {
    title: '电话',
    colSpan: 0,
    dataIndex: 'phone',
    render: renderContent,
  },
  {
    title: '地址',
    dataIndex: 'address',
    colSpan: 2,
    render: renderContent,
  },
  {
    title: '省市',
    dataIndex: 'province',
    render: renderContent,
    colSpan: 0,
  },
];

const data = [
  {
    key: '1',
    name: '监管部门',
    age: 'H-001',
    tel: '0571-22098909',
    phone: 18889898989,
    address: '朝阳区',
    province: '北京',
  },
  {
    key: '2',
    name: '人事部',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 'H-002',
    address: '朝阳区',
    province: '北京',
  },
  {
    key: '3',
    name: '技术部',
    age: 'H-003',
    tel: '0575-22098909',
    phone: 18900010002,
    address: '朝阳区',
    province: '北京',
  },
  {
    key: '4',
    name: '卫生部',
    age: 'H-004',
    tel: '0575-22098909',
    phone: 18900010002,
    address: '朝阳区',
    province: '北京',
  },
  {
    key: '5',
    name: '总部',
    age: 'H-005',
    tel: '0575-22098909',
    phone: 18900010002,
    address: '朝阳区',
    province: '北京',
  },
];

const demo = () => (
  <div>
    <Table columns={spanColumns} dataSource={data} rowKey="key" bordered />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Table columns={spanColumns} dataSource={data} rowKey="key" bordered />
        </div>
      )}
      description={(
        <h3>合并行列</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Table } from 'union-design';

const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log('selectedRowKeys: ', selectedRowKeys, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: { name: string; }) => ({
    disabled: record.name === 'Jim Red', // Column configuration not to be checked
    name: record.name,
  }),
  selectedRowKeys: ['4'],
};

const columnsFixed = [
  {
    title: '事项代码',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    fixed: true,
  },
  {
    title: '决策过程',
    dataIndex: 'age',
    key: 'age',
    width: 150,
    fixed: 'right',
  },
  {
    title: '事项名称',
    dataIndex: 'address',
    key: 'address',
  },
];

const data = [
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
];

const demo = () => (
  <div>
    <Table
      rowSelection={rowSelection}
      columns={columnsFixed}
      dataSource={dataSource}
      rowKey="key"
      scroll={{ y: 200, x: 1500 }}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columnsFixed}
            dataSource={dataSource}
            rowKey="key"
            scroll={{ y: 200, x: 1500 }}
          />
        </div>
      )}
      description={(
        <h3>可选择行</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Table } from 'union-design';

const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log('selectedRowKeys: ', selectedRowKeys, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: { name: string; }) => ({
    disabled: record.name === 'Jim Red', // Column configuration not to be checked
    name: record.name,
  }),
  selectedRowKeys: ['4'],
};

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    fixed: true,
    filteredValue: ['Jim', 'Joe'],
    filters: [
      {
        text: 'Jim family',
        value: 'Jim',
      },
      {
        text: 'Joe family',
        value: 'Joe',
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

const demo = () => (
  <div>
    <Table
      rowSelection={rowSelection}
      columns={columns}
      pagination={{ pageSize: 2 }}
      dataSource={data}
      rowKey="key"
      scroll={{ y: 200, x: 1500 }}
    />
  </div>
);
      `}
      rightDemo={(
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
      )}
      description={(
        <h3>可筛选过滤</h3>
      )}
    />
  </div>
);

export default TableDemo;
