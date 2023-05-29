import React, { useRef } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  Cascader,
  AutoComplete,
  Checkbox,
  InputNumber,
  Radio,
  Rate,
  Slider,
  Upload,
  DatePicker,
  Switch,
  TreeSelect,
} from 'union-design';
import type { FormValues, FormInstance } from 'union-design/lib/form/type';

/* start
<h3>在form中使用union-design的输入组件</h3>
<p>使用onFinishFailed方法获取失败的数据字段，在onFinish方法中获取提交的所有字段。<p>
<p>onValuesChange方法在formItem下面组件value有变化时触发可以实时获取当前变化的字段和所有的字段值</p>
end */

const { Item: FormItem } = Form;
export default () => {
  const formRef = useRef(null);
  const onSubmit = (values: unknown) => {
    console.log('onSubmit values is', values);
  };

  const onFinishFailed = (failedData: unknown) => {
    console.log('failed data', failedData);
  };

  const onValuesChange = (changedValues: FormValues, allValues: FormValues) => {
    console.log('==?changedValues>', changedValues, allValues);
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
        onValuesChange={onValuesChange}
        style={{ padding: 20 }}
      >
        <FormItem
          name="username"
          label="用户名"
          validateFirst
          rules={[
            { required: true, message: '请输入用户名' },
            {
              validator: (rule, value) => {
                if (!value || value.length < 2) {
                  return Promise.reject(new Error('长度必须大于2'));
                }
                return null;
              },
            },
          ]}
        >
          <Input placeholder="请输入" />
        </FormItem>
        <FormItem
          name="textarea"
          label="多行输入"
          validateFirst
          initialValue="联通设计系统"
          rules={[
            { required: true, message: '请输入用户名' },
            {
              validator: (rule, value) => {
                if (!value || value.length < 2) {
                  return Promise.reject(new Error('长度必须大于2'));
                }
                return null;
              },
            },
          ]}
        >
          <Input.TextArea placeholder="请输入" style={{ width: '100%' }} />
        </FormItem>
        <FormItem
          name="sex"
          label="性别"
          validateFirst
          rules={[
            { required: true, message: '请选择性别' },
          ]}
        >
          <Select style={{ width: '100%' }} placeholder="请选择">
            <Select.Option value="男">男</Select.Option>
            <Select.Option value="女">女</Select.Option>
          </Select>
        </FormItem>

        <FormItem
          name="address"
          label="地址"
          validateFirst={false}
          rules={[
            { required: true, message: '请选择地址' },
          ]}
        >
          <Cascader options={options} style={{ width: '100%' }} />
        </FormItem>
        <FormItem
          name="age"
          label="年龄"
          validateFirst
          rules={[
            { required: true, message: '请填写年龄' },
          ]}
        >
          <InputNumber style={{ width: '100%' }} />
        </FormItem>
        <FormItem
          name="birthday"
          label="生日"
          validateFirst
          rules={[
            { required: true, message: '请填写年龄' },
          ]}
        >
          <DatePicker style={{ width: '100%' }} />
        </FormItem>
        <FormItem
          name="email"
          label="邮箱"
          validateFirst
          rules={[
            { required: true, message: '请填写年龄' },
          ]}
        >
          <AutoComplete style={{ width: '100%' }} placeholder="请输入邮箱地址" dataSource={['Burns Bay Road', 'Downing Street', 'Wall Street']} />
        </FormItem>
        <FormItem
          name="read"
          label="是否关联"
          validateFirst
          initialValue
          valuePropName="checked"
          rules={[
            { required: true, message: '请填写年龄' },
          ]}
        >
          <Switch type="default" />
        </FormItem>
        <FormItem
          name="avatar"
          label="头像"
          valuePropName="fileList"
        >
          <Upload.Card
            listType="picture-card"
            btnDesc="支持扩展名.jpg"
          />
        </FormItem>
        <FormItem
          name="department"
          label="部门"
          rules={[
            { required: true, message: '请填写部门' },
          ]}
        >
          <TreeSelect treeData={data} />
        </FormItem>
        <FormItem
          name="checkbox"
          label="是否满意"
          rules={[
            { required: true, message: '请选择' },
          ]}
        >
          <Checkbox.Group onChange={(v) => { console.log('==vv', v); }}>
            <Checkbox value="1">hello</Checkbox>
            <Checkbox value="2">hello2</Checkbox>
          </Checkbox.Group>
        </FormItem>
        <FormItem
          name="radio"
          label="单选框"
          rules={[
            { required: true, message: '请填写年龄' },
          ]}
          initialValue="B"
        >
          <Radio.Group>
            <Radio value="A">A</Radio>
            <Radio value="B">B</Radio>
            <Radio value="C">C</Radio>
            <Radio value="D">D</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem
          name="test3"
          label="评分"
          initialValue={3}
        >
          <Rate onChange={(e) => console.log('e', e)} />
        </FormItem>
        <FormItem
          name="test4"
          label="评分"
        >
          <Slider />
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{ marginRight: 20 }}>提交</Button>
          <Button
            htmlType="reset"
            onClick={() => {
              if (formRef.current) {
                (formRef.current as FormInstance).reset();
              }
            }}
          >
            重置
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};
