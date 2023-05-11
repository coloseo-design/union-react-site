/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Button } from 'union-design';
import Codeframe from '../../components/code-frame';

const ButtonDemo: React.FC<unknown> = () => {
  const hight1 = (type: string) => `
  import React from 'react';
  import { Button } from 'union-design';
              
  const demo = () => (
    <div style={{ padding: 24 }} id="copy1">
      <Button type=${JSON.stringify(type)} style={{ marginRight: 10 }} size="large">large</Button>
      <Button type=${JSON.stringify(type)} style={{ marginRight: 10 }} size="default">default</Button>
      <Button type=${JSON.stringify(type)} size="small">small</Button>
    </div>
  )
  `;

  const demo = (type: any, key?: 'loading' | 'disabled') => (
    <>
      <Button type={type} style={{ marginRight: 10 }} size="large" disabled={key === 'disabled'} loading={key === 'loading'}>large</Button>
      <Button type={type} style={{ marginRight: 10 }} size="default" disabled={key === 'disabled'} loading={key === 'loading'}>default</Button>
      <Button type={type} size="small" loading={key === 'loading'} disabled={key === 'disabled'}>small</Button>
    </>
  );

  return (
    <div>
      <Codeframe
        rightCode={hight1('primary')}
        rightDemo={demo('primary')}
        description={(
          <>
            <h3>主按钮</h3>
            <p style={{ marginTop: 8 }}>主按钮：突出“完成”、“推荐”类操作；一个按钮区最多使用一个主按钮。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
          </>
        )}
      />
      <Codeframe
        rightCode={hight1('default')}
        rightDemo={demo('default')}
        description={(
          <>
            <h3>次按钮</h3>
            <p style={{ marginTop: 8 }}>次按钮：用于非主要动作。如果不确定选择哪种按钮，次按钮永远是最安全的选择。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
          </>
        )}
      />
      <Codeframe
        rightCode={hight1('dashed')}
        rightDemo={demo('dashed')}
        description={(
          <>
            <h3>虚线按钮</h3>
            <p style={{ marginTop: 8 }}>虚线按钮：常用于添加操作。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
          </>
        )}
      />
      <Codeframe
        rightCode={hight1('link')}
        rightDemo={demo('link')}
        description={(
          <>
            <h3>链接按钮</h3>
            <p style={{ marginTop: 8 }}>链接按钮：用于次要或外链的行动点。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
          </>
        )}
      />
      <Codeframe
        rightCode={hight1('ghost')}
        rightDemo={(
          <div style={{
            width: '80%', margin: 12, backgroundColor: '#ACAFB9', padding: '12px 16px',
          }}
          >
            {demo('ghost')}
          </div>
        )}
        description={(
          <>
            <h3>幽灵按钮</h3>
            {/* <h3>链接按钮：用于次要或外链的行动点。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</h3> */}
          </>
        )}
      />
      <Codeframe
        rightCode={`
        import React from 'react';
        import { Button } from 'union-design';
                    
        const demo = () => (
          <div style={{ padding: 24 }} id="copy1">
            <Button type=primary style={{ marginRight: 10 }} loading size="large">large</Button>
            <Button type=primary style={{ marginRight: 10 }} loading size="default">default</Button>
            <Button type=primary size="small" loading>small</Button>
          </div>
        )
        `}
        rightDemo={demo('primary', 'loading')}
        description={(
          <>
            <h3>加载按钮</h3>
            <p style={{ marginTop: 8 }}>加载按钮：用于异步操作等待反馈的时候，也可以避免多次提交。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
          </>
        )}
      />
      <Codeframe
        rightCode={hight1('danger')}
        rightDemo={demo('danger')}
        description={(
          <>
            <h3>危险按钮</h3>
            <p style={{ marginTop: 8 }}>危险按钮：删除/移动/修改权限等危险操作，一般需要二次确认。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</p>
          </>
        )}
      />
      <Codeframe
        rightCode={`
        import React from 'react';
        import { Button } from 'union-design';
                    
        const demo = () => (
          <div style={{ padding: 24 }} id="copy1">
            <Button type=primary style={{ marginRight: 10 }} disabled size="large">large</Button>
            <Button type=primary style={{ marginRight: 10 }} disabled size="default">default</Button>
            <Button type=primary size="small" disabled>small</Button>
          </div>
        )`}
        rightDemo={demo('primary', 'disabled')}
        description={(
          <>
            <h3>禁用按钮</h3>
            {/* <h3>危险按钮：删除/移动/修改权限等危险操作，一般需要二次确认。 按钮有大、中、小三种尺寸。若不设置尺寸，则尺寸为中。</h3> */}
          </>
        )}
      />
    </div>
  );
};

export default ButtonDemo;
