import React from 'react';
import { Avatar, Icon, Badge } from 'union-design';
import Codeframe from '../../components/code-frame';

const AvatarDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Avatar } from 'union-design';

const demo = () => (
  <div>
    <Avatar>田姬辰</Avatar>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 50 }} />
    <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 50 }} size={50} />
    <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 50 }} size={100} />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Avatar>田姬辰</Avatar>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 50 }} />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 50 }} size={50} />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ marginLeft: 50 }} size={100} />
        </div>
      )}
      description={(
        <h3>基本的</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Avatar, Icon } from 'union-design';

const demo = () => (
  <div>
    <Avatar icon={<Icon type="user-circle" />} />
    <Avatar icon={<Icon type="user-circle" />} style={{ marginLeft: 50 }} size={50} />
    <Avatar icon={<Icon type="user-circle" />} style={{ marginLeft: 50 }} size={100} />
  </div>
);
      `}
      rightDemo={(
        <div>
          <Avatar icon={<Icon type="user-circle" />} />
          <Avatar icon={<Icon type="user-circle" />} style={{ marginLeft: 50 }} size={50} />
          <Avatar icon={<Icon type="user-circle" />} style={{ marginLeft: 50 }} size={100} />
        </div>
      )}
      description={(
        <h3>自定义icon</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Avatar, Badge } from 'union-design';

const demo = () => (
  <div>
    <Badge dot>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </Badge>
    <Badge count={8} style={{ marginLeft: 50 }}>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </Badge>
    <Badge count={88} overflowCount={105} style={{ marginLeft: 50 }}>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </Badge>
    <Badge count={888} overflowCount={999} style={{ marginLeft: 50 }}>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </Badge>
    <Badge count={1000} overflowCount={888} style={{ marginLeft: 50 }}>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </Badge>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Badge dot>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </Badge>
          <Badge count={8} style={{ marginLeft: 50 }}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </Badge>
          <Badge count={88} overflowCount={105} style={{ marginLeft: 50 }}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </Badge>
          <Badge count={888} overflowCount={999} style={{ marginLeft: 50 }}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </Badge>
          <Badge count={1000} overflowCount={888} style={{ marginLeft: 50 }}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </Badge>
        </div>
      )}
      description={(
        <h3>带微标的头像</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Badge, Avatar, Icon } from 'union-design';

const demo = () => (
  <div>
    <Badge dot>
      <Avatar icon={<Icon type="user-circle" />} />
    </Badge>
    <Badge count={8} style={{ marginLeft: 50 }}>
      <Avatar icon={<Icon type="user-circle" />} />
    </Badge>
    <Badge count={88} overflowCount={105} style={{ marginLeft: 50 }}>
      <Avatar icon={<Icon type="user-circle" />} />
    </Badge>
    <Badge count={888} overflowCount={999} style={{ marginLeft: 50 }}>
      <Avatar icon={<Icon type="user-circle" />} />
    </Badge>
    <Badge count={1000} overflowCount={888} style={{ marginLeft: 50 }}>
      <Avatar icon={<Icon type="user-circle" />} />
    </Badge>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Badge dot>
            <Avatar icon={<Icon type="user-circle" />} />
          </Badge>
          <Badge count={8} style={{ marginLeft: 50 }}>
            <Avatar icon={<Icon type="user-circle" />} />
          </Badge>
          <Badge count={88} overflowCount={105} style={{ marginLeft: 50 }}>
            <Avatar icon={<Icon type="user-circle" />} />
          </Badge>
          <Badge count={888} overflowCount={999} style={{ marginLeft: 50 }}>
            <Avatar icon={<Icon type="user-circle" />} />
          </Badge>
          <Badge count={1000} overflowCount={888} style={{ marginLeft: 50 }}>
            <Avatar icon={<Icon type="user-circle" />} />
          </Badge>
        </div>
      )}
      description={(
        <h3>自定义icon，带微标</h3>
      )}
    />
  </div>
);

export default AvatarDemo;
