/* eslint-disable max-len */
import React from 'react';
import { Divider } from 'union-design';

/* start
<h3>虚线分割线</h3>
end */
export default () => (
  <>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Divider dashed />
    <p>Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
    <Divider dashed orientation="left">左侧虚线标题</Divider>
    <Divider dashed orientation="right">左侧虚线标题</Divider>
    <Divider dashed>居中虚线标题</Divider>
  </>
);
