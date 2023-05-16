/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { DatePicker, Button } from 'union-design';
import { PickerSize } from 'union-design/lib/date-picker/types';

/* start
<div>
<h3>type=single:时间选择器</h3>
</div>
end */

const DatePickerDemo = () => {
  const [size, setSize] = React.useState<PickerSize>('middle');
  const changeSize = (s: any) => () => {
    setSize(s);
  };

  const commonProps = {
    size,
    onChange: (...p: unknown[]) => console.log(p),
  };

  return (
    <>
      <div style={{ margin: '15px 0' }}>
        <p>选择器大小</p>
        <Button onClick={changeSize('small')}>small</Button>
        <Button onClick={changeSize('middle')}>middle</Button>
        <Button onClick={changeSize('large')}>large</Button>
      </div>
      <div style={{ marginBottom: 15 }}>
        <p>mode=time-full</p>
        <DatePicker mode="time-full" {...commonProps} />
      </div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <p>mode=time-ymd</p>
        <DatePicker mode="time-ymd" {...commonProps} />
      </div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <p style={{ marginRight: 15 }}>mode=time-hms</p>
        <DatePicker mode="time-hms" {...commonProps} />
      </div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <p>mode=year</p>
        <DatePicker mode="year" {...commonProps} />
      </div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <p>mode=month</p>
        <DatePicker mode="month" {...commonProps} />
      </div>
      <div />
      <div style={{ margin: '15px 0 15px 0' }}>
        <p>mode=date</p>
        <DatePicker mode="date" {...commonProps} />
      </div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <p>mode=date-time</p>
        <DatePicker mode="date-time" {...commonProps} />
      </div>
    </>
  );
};

export default DatePickerDemo;
