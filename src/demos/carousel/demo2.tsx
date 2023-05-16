import React from 'react';
import { Carousel } from 'union-design';

/* start
<div>
<h3>自动播放</h3>
</div>
end */

export default () => {
  const beforeChange = (from: number, to: number) => {
    console.log('--from', from, to);
  };
  const style: any = {
    height: 160, width: '100%', backgroundColor: '#364d79', textAlign: 'center', color: '#fff',
  };
  return (
    <div style={{ width: '100%', height: 160 }}>
      <Carousel beforeChange={beforeChange} autoplay dotsShape="circle">
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Carousel>
    </div>
  );
};
