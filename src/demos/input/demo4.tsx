import React from 'react';
import { Input } from 'union-design';

/* start
<h3>多行输入</h3>
end */
export default () => {
  const { TextArea } = Input;
  return (
    <div>
      <TextArea
        allowClear
        placehollder="多行输入"
        rows={3}
        onChange={({ target: { value } }: any) => { console.log('value', value); }}
        style={{ width: 500 }}
      />
    </div>
  );
};
