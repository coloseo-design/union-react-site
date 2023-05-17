import React, { useState } from 'react';
import { AutoComplete } from 'union-design';

/* start
<div>
<h3>多行的展示</h3>
<p>设置multiInput为true表示展示多行输入框，可通过设置rows 来展示行数</p>
</div>
end */

const { Option } = AutoComplete;
export default () => {
  const inputRef = React.createRef();
  const [data, SetData] = useState<any[]>([]);
  const handleSearch = (value: string) => {
    let result: any[];
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
    }
    SetData(result);
  };
  const children = data.map((email) => <Option key={email} value={email}>{email}</Option>);
  return (
    <AutoComplete
      onSearch={handleSearch}
      dataSource={children}
      placeholder="请输入"
      style={{ width: 256 }}
      multiInput
      ref={inputRef as any}
      rows={3}
    />
  );
};
