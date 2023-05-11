import React, { useState } from 'react';
import { Tag, Icon } from 'union-design';
import Codeframe from '../../components/code-frame';

const TagDemo = () => {
  const [tags, setTags] = useState([1, 2, 3]);

  const onClose = (tag: number) => () => {
    const currentIndex = tags.indexOf(tag);
    tags.splice(currentIndex, 1);
    setTags([...tags]);
  };

  const handleAdd = () => {
    const last = tags[tags.length - 1];
    tags.push(last + 1);
    setTags([...tags]);
  };

  const EditableTagGroup = () => (
    <div>
      {tags.map((tag) => <Tag key={tag} closable onClose={onClose(tag)}>{`标签${tag}`}</Tag>)}
      <Tag style={{ background: '#fff', borderStyle: 'dashed' }} icon={<Icon type="add" />} onClick={handleAdd}>
        标签
      </Tag>
    </div>
  );

  return (
    <div>
      <Codeframe
        rightCode={`
import React from 'react';
import { Tag } from 'union-design';

const demo = () => (
  <div>
    <Tag color="gold" closable>测试测试测试测试测试测试测试</Tag>
  </div>
);
      `}
        rightDemo={(
          <div>
            <Tag color="gold" closable>测试测试测试测试测试测试测试</Tag>
          </div>
      )}
        description={(
          <h3>基本的</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Tag } from 'union-design';

const demo = () => (
  <div>
    <Tag color="gold">金色</Tag>
    <Tag color="green">绿色</Tag>
    <Tag color="blue">蓝色</Tag>
    <Tag color="red">红色</Tag>
  </div>
);
      `}
        rightDemo={(
          <div>
            <Tag color="gold">金色</Tag>
            <Tag color="green">绿色</Tag>
            <Tag color="blue">蓝色</Tag>
            <Tag color="red">红色</Tag>
          </div>
      )}
        description={(
          <h3>自定义颜色</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Tag, Icon } from 'union-design';

const [tags, setTags] = useState([1, 2, 3]);

const onClose = (tag: number) => () => {
  const currentIndex = tags.indexOf(tag);
  tags.splice(currentIndex, 1);
  setTags([...tags]);
};

const handleAdd = () => {
  const last = tags[tags.length - 1];
  tags.push(last + 1);
  setTags([...tags]);
};

const EditableTagGroup = () => (
  <div>
    {tags.map((tag) => <Tag key={tag} closable onClose={onClose(tag)}>{\`标签\${tag}\`}</Tag>)}
    <Tag style={{ background: '#fff', borderStyle: 'dashed' }} icon={<Icon type="add" />} onClick={handleAdd}>
      标签
    </Tag>
  </div>
);

const demo = () => (
  <div>
    <EditableTagGroup />
  </div>
);
      `}
        rightDemo={(
          <div>
            <EditableTagGroup />
          </div>
      )}
        description={(
          <h3>动态添加、删除标签</h3>
      )}
      />
    </div>
  );
};

export default TagDemo;
