import React from 'react';
import { Upload } from 'union-design';

/* start
<h3>自定义上传图标</h3>
<p>还可以通过multiple 来设置多选上传文件
end */
const UploadDemo = () => {
  const common = {
    action: 'http://192.168.0.102:3000/upload',
  };
  return (
    <div>
      <Upload.Button
        {...common}
        listType="text"
        btnIcon="cloud-upload-line"
        multiple
      />
    </div>
  );
};

export default UploadDemo;
