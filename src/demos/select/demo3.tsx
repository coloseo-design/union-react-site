/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Select } from 'union-design';

/* start
<h3>下拉菜单跟随滚动</h3>
<p>select下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。</p>
end */

export default () => {
  const { Option } = Select;
  return (
    <div id="select-parent" style={{ position: 'relative' }}>
      <Select
        placeholder="请选择选项"
        style={{ width: 220 }}
        getPopupContainer={() => document.querySelector('#select-parent')}
      >
        <Option key="1" value="1">选项111</Option>
        <Option key="2" value="2">选项1222</Option>
        <Option disabled key="3" value="3">选项33333</Option>
      </Select>
    </div>
  );
};
