/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table } from 'union-design';

/* start
<h3>树形结构展示</h3>
<p>表格支持树形数据的展示，当数据中有 children 字段时会自动展示为树形表格，如果不需要或配置为其他字段可以用 childrenColumnName 进行配置。</p>
end */

export default () => {
  const treeData = [
    {
      key: '1',
      id: '1id',
      name: '李四',
      age: 32,
      address: '春熙路xxx号',
      phone: '123xxxxxxx',
      children: [
        {
          key: '11',
          id: '11id',
          name: '李四1223',
          age: 32,
          address: '某某某xxx号',
          phone: '14444xxxxxxx',
        },
        {
          key: '222',
          id: '222id',
          name: '王武',
          age: 32,
          address: '某某某aaaa号',
          phone: '14444xxxxxxx',
          children: [
            {
              key: '33322',
              id: '33322id',
              name: 'hhh',
              age: 32,
              address: '某某某mmm号',
              phone: '14444xxxxxxx',
              children: [
                {
                  key: '1133322',
                  id: '1133322id',
                  name: '哈哈哈哈',
                  age: 32,
                  address: '某某某yyyy号',
                  phone: '14444xxxxxxx',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: '12',
      id: '12id',
      name: '章三',
      age: 32,
      address: '春熙路xxx号',
      phone: '123xxxxxxx',
      children: [
        {
          key: '145',
          id: '145id',
          name: '张三1223',
          age: 32,
          address: '春熙路xxx号',
          phone: '14444xxxxxxx',
        },
      ],
    },
  ];
  const columnsExpand = [
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: 'ope',
      key: 'ope',
      render: (_: any, record: any, index: number, level: number) => <a>{level === 1 ? '编辑' : '删除'}</a>,
    },
  ];
  return (
    <Table
      dataSource={treeData}
      columns={columnsExpand}
      bordered
    />
  );
};
