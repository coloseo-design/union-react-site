import React from 'react';
import { Rate } from 'union-design';

const RateDemo = () => (
  <div>
    <Rate defaultValue={1} onChange={(value) => { console.log('value', value); }} />
  </div>
);

export default RateDemo;
