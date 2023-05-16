import React from 'react';
import { Table } from 'union-design';

/* start
<h3>合并行列</h3>
end */

export default () => {
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

  const spanColumns: any = [
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
          props: {} as any,
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
  return (
    <div>
      <Table columns={spanColumns} dataSource={data} rowKey="key" bordered />
    </div>
  );
};
