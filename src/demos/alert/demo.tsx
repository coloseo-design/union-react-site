import React from 'react';
import { Alert } from 'union-design';

/* start
<div>
<h3>警告提示</h3>

</div>
end */

const handleclose = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
  console.log('--e', e);
};

const AlertDemo = () => (
  <div>
    <Alert
      message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
      description="你所提交的信息已经审核通过，请及时跟进申请状况。如有问题，请联系审核人员或在线客服。"
      closable
      showIcon
      onClose={handleclose}
    />
    <br />
    <br />
    <Alert
      type="info"
      message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
      description="你所提交的信息已经审核通过，请及时跟进申请状况。如有问题，请联系审核人员或在线客服。"
      closable
      showIcon
    />
    <br />
    <br />
    <Alert
      type="warning"
      message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
      description="你所提交的信息已经审核通过，请及时跟进申请状况。如有问题，请联系审核人员或在线客服。"
      closable
      showIcon
    />
    <br />
    <br />
    <Alert
      type="error"
      message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
      description="你所提交的信息已经审核通过，请及时跟进申请状况。如有问题，请联系审核人员或在线客服。"
      closable
      showIcon
    />
    <br />
    <br />
    <Alert
      type="info"
      message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
      description="你所提交的信息已经审核通过，请及时跟进申请状况。如有问题，请联系审核人员或在线客服。"
      closeText="查看详情"
    />
    <br />
    <br />
    <Alert
      message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
      showIcon
    />
    <br />
    <br />
    <Alert
      message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
      type="error"
      showIcon
    />
    <br />
    <br />
    <Alert
      message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
      type="warning"
      showIcon
      banner
    />
    <br />
    <br />
    <Alert
      message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
      type="error"
      showIcon
      banner
      closable
    />
  </div>

);

export default AlertDemo;
