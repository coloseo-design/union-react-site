import React from 'react';
import { Cascader } from 'union-design';

/* start
<div>
<h3>可搜索的cascader</h3>
<p>如果页面滚动，下拉弹窗没有跟随滚动可以设置getPopupContainer, 返回的dom为父级dom，并且设置副级position: 'relative'</p>
</div>
end */

export default () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
            {
              value: 'xiasha',
              label: 'Xia Sha',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua men',
            },
          ],
        },
      ],
    },
  ];
  const handleCascaderChange = (value: string[], selectedOptions: {[key: string] : unknown}[]) => {
    console.log(value, selectedOptions);
  };
  return (
    <div id="CascaderParent" style={{ position: 'relative' }}>
      <Cascader
        options={options}
        onChange={handleCascaderChange}
        showSearch
        getPopupContainer={() => document.getElementById('CascaderParent') || document.body}
      />
    </div>
  );
};
