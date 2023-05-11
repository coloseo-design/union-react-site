import React from 'react';
import { Popconfirm, Button } from 'union-design';
import Codeframe from '../../components/code-frame';

const PopconfirmDemo: React.FC<unknown> = () => {
  const handleVisibleChange = (visible: boolean) => {
    console.log('-visible-', visible);
  };
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const onConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  const handleClick = () => {
    setVisible(true);
  };
  return (
    <div>
      <Codeframe
        rightCode={`
import React from 'react';
import { Popconfirm, Button } from 'union-design';

const demo = () => (
  <div>
    <Popconfirm
      title="你是否确定这是一个气泡确认框"
      placement="top"
      onVisibleChange={handleVisibleChange}
    >
      <Button style={{ margin: 24 }}>top</Button>
    </Popconfirm>
  </div>
);
      `}
        rightDemo={(
          <div>
            <Popconfirm
              title="你是否确定这是一个气泡确认框"
              placement="top"
              onVisibleChange={handleVisibleChange}
            >
              <Button style={{ margin: 24 }}>top</Button>
            </Popconfirm>
          </div>
      )}
        description={(
          <h3>最基本的用法</h3>
      )}
      />

      <Codeframe
        rightCode={`
import React from 'react';
import { Popconfirm, Button } from 'union-design';

const demo = () => {
  const handleVisibleChange = (visible: boolean) => {
    console.log('-visible-', visible);
  };
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const onConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <div id="pop">
      <div>
        <Popconfirm
          title={(
            <div>
              你是否确定这是一个气泡确认框kkk
              你是否确定这是一个气泡确认框？你是否确定这是一个气泡确认框？
            </div>
)}
          placement="topLeft"
          getPopupContainer={() => document.getElementById('pop') || document.body}
          okButtonProps={{ loading }}
          onConfirm={onConfirm}
          overlayStyle={{ maxWidth: 200 }}
        >
          <Button onClick={handleClick}>topLeft</Button>
        </Popconfirm>
        <Popconfirm
          title="你是否确定这是一个气泡确认框"
          placement="top"
          onVisibleChange={handleVisibleChange}
        >
          <Button style={{ margin: 24 }}>top</Button>
        </Popconfirm>
        <Popconfirm
          title="你是否确定这是一个气泡确认框？"
          placement="topRight"
        >
          <Button style={{ margin: 24 }}>topRight</Button>
        </Popconfirm>
      </div>
      <div>
        <div style={{ display: 'inline-block' }}>
          <div>
            <Popconfirm
              title="你是否确定这是一个气泡确认框？"
              placement="leftTop"
            >
              <Button style={{ margin: 24, marginLeft: 0 }}>leftTop</Button>
            </Popconfirm>
          </div>
          <div>
            <Popconfirm
              title="你是否确定这是一个气泡确认框？"
              placement="left"
            >
              <Button style={{ margin: 24, marginLeft: 0 }}>left</Button>
            </Popconfirm>
          </div>
          <div>
            <Popconfirm
              title="你是否确定这是一个气泡确认框？"
              placement="leftBottom"
            >
              <Button style={{ margin: 24, marginLeft: 0 }}>leftBottom</Button>
            </Popconfirm>
          </div>
        </div>
        <div style={{ display: 'inline-block', paddingLeft: 64 }}>
          <div>
            <Popconfirm
              title="你是否确定这是一个气泡确认框？"
              placement="rightTop"
            >
              <Button style={{ margin: 24 }}>rightTop</Button>
            </Popconfirm>
          </div>
          <div>
            <Popconfirm
              title="你是否确定这是一个气泡确认框？"
              placement="right"
            >
              <Button style={{ margin: 24 }}>right</Button>
            </Popconfirm>
          </div>
          <div>
            <Popconfirm
              title="你是否确定这是一个气泡确认框？"
              placement="rightBottom"
            >
              <Button style={{ margin: 24 }}>rightBottom</Button>
            </Popconfirm>
          </div>
        </div>
      </div>
      <div>
        <Popconfirm
          title="你是否确定这是一个气泡确认框？"
          placement="bottomLeft"
        >
          <Button>bottomLeft</Button>
        </Popconfirm>
        <Popconfirm
          title="你是否确定这是一个气泡确认框？"
          placement="bottom"
        >
          <Button style={{ margin: 24 }}>bottom</Button>
        </Popconfirm>
        <Popconfirm
          title="你是否确定这是一个气泡确认框？"
          placement="bottomRight"
        >
          <Button style={{ margin: 24 }}>bottomRight</Button>
        </Popconfirm>
      </div>
    </div>
  );
}
      `}
        rightDemo={(
          <div id="pop">
            <div>
              <Popconfirm
                title={(
                  <div>
                    你是否确定这是一个气泡确认框kkk
                    你是否确定这是一个气泡确认框？你是否确定这是一个气泡确认框？
                  </div>
                )}
                placement="topLeft"
                getPopupContainer={() => document.getElementById('pop') || document.body}
                okButtonProps={{ loading }}
                onConfirm={onConfirm}
                overlayStyle={{ maxWidth: 200 }}
              >
                <Button onClick={handleClick}>topLeft</Button>
              </Popconfirm>
              <Popconfirm
                title="你是否确定这是一个气泡确认框"
                placement="top"
                onVisibleChange={handleVisibleChange}
              >
                <Button style={{ margin: 24 }}>top</Button>
              </Popconfirm>
              <Popconfirm
                title="你是否确定这是一个气泡确认框？"
                placement="topRight"
              >
                <Button style={{ margin: 24 }}>topRight</Button>
              </Popconfirm>
            </div>
            <div>
              <div style={{ display: 'inline-block' }}>
                <div>
                  <Popconfirm
                    title="你是否确定这是一个气泡确认框？"
                    placement="leftTop"
                  >
                    <Button style={{ margin: 24, marginLeft: 0 }}>leftTop</Button>
                  </Popconfirm>
                </div>
                <div>
                  <Popconfirm
                    title="你是否确定这是一个气泡确认框？"
                    placement="left"
                  >
                    <Button style={{ margin: 24, marginLeft: 0 }}>left</Button>
                  </Popconfirm>
                </div>
                <div>
                  <Popconfirm
                    title="你是否确定这是一个气泡确认框？"
                    placement="leftBottom"
                  >
                    <Button style={{ margin: 24, marginLeft: 0 }}>leftBottom</Button>
                  </Popconfirm>
                </div>
              </div>
              <div style={{ display: 'inline-block', paddingLeft: 64 }}>
                <div>
                  <Popconfirm
                    title="你是否确定这是一个气泡确认框？"
                    placement="rightTop"
                  >
                    <Button style={{ margin: 24 }}>rightTop</Button>
                  </Popconfirm>
                </div>
                <div>
                  <Popconfirm
                    title="你是否确定这是一个气泡确认框？"
                    placement="right"
                  >
                    <Button style={{ margin: 24 }}>right</Button>
                  </Popconfirm>
                </div>
                <div>
                  <Popconfirm
                    title="你是否确定这是一个气泡确认框？"
                    placement="rightBottom"
                  >
                    <Button style={{ margin: 24 }}>rightBottom</Button>
                  </Popconfirm>
                </div>
              </div>
            </div>
            <div>
              <Popconfirm
                title="你是否确定这是一个气泡确认框？"
                placement="bottomLeft"
              >
                <Button>bottomLeft</Button>
              </Popconfirm>
              <Popconfirm
                title="你是否确定这是一个气泡确认框？"
                placement="bottom"
              >
                <Button style={{ margin: 24 }}>bottom</Button>
              </Popconfirm>
              <Popconfirm
                title="你是否确定这是一个气泡确认框？"
                placement="bottomRight"
              >
                <Button style={{ margin: 24 }}>bottomRight</Button>
              </Popconfirm>
            </div>
          </div>
      )}
        description={(
          <h3>位置有十二个方向。如需箭头指向目标元素中心，可以设置 placement</h3>
      )}
      />
    </div>
  );
};

export default PopconfirmDemo;
