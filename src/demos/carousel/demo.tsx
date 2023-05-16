import React from 'react';
import { Carousel } from 'union-design';

const style: any = {
  height: 160, width: '100%', backgroundColor: '#364d79', textAlign: 'center', color: '#fff',
};
const CarouselDemo = () => {
  const beforeChange = (from: number, to: number) => {
    console.log('--from', from, to);
  };
  return (
    <div>
      <Carousel beforeChange={beforeChange}>
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
