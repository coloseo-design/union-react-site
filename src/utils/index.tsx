/* eslint-disable react/prop-types */
import React from 'react';
import * as PageComponents from '../docs';
import * as DemoComponents from '../demos';
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
  const data = PageComponents[componentName];
  const CurrentComponent = DemoComponents[componentName];
  // const CodeComponent = CodeDemoComponents[componentName];

  return (
    <div className="box">
      {element(data.content)}
      <div>
        { React.createElement(CurrentComponent, {}, null)}
      </div>
      {/* { React.createElement(CodeComponent, {}, null)} */}
    </div>
  );
};

export default BasePageComponent;
