import React from 'react';
import { Typography } from 'union-design';

/* start
<h3>文本样式</h3>
end */

export default () => (
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
);
