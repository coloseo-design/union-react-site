import React from 'react';
import { Input } from 'union-design';

/* start
<h3>搜索框</h3>
end */

export default () => {
  const { Search } = Input;
  return (
    <div>
      <Search onSearch={(value: any) => { console.log('searchValue', value); }} />

    </div>
  );
};
