import React, { useState } from 'react';
import { Button, Skeleton } from 'union-design';

const SkeletonDemo = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Skeleton />
      <Skeleton avatar={{ shape: 'square' }} active loading={show} paragraph={{ rows: 6 }}>
        <Button onClick={() => {
          setShow(!show);
        }}
        >
          点击我切换
        </Button>
      </Skeleton>
    </div>
  );
};

export default SkeletonDemo;
