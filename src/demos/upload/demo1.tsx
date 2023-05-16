import React from 'react';
import { Upload } from 'union-design';

/* start
<h3>listType=picture-card</h3>
end */

export default () => {
  const common = {
    action: 'http://192.168.0.102:3000/upload',
  };
  return (
    <div>
      <Upload.Card
        {...common}
        listType="picture-card"
        btnDesc="支持扩展名.jpg"
      />
    </div>
  );
};
