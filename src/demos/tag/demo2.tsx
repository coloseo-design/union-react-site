import React from 'react';
import { Tag, Icon } from 'union-design';

/* start
<h3>动态添加、删除标签</h3>
end */

export default () => {
  const [tags, setTags] = React.useState([1, 2, 3]);

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
      <EditableTagGroup />
    </div>
  );
};
