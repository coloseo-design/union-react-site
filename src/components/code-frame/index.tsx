import React from 'react';
import { Tooltip, Icon } from 'union-design';
import Highlight from 'highlight-for-react';
import './index.less';

const CodeFrame = (props: any) => {
  const { rightCode, rightDemo, description } = props;
  const [open, setOpen] = React.useState(false);
  const [copySuccess, setCopySuccess] = React.useState(false);
  const handleCopy = (content: any) => (e: any) => {
    e.preventDefault();
    const textarea = document.createElement('textarea');
    textarea.value = `${content}`;
    document.body.appendChild(textarea);
    textarea.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 1000);
    }
    document.body.removeChild(textarea);
  };

  return (
    <div className="codeFrame">
      <div className="code-left">{description}</div>
      <div className="code-right">
        <div style={{ padding: 24 }}>
          {rightDemo}
        </div>
        <div className="code-border">
          <Tooltip message={copySuccess ? '复制成功' : '复制代码'} trigger="hover">
            <Icon
              type={copySuccess ? 'success' : 'copy'}
              style={{
                fontSize: 20, color: '#ACAFB9', cursor: 'pointer', marginRight: 20,
              }}
              onClick={handleCopy(rightCode)}
            />
          </Tooltip>
          <Tooltip message={open ? '收起代码' : '显示代码'} trigger="hover">
            <Icon type="productd-evelop" style={{ fontSize: 20, color: '#ACAFB9', cursor: 'pointer' }} onClick={() => setOpen(!open)} />
          </Tooltip>
          {open && (
          <div style={{ textAlign: 'left' }}>
            <Highlight>{rightCode}</Highlight>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeFrame;
