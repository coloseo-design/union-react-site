import React from 'react';
import { Image, Button } from 'union-design';

/* start
<h3>图片渐进加载</h3>
end */

export default () => {
  const [random, setRandom] = React.useState<number>();
  return (
    <div>
      <Image
        width={200}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        placeholder={(
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
    )}
      />
      <Button
        type="primary"
        onClick={() => {
          setRandom(Date.now());
        }}
      >
        Reload
      </Button>
    </div>
  );
};
