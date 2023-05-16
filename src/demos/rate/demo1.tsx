import React from 'react';
import { Rate } from 'union-design';

/* start
<h3>设置半星</h3>
end */

export default () => (
  <div>
    <Rate defaultValue={1.5} allowHalf onChange={(value) => { console.log('value', value); }} />
  </div>
);
