import React from 'react';
import { Card, Icon } from 'union-design';

/* start
<div>
<h3>card 中加入icon</h3>
</div>
end */

export default () => (
  <Card
    title={(
      <span>
        <Icon type="bell" style={{ fontSize: 16, color: '#ACAFB9', paddingRight: 8 }} />
        加Icon
      </span>
)}
    width={492}
    height={222}
  >
    内容
  </Card>
);
