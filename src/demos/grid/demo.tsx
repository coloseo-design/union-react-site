import React from 'react';
import { Row, Col } from 'union-design';
import Codeframe from '../../components/code-frame';

const GridDemo = () => {
  const style = {
    color: '#fff', textAlign: 'center', lineHeight: '30px', height: 30,
  };
  return (
    <div>
      <Codeframe
        rightCode={`
        import React from 'react';
        import { Row, Col } from 'union-design';

        const style = {
          color: '#fff', textAlign: 'center', lineHeight: '30px', height: 30,
        };
  
        const Demo = () => (
          <div>
            <Row
              gutter={[{ xl: 10, xxl: 20 }, { xl: 20, xxl: 40 }]}
              justify="center"
              align="middle"
              type="flex"
            >
              <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
              </Col>
              <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                <div style={{ ...style, background: '#0092ff' }}>col-8</div>
              </Col>
              <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
              </Col>
            </Row>
          </div>
        )
        `}
        rightDemo={(
          <div>
            <Row
              gutter={[{ xl: 10, xxl: 20 }, { xl: 20, xxl: 40 }]}
              justify="center"
              align="middle"
              type="flex"
            >
              <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
              </Col>
              <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                <div style={{ ...style, background: '#0092ff' }}>col-8</div>
              </Col>
              <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
              </Col>
            </Row>
          </div>
        )}
        description={
          <h3>采用flex布局</h3>
        }
      />
      <div className="grid-demo">
        <Codeframe
          rightCode={`
          import React from 'react';
          import { Row, Col } from 'union-design';

          const style = {
            color: '#fff', textAlign: 'center', lineHeight: '30px', height: 30,
          };

          const Demo = () => (
            <div>
              <Row
                gutter={[{ xl: 10, xxl: 20 }, { xl: 20, xxl: 40 }]}
                justify="center"
                align="middle"
                type="flex"
              >
                <Col order={2} span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
                </Col>
                <Col order={1} span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: '#0092ff' }}>col-8</div>
                </Col>
                <Col order={3} span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
                </Col>
              </Row>
            </div>
          )
          `}
          rightDemo={(
            <div>
              <Row
                gutter={[{ xl: 10, xxl: 20 }, { xl: 20, xxl: 40 }]}
                justify="center"
                align="middle"
                type="flex"
              >
                <Col order={2} span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
                </Col>
                <Col order={1} span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: '#0092ff' }}>col-8</div>
                </Col>
                <Col order={3} span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: '#0092ff' }}>col-8</div>
                </Col>
              </Row>
            </div>
          )}
          description={
            <h3>采用flex布局, order演示</h3>
          }
        />

        <Codeframe
          rightCode={`
          import React from 'react';
          import { Row, Col } from 'union-design';

          const style = {
            color: '#fff', textAlign: 'center', lineHeight: '30px', height: 30,
          };
  
          const Demo = () => (
            <div>
              <Row
                gutter={[{ xl: 10, xxl: 20 }, { xl: 20, xxl: 40 }]}
              >
                <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
                </Col>
                <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: '#0092ff' }}>col-8</div>
                </Col>
                <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
                </Col>
              </Row>
            </div>
          )
          `}
          rightDemo={(
            <div>
              <Row
                gutter={[{ xl: 10, xxl: 20 }, { xl: 20, xxl: 40 }]}
              >
                <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
                </Col>
                <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: '#0092ff' }}>col-8</div>
                </Col>
                <Col span={8} xl={{ span: 8 }} lg={{ span: 4 }}>
                  <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-8</div>
                </Col>
              </Row>
            </div>
          )}
          description={
            <h3>采用float布局</h3>
          }
        />
        <Codeframe
          rightCode={`
          import React from 'react';
          import { Row, Col } from 'union-design';

          const style = {
            color: '#fff', textAlign: 'center', lineHeight: '30px', height: 30,
          };
  
          const Demo = () => {
            <div>
              <Row
                gutter={[{ xl: 10, xxl: 20 }, { xl: 20, xxl: 40 }]}
              >
                <Col span={6} offset={1}>
                  <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-6</div>
                </Col>
                <Col span={6} offset={1}>
                  <div style={{ ...style, background: '#0092ff' }}>col-6</div>
                </Col>
                <Col span={6} offset={1}>
                  <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-6</div>
                </Col>
              </Row>
            </div>
          };
          `}
          rightDemo={(
            <div>
              <Row
                gutter={[{ xl: 10, xxl: 20 }, { xl: 20, xxl: 40 }]}
              >
                <Col span={6} offset={1}>
                  <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-6</div>
                </Col>
                <Col span={6} offset={1}>
                  <div style={{ ...style, background: '#0092ff' }}>col-6</div>
                </Col>
                <Col span={6} offset={1}>
                  <div style={{ ...style, background: 'rgba(0,146,255,.75)' }}>col-6</div>
                </Col>
              </Row>
            </div>
          )}
          description={
            <h3>offset演示</h3>
          }
        />

      </div>
    </div>
  );
};

export default GridDemo;
