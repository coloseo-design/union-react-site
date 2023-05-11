import React, { useState } from 'react';
import { Button, Skeleton } from 'union-design';
import Codeframe from '../../components/code-frame';

const SkeletonDemo = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Codeframe
        rightCode={`
import React, { useState } from 'react';
import { Button, Skeleton } from 'union-design';

const demo = () => {
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
        `}
        rightDemo={(
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
        )}
        description={(
          <h3>骨架屏</h3>
        )}
      />
    </div>
  );
};

export default SkeletonDemo;
