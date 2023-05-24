import React, { useRef } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
} from 'union-design';
import type { FormInstance } from 'union-design/lib/form/type';

/* start
  <h3>修改或者获取form表单的值</h3>
  <p>通过ref获取 getFieldsValue或者getFieldsValue方法来修改或者设置表单值</p>
end */
const { Item: FormItem } = Form;
const { Option } = Select;
export default () => {
  const formRef = useRef(null);

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

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  };

  return (
    <div>
      <Form
        {...layout}
        name="test"
        ref={formRef}
        style={{ padding: 20 }}
      >
        <FormItem
          name="username"
          label="用户名"
          required
        >
          <Input placeholder="请输入" />
        </FormItem>
        <FormItem name="password" label="密码" required>
          <Input type="password" placeholder="请输入密码" />
        </FormItem>
        <FormItem name="sex" label="性别">
          <Select>
            <Option value="woman">女</Option>
            <Option value="man">男</Option>
          </Select>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button
            type="primary"
            style={{ marginRight: 20 }}
            onClick={() => {
              if (formRef.current) {
                (formRef.current as FormInstance).setFieldsValue({
                  username: '哈哈哈',
                  password: '12345',
                  sex: 'man',
                });
              }
            }}
          >
            修改值
          </Button>
          <Button
            htmlType="reset"
            onClick={() => {
              if (formRef.current) {
                const sex = (formRef?.current as FormInstance)?.getFieldValue?.('sex');
                const allValue = (formRef?.current as FormInstance)?.getFieldsValue?.(true);
                console.log('==sex', sex, allValue);
              }
            }}
          >
            获取值
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};
