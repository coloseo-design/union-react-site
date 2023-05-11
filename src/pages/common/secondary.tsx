import React, { ReactNode } from 'react';
import './styles/secondary.less';

interface SecondaryProps {
  title: string | ReactNode;
  description: string | ReactNode;
}

const Secondary = (props: SecondaryProps) => {
  const { title, description } = props;
  return (
    <div id="secondary">
      <div id="secondary-title">
        {title}
      </div>
      <div id="secondary-description">
        {description}
      </div>
    </div>
  );
};
export default Secondary;
