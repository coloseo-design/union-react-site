/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Select } from 'union-design';

/* start
<h3>可搜索选择框</h3>
end */

export default () => {
  const { Option } = Select;
  return (
    <div>
      <Select
        onSelect={
  (value) => {
    console.log('--- value ', value);
  }
}
        placeholder="请选择选项"
        style={{ width: 220 }}
        type="search"
        onSearch={(val) => { console.log('--- val ', val); }}
      >
        <Option key="1" value="1">选项111</Option>
        <Option key="2" value="2">选项1222</Option>
        <Option disabled key="3" value="3">选项33333</Option>
      </Select>
    </div>
  );
};
