import React from 'react';
import { Calendar } from 'union-design';

const CalendarDemo = () => (
  <div>
    <Calendar
      mode="year"
      onSelect={(date) => console.log('onSelect:', date.format())}
      onChange={(date) => console.log('onChange:', date.format())}
      onPanelChange={(date, mode) => console.log('onPanelChange:', date.format(), mode)}
    />
  </div>
);

export default CalendarDemo;
