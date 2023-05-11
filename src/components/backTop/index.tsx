/* eslint-disable max-len */
import React, { useEffect, useState, CSSProperties } from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from 'union-design';

import './index.less';

export default (props: { target?: () => HTMLElement; visibilityHeight?: number; style?: CSSProperties }) => {
  const {
    target, visibilityHeight = 400, ...rest
  } = props;
  const [scrollTop, $scrollTop] = useState(0);
  const history = useHistory();

  useEffect(() => {
    $scrollTop(0);
    const container = target ? target() : window;
    container?.addEventListener('scroll', onScroll);
    return () => {
      container?.removeEventListener('scroll', onScroll);
    };
  }, [history.location.pathname]);

  const onScroll = (e) => {
    const newScrollTop = target ? e.target.scrollTop : document.documentElement.scrollTop;
    $scrollTop(newScrollTop);
  };

  const onClick = () => {
    const container = target ? target() : window;
    container.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <span
      {...rest}
      onClick={onClick}
      className="backTop"
    >
      {scrollTop >= visibilityHeight && <Icon type="top" />}
    </span>
  );
};
