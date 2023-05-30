import React from 'react';
import { Upload } from 'union-design';

/* start
<h3>自定义上传列表</h3>
<p>通过设置renderList 自定义上传列表<p>
end */
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
        renderList={(file) => {
          console.log('==file', file);
          if (file.length) {
            return (
              <>
                {(file || []).map((item) => (
                  <div key={item.uid}>
                    {item.thumbUrl ? <img src={item.thumbUrl} alt="" style={{ width: 16, height: 16 }} />
                      : (
                        <>
                          {item.name}
                          -自定义
                        </>
                      )}
                  </div>
                ))}
              </>
            );
          }
          return <div />;
        }}
        multiple
        listType="text"
        btnText="自定义上传列表"
      />
    </div>
  );
};

export default UploadDemo;
