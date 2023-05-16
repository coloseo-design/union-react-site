import React from 'react';
import { Anchor } from 'union-design';

const AnchorDemo = () => (
  <div style={{ position: 'relative', overflow: 'hidden' }}>
    <div
      id="AnchorDemo"
      style={{
        height: 400,
        overflow: 'auto',
        backgroundColor: '#fff',
      }}
    >
      <Anchor
        style={{ position: 'absolute', top: 12 }}
        getContainer={() => document.getElementById('AnchorDemo')}
        options={[{ id: 'a', name: 'A-demo' }, { id: 'b', name: 'B-demo' }, { id: 'c', name: 'C-demo' }, { id: 'd', name: 'D-demo' }, { id: 'e', name: 'E-demo' }]}
      />

      <div id="a" style={{ height: 200, borderBottom: '1px solid #e8e8e8', padding: 12 }}>A-demo</div>
      <div id="b" style={{ height: 200, borderBottom: '1px solid #e8e8e8', padding: 12 }}>B-demo</div>
      <div id="c" style={{ height: 200, borderBottom: '1px solid #e8e8e8', padding: 12 }}>C-demo</div>
      <div id="d" style={{ height: 200, borderBottom: '1px solid #e8e8e8', padding: 12 }}>D-demo</div>
      <div id="e" style={{ height: 200, padding: 12 }}>E-demo</div>
    </div>
  </div>
);

export default AnchorDemo;
