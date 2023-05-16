import React from 'react';
import { Calendar } from 'union-design';

/* start
<div>
<h3>自定义monthFullCellRender</h3>
</div>
end */

export default () => (
  <Calendar
    mode="year"
    monthFullCellRender={(date) => <div>{date.format('YYYY-MM-DD')}</div>}
    onSelect={(date) => console.log('onSelect:', date.format())}
    onChange={(date) => console.log('onChange:', date.format())}
    onPanelChange={(date, mode) => console.log('onPanelChange:', date.format(), mode)}
  />
);
