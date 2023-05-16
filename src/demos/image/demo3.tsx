import React from 'react';
import { Image } from 'union-design';

/* start
<h3>多张图片预览</h3>
end */

export default () => (
  <div>
    <Image.PreviewGroup>
      <Image
        width={200}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Image
        width={200}
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
    </Image.PreviewGroup>
  </div>
);
