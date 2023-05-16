import React, { useRef } from 'react';
import { Input } from 'union-design';

const InputDemo = () => {
  const ref = useRef();
  console.log('ref', ref);
  return (
    <div>
      <Input
        allowClear
        placeholder="基本输入"
        onChange={({ target: { value } }: any) => { console.log('value', value); }}
        onSearch={(value: string) => { console.log('searchValue', value); }}
        ref={ref}
        style={{ width: 256 }}
      />
    </div>
  );
};

export default InputDemo;
