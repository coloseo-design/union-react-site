import React, { useCallback, useState } from 'react';
import { Drawer, Button } from 'union-design';

const DrawerDemo = () => {
  const [drawerVisible1, setDrawerVisible1] = useState(false);
  const [drawerVisible2, setDrawerVisible2] = useState(false);
  const [drawerVisible3, setDrawerVisible3] = useState(false);

  const [placement, setPlacement] = useState<any>('right');

  const onChange = useCallback((e: unknown) => setPlacement(e.target.value), []);

  return (
    <div style={{
      display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-start',
    }}
    >
      <form style={{ fontSize: 22, cursor: 'default' }}>
        <input type="radio" name="placement" value="top" onChange={onChange} checked={placement === 'top'} />
        {' top '}
        <input type="radio" name="placement" value="right" onChange={onChange} checked={placement === 'right'} />
        {' right '}
        <input type="radio" name="placement" value="bottom" onChange={onChange} checked={placement === 'bottom'} />
        {' bottom '}
        <input type="radio" name="placement" value="left" onChange={onChange} checked={placement === 'left'} />
        {' left '}
      </form>
      <Button
        onClick={() => {
          setDrawerVisible1(!drawerVisible1);
        }}
      >
        open drawer many level
      </Button>
      <Drawer
        visible={drawerVisible1}
        title="一级抽屉"
        placement={placement}
        onClose={() => setDrawerVisible1(false)}
      >
        一级抽屉
        <Button
          onClick={() => {
            setDrawerVisible2(!drawerVisible2);
          }}
        >
          next
        </Button>

        <Drawer
          visible={drawerVisible2}
          title="二级抽屉"
          placement={placement}
          onClose={() => setDrawerVisible2(false)}
        >
          二级抽屉
          <Button
            onClick={() => {
              setDrawerVisible3(!drawerVisible3);
            }}
          >
            next
          </Button>

          <Drawer
            visible={drawerVisible3}
            title="三级抽屉"
            placement={placement}
            onClose={() => setDrawerVisible3(false)}
          >
            三级抽屉
          </Drawer>
        </Drawer>
      </Drawer>
    </div>
  );
};

export default DrawerDemo;
