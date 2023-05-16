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
      <Select
        onChange={
  (val: any) => {
    console.log('--- value ', val);
  }
}
        placeholder="请选择选项"
        style={{ width: 220 }}
        type="multiple"
        defaultValue={['1']}
        maxTagCount={2}
      >
        <Option key="1" value="1">这是一个很长的很长的选项111</Option>
        <Option key="2" value="2">选项1222</Option>
        <Option disabled key="3" value="3">选项33333</Option>
        <Option key="4" value="4">选项1rt2</Option>
        <Option key="5" value="5">选项12try22</Option>
        <Option key="6" value="6">选项12yhr22</Option>
      </Select>
    </div>
  );
};
