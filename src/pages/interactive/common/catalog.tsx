/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/require-default-props */
import React from 'react';

interface Props {
  logList?: any;
  color?: string;
}
const Catalog: React.FC<Props> = (props: Props) => {
  const { logList, color } = props;
  return (
    <div className="catalog" style={{ borderColor: color ? color : '#3B5ED9' }}>
      <p>目录</p>
      {(logList || []).map((item: {id: number, name: string }) => (
        <div key={item.id} className="catalog_title" style={{ color: color ? color : '#3B5ED9' }}>{item.name}</div>
      ))}
    </div>
  );
};

export default Catalog;
