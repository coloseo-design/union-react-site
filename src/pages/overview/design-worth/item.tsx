import React from 'react';
import Typography from '../../../components/typography';

interface ItemProps {
  data: any[]
}
const content = {
  paddingRight: 60,
  fontSize: 14,
  color: 'rgba(0, 0, 0, 0.85)',
  fontWeight: 400,
};
const typography = {
  paddingBottom: 40,
  width: '100%',
};
const typographyTitle = { color: '#D1373D', fontSize: 24 };
const Item = (props: ItemProps) => {
  const { data } = props;
  return (
    <>
      {
        data.map((item, index) => (
          <Typography
            id={item.anchor}
            key={item.id}
            style={{ ...typography, paddingBottom: index !== (data.length - 1) ? 40 : 0 }}
            descriptions={[
              <div style={content} key="key">
                {item.description}
              </div>,
            ]}
            title={<div style={typographyTitle}>{item.title}</div>}
            pic={<img src={item.src} alt="" />}
          />
        ))
      }
    </>
  );
};
export default Item;
