import React, { useState } from 'react';
import { AutoComplete } from 'union-design';

/* start
<div>
<h3>基本用法</h3>

</div>
end */

const { Option } = AutoComplete;
export default () => {
  const [data, SetData] = useState([]);
  const handleSearch = (value: string) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
    }
    SetData(result);
  };
  const children = data.map((email) => <Option key={email} value={email}>{email}</Option>);

  return (
    <div>
      <AutoComplete
        placeholder="请输入"
        onSearch={handleSearch}
        dataSource={children}
        style={{ width: 256 }}
      />
    </div>
  );
};
