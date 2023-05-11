import React from 'react';
import { Typography } from 'union-design';
import Codeframe from '../../components/code-frame';

const Demo = () => (
  <div>
    <Codeframe
      rightCode={`
      import React from 'react';
      import { Typography } from 'union-design';
  
      const Demo = () => (
        <Typography level={1}>1级文字：16px 中黑体 85%black——一级标题</Typography>
        <Typography level={2}>2级文字：14px 中黑体 85%black——二级标题</Typography>
        <Typography level={3}>3级文字：14px 常规体 85%black——主要正文</Typography>
        <br />
        <Typography level={4}>4级文字：14px 常规体 65%black——次要正文</Typography>
        <br />
        <Typography level={5}>5级文字：14px 常规体 45%black——不可编辑文字</Typography>
      )
      `}
      rightDemo={(
        <>
          <Typography level={1}>1级文字：16px 中黑体 85%black——一级标题</Typography>
          <Typography level={2}>2级文字：14px 中黑体 85%black——二级标题</Typography>
          <Typography level={3}>3级文字：14px 常规体 85%black——主要正文</Typography>
          <br />
          <Typography level={4}>4级文字：14px 常规体 65%black——次要正文</Typography>
          <br />
          <Typography level={5}>5级文字：14px 常规体 45%black——不可编辑文字</Typography>
        </>
      )}
      description={(
        <h3>文本层级</h3>
      )}
    />
    <Codeframe
      rightCode={`
      import React from 'react';
      import { Typography } from 'union-design';

      const Demo = () => (
        <Typography level={4} underline>underline_4级文字：14px 常规体 65%black——次要正文</Typography>
        <br />
        <Typography level={4} deleteline>deleteline 常规体 65%black——次要正文</Typography>
        <br />
        <Typography level={4} strong>strong 常规体 65%black——次要正文</Typography>
        <br />
    
        <Typography level={4} type="success">success 常规体 65%black——次要正文</Typography>
        <br />
        <Typography level={4} type="warning">warning 常规体 65%black——次要正文</Typography>
        <br />
        <Typography level={4} type="danger">danger 常规体 65%black——次要正文</Typography>
        <br />
        <Typography level={4} type="link" href="https://www.baidu.com">link 常规体 65%black——次要正文</Typography>
      )
      `}
      rightDemo={(
        <>
          <Typography level={4} underline>underline_4级文字：14px 常规体 65%black——次要正文</Typography>
          <br />
          <Typography level={4} deleteline>deleteline 常规体 65%black——次要正文</Typography>
          <br />
          <Typography level={4} strong>strong 常规体 65%black——次要正文</Typography>
          <br />

          <Typography level={4} type="success">success 常规体 65%black——次要正文</Typography>
          <br />
          <Typography level={4} type="warning">warning 常规体 65%black——次要正文</Typography>
          <br />
          <Typography level={4} type="danger">danger 常规体 65%black——次要正文</Typography>
          <br />
          <Typography level={4} type="link" href="https://www.baidu.com">link 常规体 65%black——次要正文</Typography>
        </>
      )}
      description={(
        <h3>文本样式</h3>
      )}
    />
  </div>
);

export default Demo;
