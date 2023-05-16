import React from 'react';
import { Card } from 'union-design';

/* start
<div>
<h3>超长内容、超长title</h3>
</div>
end */

export default () => (
  <Card title="我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长
  的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title"
  >
    我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长
    的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我
    是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容
  </Card>
);
