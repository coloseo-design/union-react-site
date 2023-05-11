/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

interface ListProps {
  data: any[];
}
const List = (props: ListProps) => {
  const { data } = props;
  return (
    <>
      {
        data.map((item) => (
          <div id={item.anchor} key={item.id} className="item">
            <div className={item.src.length === 1 && 'item-left'}>
              <div className={`item-title ${item.src.length === 2 && 'item-title-img'}`}>
                {item.title}
              </div>
              {
                item.description
                && (
                  <div className="item-description" style={{ lineHeight: 2 }}>
                    {item.description}
                  </div>
                )
              }
            </div>
            {
              (item.src || []).map((pic: string, index: number) => (
                <img key={item} className={item.src.length === 1 ? 'item-img' : 'item-imgs'} src={pic} />
              ))
            }

          </div>
        ))

      }
    </>

  );
};

export default List;
