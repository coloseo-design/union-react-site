import React from 'react';
import { Carousel } from 'union-design';
import Codeframe from '../../components/code-frame';

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
const style = {
  height: 160, width: '100%', backgroundColor: '#364d79', textAlign: 'center', color: '#fff',
};
const CarouselDemo = () => {
  const beforeChange = (from: number, to: number) => {
    console.log('--from', from, to);
  };
  return (
    <div>
      <Codeframe
        rightCode={`
import React from 'react';
import { Carousel } from 'union-design';

const beforeChange = (from: number, to: number) => {
  console.log('--from', from, to);
};

const demo = () => (
  <div>
    <Carousel beforeChange={beforeChange}>
      <div style={style}>1</div>
      <div style={style}>2</div>
      <div style={style}>3</div>
      <div style={style}>4</div>
    </Carousel>
  </div>
);
      `}
        rightDemo={(
          <div>
            <Carousel beforeChange={beforeChange}>
              <div style={style}>1</div>
              <div style={style}>2</div>
              <div style={style}>3</div>
              <div style={style}>4</div>
            </Carousel>
          </div>
      )}
        description={(
          <h3>基本的</h3>
      )}
      />

      <Codeframe
        rightCode={`
    import React from 'react';
    import { Carousel } from 'union-design';

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

    const demo = () => (
      <div>
        <Carousel dotPosition="bottom" effect="fade">
          {imgList.map((item) => (
            <img src={item.src} alt="" key={item.id} />
          ))}
        </Carousel>
      </div>
    );
      `}
        rightDemo={(
          <div>
            <Carousel dotPosition="bottom" effect="fade">
              {imgList.map((item) => (
                <img src={item.src} alt="" key={item.id} />
              ))}
            </Carousel>
          </div>
      )}
        description={(
          <h3>切换效果为渐显</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Carousel } from 'union-design';

  const demo = () => (
    <div style={{ width: 320, height: 160 }}>
      <Carousel beforeChange={beforeChange} autoplay dotsShape="circle">
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
      </Carousel>
    </div>
  );
      `}
        rightDemo={(
          <div style={{ width: '100%', height: 160 }}>
            <Carousel beforeChange={beforeChange} autoplay dotsShape="circle">
              <div style={style}>1</div>
              <div style={style}>2</div>
              <div style={style}>3</div>
              <div style={style}>4</div>
            </Carousel>
          </div>
      )}
        description={(
          <h3>自动播放</h3>
      )}
      />
    </div>
  );
};

export default CarouselDemo;
