import React, { useRef } from 'react';
import {
  Form,
  Input,
  Button,
} from 'union-design';
import type { FormInstance } from 'union-design/lib/form/type';

const { Item: FormItem } = Form;
/* start
  <h3>基本用法</h3>
  <p>基本的表单数据域控制展示，包含布局、初始化、验证、提交。</p>
end */

export default () => {
  const formRef = useRef(null);
  const onSubmit = (values: unknown) => {
    console.log('onSubmit values is', values);
  };

  const onFinishFailed = (failedData: unknown) => {
    console.log('failed data', failedData);
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
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
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
          <Input type="password" />
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{ marginRight: 20 }}>提交</Button>
          <Button
            htmlType="reset"
            onClick={() => {
              if (formRef.current) {
                (formRef?.current as FormInstance)?.reset?.();
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
