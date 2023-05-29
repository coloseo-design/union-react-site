import React, { useRef, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
} from 'union-design';
import type { FormInstance } from 'union-design/lib/form/type';

const { Item: FormItem } = Form;
/* start
  <h3>Form 表单布局</h3>
  <p>表单的两种布局, 通过设置 colon 表示是否展示必选符号, 可以通过labelStyle来自定义label样式</p>
end */

export default () => {
  const formRef = useRef(null);
  const [type, $type] = useState('Horizontal');
  const [labelAlign, $labelAlign] = useState<'right' | 'left' | undefined>('right');
  const [showColon, $showColon] = useState('1');
  const [layout, $layout] = useState({
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  });
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

  return (
    <div>
      <Radio.Group
        value={type}
        onChange={(e) => {
          $type(e.target.value);
          if (e.target.value === 'Vertical') {
            $layout({
              labelCol: { span: 24 },
              wrapperCol: { span: 24 },
            });
            $labelAlign('left');
          } else {
            $layout({
              labelCol: { span: 4 },
              wrapperCol: { span: 18 },
            });
            $labelAlign('right');
          }
        }}
        options={['Horizontal', 'Vertical']}
      />
      <Radio.Group
        value={showColon}
        style={{ marginTop: 24 }}
        onChange={(e) => $showColon(e.target.value)}
        options={[{ value: '1', label: '展示冒号' }, { value: '2', label: '不展示冒号' }]}
      />
      <Form
        {...layout}
        name="test"
        ref={formRef}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        style={{ padding: 20 }}
        labelAlign={labelAlign}
        labelStyle={{ lineHeight: '32px' }}
      >
        <FormItem
          name="username"
          label="用户名"
          required
          colon={showColon === '1'}
        >
          <Input placeholder="请输入" />
        </FormItem>
        <FormItem
          name="password"
          label="密码"
          required
          colon={showColon === '1'}
        >
          <Input type="password" placeholder="请输入密码" />
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
