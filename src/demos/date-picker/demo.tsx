import React from 'react';

import { DatePicker, Button } from 'union-design';

import CodeFrame from '../../components/code-frame';

const DatePickerDemo = () => {
  const [size, setSize] = React.useState('middle');
  const [size1, setSize1] = React.useState('middle');
  const changeSize = (s: any) => () => {
    setSize(s);
  };

  const changeSize1 = (s: any) => () => {
    setSize1(s);
  };

  const commonProps = {
    size,
    onChange: (...p: unknown[]) => console.log(p),
  };
  const commonProps1 = {
    size: size1,
    onChange: (...p: unknown[]) => console.log(p),
  };
  return (
    <div>
      <CodeFrame
        rightCode={`
        import React from 'react';
        import { DatePicker, Button } from 'union-design';

        const Demo = () => {
          const [size, setSize] = React.useState('middle');
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
                <p>mode=time-hms</p>
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
          )
        }
        `}
        rightDemo={(
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
        )}
        description={
          <h3>type=single:时间选择器</h3>
          }
      />
      <CodeFrame
        rightCode={`
        import React from 'react';

        import { DatePicker, Button } from 'union-design';

        const Demo = () => {
          const [size1, setSize1] = React.useState('middle');
          const changeSize1 = (s: any) => () => {
            setSize1(s);
          };
          const commonProps1 = {
            size,
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
          )
        }
        `}
        rightDemo={(
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
        )}
        description={
          <h3>type=range:时间范围选择器</h3>
        }
      />
    </div>
  );
};

export default DatePickerDemo;
