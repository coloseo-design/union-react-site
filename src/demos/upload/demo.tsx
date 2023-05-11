import React from 'react';
import { Upload } from 'union-design';
import Codeframe from '../../components/code-frame';

const UploadDemo = () => {
  const common = {
    action: 'http://192.168.0.102:3000/upload',
  };
  return (
    <div>
      <Codeframe
        rightCode={`
import React from 'react';
import { Upload } from 'union-design';

const common = {
  action: 'http://192.168.0.102:3000/upload',
};

const demo = () => (
  <div>
    <Upload.Button
      {...common}
      listType="text"
      btnDesc="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
    />
  </div>
);
      `}
        rightDemo={(
          <div>
            <Upload.Button
              {...common}
              listType="text"
              btnDesc="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
            />
          </div>
      )}
        description={(
          <h3>listType=&quot;text&quot;</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Upload } from 'union-design';

const common = {
  action: 'http://192.168.0.102:3000/upload',
};

const demo = () => (
  <div>
    <Upload.Card
      {...common}
      listType="picture-card"
      btnDesc="支持扩展名.jpg"
    />
  </div>
);
      `}
        rightDemo={(
          <div>
            <Upload.Card
              {...common}
              listType="picture-card"
              btnDesc="支持扩展名.jpg"
            />
          </div>
      )}
        description={(
          <h3>listType=&quot;picture-card&quot;</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Upload } from 'union-design';

const common = {
  action: 'http://192.168.0.102:3000/upload',
};

const demo = () => (
  <div>
    <Upload.Drag
      {...common}
      listType="text"
      btnDesc="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
    />
  </div>
);
      `}
        rightDemo={(
          <div>
            <Upload.Drag
              {...common}
              listType="text"
              btnDesc="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
            />
          </div>
      )}
        description={(
          <h3>listType=&quot;picture&quot;</h3>
      )}
      />
    </div>
  );
};

export default UploadDemo;
