/* eslint-disable max-len */
import React from 'react';
import { Divider } from 'union-design';

/* start
<h3>标题在分割线不同位置</h3>
end */
export default () => (
  <>
    <p>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`}
    </p>
    <Divider orientation="left">左侧标题</Divider>
    <Divider>居中标题</Divider>
    <Divider orientation="right">左侧标题</Divider>
  </>
);
