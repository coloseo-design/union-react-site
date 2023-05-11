/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';
import MenuConfig from '../../layout/menu.config';

const Md = (props: { textMd: string; }) => {
  const { textMd } = props;
  const history = useHistory();
  const parser = new DOMParser();
  const [html, setHTml] = useState(textMd);
  const handleClick = (text: string) => {
    const scrollChild = document.getElementById(text);
    if (scrollChild) {
      document.documentElement.scrollTo({
        top: scrollChild.offsetTop - 64,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    let category = '';
    let fixedCategory = '';
    const dom = parser.parseFromString(html, 'text/html');
    const imgs = dom.querySelectorAll('img');
    const ul = dom.querySelectorAll('ul');
    const h2 = dom.querySelectorAll('h2');
    let tempHtml = html;

    (ul || []).forEach((item) => {
      if (item.innerText.indexOf('[type=horizontal]') >= 0) {
        tempHtml = tempHtml.replace(`<ul>${item.innerHTML}</ul>`, `<ul class="horizontal-ul">${item.innerHTML}</ul>`);
      }
    });

    (imgs || []).forEach((item) => {
      if (item.alt) {
        const type = item.alt.split('=')[1];
        tempHtml = tempHtml.replace(`alt="${item.alt}">`, `alt="${item.alt}" class="${type}-img">`);
      }
    });
    tempHtml = tempHtml.replaceAll('[type=horizontal]', '');

    (h2 || []).forEach((item) => {
      const text = item.innerText;
      category += `<h2>${text}</h2>\n`;
      if (text !== '目录') {
        fixedCategory += `<h2>${text}</h2>\n`;
      }
    });
    tempHtml = tempHtml.replace(
      '<h2 id="目录">目录</h2>',
      `<div class="category" id="category">${category}</div>\n
    <div class="fixed-category">${fixedCategory}</div>
    `,
    );

    setHTml(tempHtml);
    const path = history.location.pathname.split('/');
    const design = MenuConfig.design || [];
    const themeColor = design.find((i) => i.key === path[2])?.themeColor || '#b30000';
    document.documentElement.style.setProperty('--theme-color', themeColor);

    const timer = setTimeout(() => {
      const categoryDom = document.querySelector('div#category');
      const fixCategoryDom = document.querySelector('div.fixed-category');
      clearTimeout(timer);
      if (categoryDom) {
        Array.from(categoryDom.children).forEach((item: any) => {
          if (item?.innerText !== '目录') {
            item.onclick = () => {
              handleClick(item?.innerText);
            };
          }
        });
      }
      if (fixCategoryDom) {
        Array.from(fixCategoryDom.children).forEach((item: any) => {
          item.onclick = () => {
            handleClick(item.innerText);
          };
        });
      }
    });
  }, []);

  return (
    <div className="md-content" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default Md;
