/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';

interface ListProps {
  data: any[];
}
const List = (props: ListProps) => {
  const { data } = props;
  return (
    <>
      {
        data.map((item) => (
          <div key={item.id} id={item.anchor} className="button-item">
            <div className="item-title">{item.title}</div>
            <div className="item-description" style={{ lineHeight: 2 }}>
              {item.description}
            </div>
            {
              item.src && <img style={{ marginTop: 16 }} src={item.src} width="100%" />
            }
            <div className="item-children">
              {
                (item.children || []).map((children: any) => (
                  <div className="children" key={children.id}>
                    <div className={`children-left ${children.description && 'children-float'} `}>
                      {
                        children.title && <div style={{ marginBottom: children.description && children.description !== '' ? 8 : 0 }} className="title">{children.title}</div>
                      }
                      <div className="description" style={{ lineHeight: 2 }}>{children.description}</div>
                    </div>
                    <img src={children.src} style={{ marginTop: children.description ? 0 : 16 }} width={children.description ? '505' : '100%'} className={children.description && 'children-img'} />
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  );
};
export default List;
