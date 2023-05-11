import React from 'react';
import { Card, Icon } from 'union-design';
import Codeframe from '../../components/code-frame';

const CardDemo = () => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { Card } from 'union-design';

const demo = () => (
  <div>
    <Card title="card1 点我试一试" onClick={() => { alert('点击card'); }}>
      card内容
    </Card>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Card title="card1 点我试一试" onClick={() => { alert('点击card'); }}>
            card内容
          </Card>
        </div>
      )}
      description={(
        <h3>基本的</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Card } from 'union-design';

const demo = () => (
  <div>
    <Card
      title={(
        <span>
          <Icon type="bell" style={{ fontSize: 16, color: '#ACAFB9', paddingRight: 8 }} />
          加Icon
        </span>
        )}
      width={492}
      height={222}
    >
      内容
    </Card>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Card
            title={(
              <span>
                <Icon type="bell" style={{ fontSize: 16, color: '#ACAFB9', paddingRight: 8 }} />
                加Icon
              </span>
        )}
            width={492}
            height={222}
          >
            内容
          </Card>
        </div>
      )}
      description={(
        <h3>加icon</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { Card } from 'union-design';

const demo = () => (
  <div>
    <Card title="我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长
      的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title"
    >
      我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长
      的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我
      是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容
    </Card>
  </div>
);
      `}
      rightDemo={(
        <div>
          <Card title="我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长
      的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title我是超长的title"
          >
            我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长
            的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容我
            是超长的内容我是超长的内容我是超长的内容我是超长的内容我是超长的内容
          </Card>
        </div>
      )}
      description={(
        <h3>超长内容、超长title</h3>
      )}
    />
  </div>
);

export default CardDemo;
