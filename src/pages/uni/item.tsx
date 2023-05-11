import React from 'react';
import { ItemProps } from './type';
import './assets/styles/item.less';

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const { title, description, type } = props;
  return (
    <div className="spc">
      <img src={require(`./assets/images/${type}.png`)} alt="可扩展" />
      <div className="spc__title">{title}</div>
      <div className="spc__description">{description}</div>
    </div>
  );
};

export default Item;
