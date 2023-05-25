/* eslint-disable max-len */
import React, { useRef } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  AutoComplete,
  DatePicker,
  TreeSelect,
} from 'union-design';
import dayjs from 'dayjs';
import type { FormInstance } from 'union-design/lib/form/type';

const { Item: FormItem } = Form;
/* start
  <h3>设置默认值</h3>
  <p>通过再form上设置initialValues或者在Item上设置initialValue来设置组件的默认值, 如果都设置了则item的initialValue会覆盖form上的initialValue3</p>
end */

export default () => {
  const formRef = useRef(null);
  console.log('formRef', formRef);
  const onSubmit = (values: unknown) => {
    console.log('onSubmit values is', values);
  };

  const onFinishFailed = (failedData: unknown) => {
    console.log('failed data', failedData);
  };

  const data = [
    {
      key: '0',
      title: '集团',
      value: '0',
      children: [
        {
          key: '0-1',
          title: '设计部',
          value: '0-1',
        },
        {
          key: '0-2',
          title: '研发部',
          value: '0-2',
        },
      ],
    },
    {
      key: '1',
      title: '其他部门',
      value: '1',
    },

  ];

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  return (
    <div>
      <Form
        {...layout}
        name="test"
        ref={formRef}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        style={{ padding: 20 }}
        initialValues={{
          username: '张三',
          sex: '男',
          age: 26,
          birthday: dayjs('1996-12-24'),
          email: '12134dw@163.com',
          department: '1',
        }}
      >
        <FormItem
          name="username"
          label="用户名"
          required
        >
          <Input placeholder="请输入" />
        </FormItem>
        <FormItem
          name="sex"
          label="性别"
        >
          <Select style={{ width: '100%' }} placeholder="请选择">
            <Select.Option value="男">男</Select.Option>
            <Select.Option value="女">女</Select.Option>
          </Select>
        </FormItem>
        <FormItem
          name="age"
          label="年龄"
        >
          <InputNumber style={{ width: '100%' }} />
        </FormItem>
        <FormItem
          name="birthday"
          label="生日"
        >
          <DatePicker style={{ width: '100%' }} />
        </FormItem>
        <FormItem
          name="email"
          label="邮箱"
        >
          <AutoComplete style={{ width: '100%' }} placeholder="请输入邮箱地址" dataSource={['12134dw@163.com', 'components@qq.com', 'wdewdnw@bao.com']} />
        </FormItem>
        <FormItem
          name="department"
          label="选择部门"
          required
          initialValue="0"
        >
          <TreeSelect treeData={data} />
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{ marginRight: 20 }}>提交</Button>
          <Button
            htmlType="reset"
            onClick={() => {
              formRef.current && (formRef.current as FormInstance).reset?.();
            }}
          >
            重置
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};
