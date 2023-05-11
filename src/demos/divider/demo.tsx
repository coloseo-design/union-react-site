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
        Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </div>
      <Divider dashed />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </div>
      )
      `}
      rightDemo={(
        <>
          <div>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`}
          </div>
          <Divider />
          <div>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`}
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
          Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider />
      )
      `}
      rightDemo={(
        <>
          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`}
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
            Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider dashed>center</Divider>
        )
      `}
      rightDemo={(
        <>
          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.`}
          </p>
          <Divider dashed>center</Divider>
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
          <Divider orientation="left">left</Divider>
        </>
      )}
      description={(
        <h3>分割线标题在左边</h3>
      )}
    />
  </div>
);

export default DividerDemo;
