import React from 'react';
import { Divider } from 'union-design';
import Codeframe from '../../components/code-frame';

const DividerDemo = () => (
  <div>
    <Codeframe
      rightCode={`
      import React from 'react';
      import { Divider } from 'union-design';

      const Demo = () => (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <Divider />
        <div>
          Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </div>
      )
      `}
      rightDemo={(
        <>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <Divider />
          <div>
            Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </div>
        </>
      )}
      description={(
        <h3>基本用法</h3>
      )}
    />
    <Codeframe
      rightCode={`
      import React from 'react';
      import { Divider } from 'union-design';

      const Demo = () => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Divider>标题</Divider>
      )
      `}
      rightDemo={(
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Divider>标题</Divider>
        </>
      )}
      description={(
        <h3>带标题分割线</h3>
      )}
    />
    <Codeframe
      rightCode={`
        import React from 'react';
        import { Divider } from 'union-design';

        const Demo = () => (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Divider dashed />
          <p>
            Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider dashed orientation="left">左侧虚线标题</Divider>
          <Divider dashed orientation="right">左侧虚线标题</Divider>
          <Divider dashed>居中虚线标题</Divider>
        )
      `}
      rightDemo={(
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Divider dashed />
          <p>Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <Divider dashed orientation="left">左侧虚线标题</Divider>
          <Divider dashed orientation="right">左侧虚线标题</Divider>
          <Divider dashed>居中虚线标题</Divider>
        </>
      )}
      description={(
        <h3>虚线分割线</h3>
      )}
    />
    <Codeframe
      rightCode={`
        import React from 'react';
        import { Divider } from 'union-design';

        const Demo = () => (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider orientation="left">left</Divider>
        )
      `}
      rightDemo={(
        <>
          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`}
          </p>
          <Divider orientation="left">左侧标题</Divider>
          <Divider>居中标题</Divider>
          <Divider orientation="right">左侧标题</Divider>
        </>
      )}
      description={(
        <h3>标题在分割线不同位置</h3>
      )}
    />
  </div>
);

export default DividerDemo;
