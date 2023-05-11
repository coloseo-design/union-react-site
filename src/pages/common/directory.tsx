/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface DirectoryProps {
  data: any[]
}
const Directory = (props: DirectoryProps) => {
  const { data } = props;
  const handleClick = (anchor: string) => {
    const node = document.getElementById(anchor);
    const header = document.getElementsByTagName('header');
    const offseY = node.offsetTop - header[0].clientHeight - 10;
    // document.body.scrollTo(0, offseY);
  };
  return (
    <div className="directory-list">
      <div>目录</div>
      {
        data.map((item) => (
          <div
            onClick={handleClick.bind(null, item.anchor)}
            className="directory-list-item"
            key={item.id}
          >
            {item.title}
          </div>
        ))
      }
    </div>
  );
};
export default Directory;
