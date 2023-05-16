import React from 'react';
import { Calendar } from 'union-design';

/* start
<div>
<h3>自定义dateFullCellRender</h3>
</div>
end */

export default () => (
  <div>
    <Calendar
      mode="year"
      dateFullCellRender={(date) => <span>{date.format('@DD')}</span>}
      onSelect={(date) => console.log('onSelect:', date.format())}
      onChange={(date) => console.log('onChange:', date.format())}
      onPanelChange={(date, mode) => console.log('onPanelChange:', date.format(), mode)}
    />
  </div>
);
