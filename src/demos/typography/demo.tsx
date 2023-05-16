import React from 'react';
import { Typography } from 'union-design';

/* start
<h3>文本层级</h3>
end */

const Demo = () => (
  <>
    <Typography level={1}>1级文字：16px 中黑体 85%black——一级标题</Typography>
    <Typography level={2}>2级文字：14px 中黑体 85%black——二级标题</Typography>
    <Typography level={3}>3级文字：14px 常规体 85%black——主要正文</Typography>
    <br />
    <Typography level={4}>4级文字：14px 常规体 65%black——次要正文</Typography>
    <br />
    <Typography level={5}>5级文字：14px 常规体 45%black——不可编辑文字</Typography>
  </>
);

export default Demo;
