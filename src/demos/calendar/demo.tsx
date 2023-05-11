import React from 'react';
import { Calendar } from 'union-design';
import Codeframe from '../../components/code-frame';

const CalendarDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Calendar } from 'union-design';

const demo = () => (
  <div>
    <Calendar
      mode="year"
      onSelect={(date) => console.log('onSelect:', date.format())}
      onChange={(date) => console.log('onChange:', date.format())}
      onPanelChange={(date, mode) => console.log('onPanelChange:', date.format(), mode)}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Calendar
            mode="year"
            onSelect={(date) => console.log('onSelect:', date.format())}
            onChange={(date) => console.log('onChange:', date.format())}
            onPanelChange={(date, mode) => console.log('onPanelChange:', date.format(), mode)}
          />
        </div>
      )}
      description={(
        <h3>Base</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Calendar } from 'union-design';

const demo = () => (
  <div>
    <Calendar
      mode="year"
      monthCellRender={(date) => <div>{date.format('YYYY-MM-DD')}</div>}
      onSelect={(date) => console.log('onSelect:', date.format())}
      onChange={(date) => console.log('onChange:', date.format())}
      onPanelChange={(date, mode) => console.log('onPanelChange:', date.format(), mode)}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Calendar
            mode="year"
            monthCellRender={(date) => <div>{date.format('YYYY-MM-DD')}</div>}
            onSelect={(date) => console.log('onSelect:', date.format())}
            onChange={(date) => console.log('onChange:', date.format())}
            onPanelChange={(date, mode) => console.log('onPanelChange:', date.format(), mode)}
          />
        </div>
      )}
      description={(
        <h3>monthCellRender</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Calendar } from 'union-design';

const demo = () => (
  <div>
    <Calendar
      mode="year"
      monthFullCellRender={(date) => <div>{date.format('YYYY-MM-DD')}</div>}
      onSelect={(date) => console.log('onSelect:', date.format())}
      onChange={(date) => console.log('onChange:', date.format())}
      onPanelChange={(date, mode) => console.log('onPanelChange:', date.format(), mode)}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Calendar
            mode="year"
            monthFullCellRender={(date) => <div>{date.format('YYYY-MM-DD')}</div>}
            onSelect={(date) => console.log('onSelect:', date.format())}
            onChange={(date) => console.log('onChange:', date.format())}
            onPanelChange={(date, mode) => console.log('onPanelChange:', date.format(), mode)}
          />
        </div>
      )}
      description={(
        <h3>monthFullCellRender</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Calendar } from 'union-design';

const demo = () => (
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
      `}
      rightDemo={(
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
      )}
      description={(
        <h3>dateCellRender</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Calendar } from 'union-design';

const demo = () => (
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
      `}
      rightDemo={(
        <div>
          <Calendar
            mode="year"
            dateFullCellRender={(date) => <span>{date.format('@DD')}</span>}
            onSelect={(date) => console.log('onSelect:', date.format())}
            onChange={(date) => console.log('onChange:', date.format())}
            onPanelChange={(date, mode) => console.log('onPanelChange:', date.format(), mode)}
          />
        </div>
      )}
      description={(
        <h3>dateFullCellRender</h3>
      )}
    />
  </div>
);

export default CalendarDemo;
