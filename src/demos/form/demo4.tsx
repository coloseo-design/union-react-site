import React, { useRef } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  Cascader,
  AutoComplete,
  InputNumber,
  DatePicker,
  TreeSelect,
  Row,
  Col,
} from 'union-design';
import type { FormInstance } from 'union-design/lib/form/type';

/* start
  <h3>栅格式的表单排列方式，常用于数据表格的高级搜索。</h3>
  <p>通过 Row，Col，排列布局表单</p>
end */

const { Item: FormItem } = Form;
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

  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
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
      >
        <Row gutter={[0, 12]}>
          <Col span={12}>
            <FormItem
              name="username"
              label="用户名"
              required
            >
              <Input placeholder="请输入" />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              name="sex"
              label="性别"
            >
              <Select style={{ width: '100%' }} placeholder="请选择">
                <Select.Option value="男">男</Select.Option>
                <Select.Option value="女">女</Select.Option>
              </Select>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              name="address"
              label="地址"
            >
              <Cascader options={options} style={{ width: '100%' }} />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              name="age"
              label="年龄"
            >
              <InputNumber style={{ width: '100%' }} />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              name="birthday"
              label="生日"
            >
              <DatePicker style={{ width: '100%' }} />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              name="email"
              label="邮箱"
            >
              <AutoComplete style={{ width: '100%' }} placeholder="请输入邮箱地址" dataSource={['Burns Bay Road', 'Downing Street', 'Wall Street']} />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              name="department"
              label="选择部门"
              required
            >
              <TreeSelect treeData={data} />
            </FormItem>
          </Col>
          <Col span={12}>
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
          </Col>
        </Row>
      </Form>
    </div>
  );
};
