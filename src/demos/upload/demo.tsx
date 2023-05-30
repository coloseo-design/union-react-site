import React from 'react';
import { Upload } from 'union-design';

const UploadDemo = () => {
  const common = {
    action: 'http://192.168.0.102:3000/upload',
  };
  return (
    <div>
      <Upload.Button
        {...common}
        onRemove={(file) => {
          console.log('==file', file);
          return true;
        }}
        multiple
        listType="text"
        btnDesc="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
      />
    </div>
  );
};

export default UploadDemo;
