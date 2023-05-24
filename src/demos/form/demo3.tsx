import React, { useRef } from 'react';
import {
  Form,
  Input,
  Button,
  Switch,
  Upload,
} from 'union-design';
import type { FormInstance } from 'union-design/lib/form/type';

const { Item: FormItem } = Form;
/* start
  <h3>获取非常规值组件的表单</h3>
  <p>例如Switch组件获取的值是checked，在formItem中必须设置valuePropName为checked， 不然form获取不到Switch的值</p>
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
        <FormItem valuePropName="checked" name="open" label="开关">
          <Switch />
        </FormItem>
        <FormItem
          name="avatar"
          label="头像"
          valuePropName="fileList"
        >
          <Upload.Card
            action="http://192.168.0.102:3000/upload"
            listType="picture-card"
            btnDesc="支持扩展名.jpg"
          />
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
