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
        data.map((item, index) => (
          <div id={item.anchor} key={item.id} className="item">
            <div className={`item-content ${item.src.length && item.description && 'item-float'}`}>
              <div className="item-title">
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
              item.src.map((pic: string) => (
                <img key={pic} src={`${pic}`} style={{ marginTop: index === data.length - 1 ? 8 : 0 }} width={item.description ? '50%' : '100%'} />
              ))
            }
          </div>
        ))
      }
    </>

  );
};

export default List;
