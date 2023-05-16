import React from 'react';
import { Popconfirm, Button } from 'union-design';

/* start
<h3>位置有十二个方向</h3>
<p>。如需箭头指向目标元素中心，可以设置 placement, 如果想要弹窗跟随滚动可设置getPopupContainer<p>
end */
export default () => {
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

  return (
    <div id="pop" style={{ position: 'relative' }}>
      <div>
        <Popconfirm
          title={(
            <div>
              你是否确定这是一个气泡确认框kkk
              你是否确定这是一个气泡确认框？你是否确定这是一个气泡确认框？
            </div>
        )}
          visible={visible}
          placement="topLeft"
          getPopupContainer={() => document.getElementById('pop') || document.body}
          okButtonProps={{ loading }}
          onConfirm={onConfirm}
          overlayStyle={{ maxWidth: 200 }}
          onVisibleChange={(v) => setVisible(v)}
        >
          <Button>topLeft</Button>
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
};
