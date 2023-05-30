import React from 'react';
import { Upload } from 'union-design';

/* start
<h3>设置上传文件格式</h3>
<p>可以通过设置accept来规范上传文件的格式, accept设值可见input type="file"接收的值<p>
end */
const UploadDemo = () => {
  const common = {
    action: 'http://192.168.0.102:3000/upload',
  };
  return (
    <div>
      <Upload.Button
        {...common}
        accept=".png,.jpeg"
        listType="text"
      />
    </div>
  );
};

export default UploadDemo;
