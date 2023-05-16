import React from 'react';
import { Carousel } from 'union-design';

/* start
<div>
<h3>切换效果为渐显r</h3>
</div>
end */

export default () => {
  const image = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  const imgList = [
    {
      id: '1', src: image,
    },
    {
      id: '2', src: image,
    },
    {
      id: '3', src: image,
    },
    {
      id: '4', src: image,
    },
    {
      id: '5', src: image,
    },
    {
      id: '6', src: image,
    },
  ];
  return (
    <Carousel dotPosition="bottom" effect="fade">
      {imgList.map((item) => (
        <img src={item.src} alt="" key={item.id} />
      ))}
    </Carousel>
  );
};
