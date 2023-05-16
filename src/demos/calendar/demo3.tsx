import React from 'react';
import { Calendar } from 'union-design';

/* start
<div>
<h3>自定义dateCellRender</h3>
</div>
end */

export default () => (
  <div>
    <Calendar
      mode="year"
      dateCellRender={() => (
        <div style={{
          position: 'absolute',
          top: 1,
          right: 11,
          width: 4,
          height: 4,
          backgroundColor: '#B30000',
          borderRadius: '50%',
        }}
        />
      )}
      onSelect={(date) => console.log('onSelect:', date.format())}
      onChange={(date) => console.log('onChange:', date.format())}
      onPanelChange={(date, mode) => console.log('onPanelChange:', date.format(), mode)}
    />
  </div>
);
