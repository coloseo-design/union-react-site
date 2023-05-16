import React from 'react';
import { Notification, Button } from 'union-design';

/* start
<h3>有 Btn 的 notification</h3>
end */

export default () => (
  <div>
    <Button
      type="primary"
      onClick={() => Notification.warning({
        message: 'warning',
        description: '这是一条警告消息，会主动消失。',
        btn: (
          <div style={{
            marginTop: 10, display: 'flex', flexFlow: 'row nowrap', justifyContent: 'flex-end',
          }}
          >
            <Button size="small">
              取消
            </Button>
            <div style={{ width: 20 }} />
            <Button size="small" type="primary">
              确定
            </Button>
          </div>
        ),
      })}
    >
      warning
    </Button>
  </div>
);
