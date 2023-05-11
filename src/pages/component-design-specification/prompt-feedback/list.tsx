/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-tag-spacing */
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
          <div key={item.id} id={item.anchor} className="item">
            <div className="item-title">
              {item.title}
            </div>
            {item.description
              && (
                <div className="item-description">
                  {item.description}
                </div>
              )}
            {
              (item.children || []).map((c: any) => (
                <div key={c.id} className="children" >
                  <div className="children-title" style={{ paddingTop: c.title === '对话框样式' ? 8 : undefined }}>{c.title}</div>
                  <img src={c.src} width="100%" style={{ marginTop: 16 }} />
                </div>
              ))
            }
            {
              item.src
              && <img src={item.src} width="100%" style={{ marginTop: 16 }} />
            }
          </div>
        ))
      }
    </>
  );
};
export default List;
