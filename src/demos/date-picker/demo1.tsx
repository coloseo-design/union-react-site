/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { DatePicker, Button } from 'union-design';
import { PickerSize } from 'union-design/lib/date-picker/types';
/* start
<div>
<h3>type=range:时间范围选择器</h3>
</div>
end */

export default () => {
  const [size1, setSize1] = React.useState<PickerSize>('middle');

  const changeSize1 = (s: any) => () => {
    setSize1(s);
  };
  const commonProps1 = {
    size: size1,
    onChange: (...p: unknown[]) => console.log(p),
  };
  return (
    <>
      <div style={{ margin: '15px 0' }}>
        <p>选择器大小</p>
        <Button onClick={changeSize1('small')}>small</Button>
        <Button onClick={changeSize1('middle')}>middle</Button>
        <Button onClick={changeSize1('large')}>large</Button>
      </div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <p>mode=time-full-range</p>
        <DatePicker mode="time-full" type="range" {...commonProps1} />
      </div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <p>mode=time-ymd</p>
        <DatePicker mode="time-ymd" type="range" {...commonProps1} />
      </div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <p>mode=time-hms</p>
        <DatePicker mode="time-hms" type="range" {...commonProps1} />
      </div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <p>mode=year</p>
        <DatePicker mode="year" type="range" {...commonProps1} />
      </div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <p>mode=month</p>
        <DatePicker mode="month" type="range" {...commonProps1} />
      </div>
      <div />
      <div style={{ margin: '15px 0 15px 0' }}>
        <p>mode=date</p>
        <DatePicker mode="date" type="range" {...commonProps1} />
      </div>
    </>
  );
};
