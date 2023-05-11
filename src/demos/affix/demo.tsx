import React, { useEffect } from 'react';
import { Affix, Button } from 'union-design';
import CodeFrame from '../../components/code-frame';
import './demo.less';

const AffixDemo = () => {
  const t = React.useRef(window);
  useEffect(() => {
    console.log('demo1', t.current);
  }, []);

  return (
    <>
      <CodeFrame
        rightCode={`
        import React, { useEffect } from 'react';
        import { Affix, Button } from 'union-design';

        const Demo = () => {
          const t = React.useRef(window);
          useEffect(() => {
            console.log('demo1', t.current);
          }, []);

          return (
            <>
              <div className="affix-demo">
                <div className="target" style={{ backgroundColor: '#fff' }} ref={t}>
                  这是开头
                  <Affix offsetTop={20} target={() => t.current}>
                    <Button type="primary">固定在容器上方20px</Button>
                  </Affix>
                  这是结尾
                  <div className="other" style={{ backgroundColor: '#fff' }}>
                    北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，
                    其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，
                    水击三千里，抟扶摇而上者九万里，去以六月息者也。”野马也，尘埃也，生物之以息相吹也。天之苍苍，其正色邪？
                    其远而无所至极邪？其视下也，亦若是则已矣。且夫水之积也不厚，则其负大舟也无力。覆杯水于坳堂之上，则芥为之舟；
                    置杯焉则胶，水浅而舟大也。风之积也不厚，则其负大翼也无力。故九万里，则风斯在下矣，而后乃今培风；
                    背负青天，而莫之夭阏者，而后乃今将图南。蜩与学鸠笑之曰：“我决起而飞，抢榆枋而止，时则不至，而控于地而已矣，奚以之九万里而南为？”
                    适莽苍者，三餐而反，腹犹果然；适百里者，宿舂粮；适千里者，三月聚粮。之二虫又何知！小知不及大知，小年不及大年。奚以知其然也？
                    朝菌不知晦朔，蟪蛄不知春秋，此小年也。楚之南有冥灵者，以五百岁为春，五百岁为秋；上古有大椿者，以八千岁为春，八千岁为秋。
                    此大年也。而彭祖乃今以久特闻，众人匹之，不亦悲乎？
                  </div>
                  <Affix offsetTop={20} offsetBottom={20} target={() => t.current}>
                    <Button type="danger">固定在容器上方和下方20px</Button>
                  </Affix>
                </div>
              </div>
            </>
          )
        }
        `}
        rightDemo={(
          <>
            <div className="affix-demo">
              <div className="target" style={{ backgroundColor: '#fff' }} ref={t}>
                这是开头
                <Affix offsetTop={20} target={() => t.current}>
                  <Button type="primary">固定在容器上方20px</Button>
                </Affix>
                这是结尾
                <div className="other" style={{ backgroundColor: '#fff' }}>
                  北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，
                  其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，
                  水击三千里，抟扶摇而上者九万里，去以六月息者也。”野马也，尘埃也，生物之以息相吹也。天之苍苍，其正色邪？
                  其远而无所至极邪？其视下也，亦若是则已矣。且夫水之积也不厚，则其负大舟也无力。覆杯水于坳堂之上，则芥为之舟；
                  置杯焉则胶，水浅而舟大也。风之积也不厚，则其负大翼也无力。故九万里，则风斯在下矣，而后乃今培风；
                  背负青天，而莫之夭阏者，而后乃今将图南。蜩与学鸠笑之曰：“我决起而飞，抢榆枋而止，时则不至，而控于地而已矣，奚以之九万里而南为？”
                  适莽苍者，三餐而反，腹犹果然；适百里者，宿舂粮；适千里者，三月聚粮。之二虫又何知！小知不及大知，小年不及大年。奚以知其然也？
                  朝菌不知晦朔，蟪蛄不知春秋，此小年也。楚之南有冥灵者，以五百岁为春，五百岁为秋；上古有大椿者，以八千岁为春，八千岁为秋。
                  此大年也。而彭祖乃今以久特闻，众人匹之，不亦悲乎？
                </div>
                <Affix offsetTop={20} offsetBottom={20} target={() => t.current}>
                  <Button type="danger">固定在容器上方和下方20px</Button>
                </Affix>
              </div>
            </div>
          </>
          )}
        description={
          <h3>基本用法</h3>
        }
      />
    </>
  );
};

export default AffixDemo;
