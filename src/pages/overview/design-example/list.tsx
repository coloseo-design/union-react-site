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
          <div className="list-item" style={{ marginBottom: index === data.length - 1 ? 0 : 40 }} id={item.anchor} key={item.id}>
            <div>{item.title}</div>
            <img style={{ width: 540 }} src={item.src} />
          </div>
        ))
      }
    </>
  );
};
export default List;
