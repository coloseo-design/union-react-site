/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Select } from 'union-design';

/* start
<h3>多选框</h3>
end */

export default () => {
  const { Option } = Select;
  return (
    <div>
      <p>多选默认展示样式</p>
      <Select
        onChange={(val: any) => { console.log('--- value ', val); }}
        placeholder="请选择选项"
        style={{ width: 220 }}
        type="multiple"
        defaultValue={['2']}
      >
        <Option key="1" value="1">这是一个很长的很长的选项</Option>
        <Option key="2" value="2">选项2</Option>
        <Option disabled key="3" value="3">选项3</Option>
        <Option key="4" value="4">选项4</Option>
        <Option key="5" value="5">选项5</Option>
        <Option key="6" value="6">选项6</Option>
      </Select>
      <p style={{ marginTop: 24 }}>设置最多展示两个标签tag</p>
      <Select
        onChange={(val: any) => { console.log('--- value ', val); }}
        placeholder="请选择选项"
        style={{ width: 220 }}
        type="multiple"
        defaultValue={['1']}
        maxTagCount={2}
      >
        <Option key="1" value="1">选项1</Option>
        <Option key="2" value="2">选项2</Option>
        <Option disabled key="3" value="3">选项3</Option>
        <Option key="4" value="4">选项4</Option>
        <Option key="5" value="5">选项5</Option>
        <Option key="6" value="6">选项6</Option>
      </Select>
    </div>
  );
};
