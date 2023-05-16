import React from 'react';
import { Upload } from 'union-design';

/* start
<h3>listType=text</h3>
end */

export default () => {
  const common = {
    action: 'http://192.168.0.102:3000/upload',
  };
  return (
    <div>
      <div>
        <Upload.Drag
          {...common}
          listType="text"
          btnDesc="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
        />
      </div>
    </div>
  );
};
