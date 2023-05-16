/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import * as PageComponents from '../docs';
// import * as DemoComponents from '../demos';
import * as demosCodes from '../codes';
import * as allDemo from '../allDemos';
import CodeFrame from '../components/code-frame';
// import * as CodeDemoComponents from '../code-demos';
import HowUse from '../pages/how-use';
import Config from '../pages/config';

export function element(params: any) {
  if (typeof params === 'string') {
    return React.createElement('span', null, params);
  }
  const children = typeof params.children === 'string' ? [params.children] : (params.children || []).map((child: any) => element(child));
  const props = {};
  Object.keys(params.attrs || {}).forEach((key) => {
    const value = (params.attrs || {})[key];
    Object.assign(props, {
      [key]: value,
    });
  });
  return React.createElement(
    params.tag,
    params.attrs ? props : null,
    ...children,
  );
}

export interface PageProps {
  name: string;
}

function rename(name: string, sparator = '-') {
  const arr = name.split(sparator).map((item) => {
    // eslint-disable-next-line prefer-const
    let [first, ...reset] = item;
    const codepoint = first.codePointAt(0);
    if (codepoint && codepoint > 96 && codepoint < 123) {
      const upper = codepoint - 32;
      first = String.fromCodePoint(upper);
    }
    reset.unshift(first);
    return reset.join('');
  }).join('');
  return arr;
}

export const BasePageComponent: React.FC<PageProps> = (props) => {
  const { name } = props;
  if (name === 'how-use') {
    return (
      <div className="box">
        <HowUse />
      </div>
    );
  }
  if (name === 'config') {
    return (
      <div className="box">
        <Config />
      </div>
    );
  }
  const componentName: string = rename(name);
  const data = (PageComponents as any)[componentName];
  // const CurrentComponent = (DemoComponents as any)[componentName];
  const demos = Object.entries(allDemo).filter((i) => i[0].indexOf(`${componentName}Demo`) > -1 && i[0].startsWith(`${componentName}Demo`));
  const codes = Object.entries(demosCodes).filter((i) => i[0].indexOf(`${componentName}Demo`) > -1 && i[0].startsWith(`${componentName}Demo`)).map((item) => item[1]);
  return (
    <div className="box">
      {element(data.content)}
      {(demos || []).map((item, index) => {
        const content = codes[index];
        const startString = '/* start';
        const start = content.indexOf(startString);
        const endString = 'end */';
        const end = content.indexOf(endString);
        const description = start > -1 && end > -1 ? content.slice(start + startString.length, end) : <h3>基本用法</h3>;
        const code = start > -1 && end > -1 ? `${content.slice(0, start)}${content.slice(end + endString.length)}` : content;
        if (componentName === 'Icon') {
          return <div key={item[0]}>{item[1] && (item[1] as any)?.()}</div>;
        }
        return (
          <CodeFrame
            key={item[0]}
            description={description}
            rightDemo={item[1]}
            rightCode={code}
          />
        );
      })}
    </div>
  );
};

export default BasePageComponent;
