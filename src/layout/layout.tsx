/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
// import classname from 'classnames';
import { useHistory } from 'react-router-dom';
// import { Icon, BackTop } from 'union-design';
import './layout.less';
import Menus, { Menu } from './menus';
import { Anchor } from '../components/anchor';
import Search from './search';
import BackTop from '../components/backTop';
import '../../pagelog.js';

const logo = require('../assets/images/logo.png');
const dropdown = require('../assets/images/dropdown.png');

interface LayoutProps {
  menus: {
    develop: Menu[];
    design: Menu[];
  };
}

interface RouteLinked {
  path: string;
  title: string;
  subTitle: string;
  themeColor: string;
  pre?: RouteLinked;
  next?: RouteLinked;
}

function linkedMenus(menus: Menu[] = [], target: string): RouteLinked[] {
  let pre: any = {
    path: '/',
    title: '',
    subTitle: '首页',
    themeColor: '#D1373D',
  };
  const routes: RouteLinked[] = [pre];
  menus.forEach((item: Menu) => {
    item.children?.forEach((sub) => {
      const element = {
        path: `/${target}/${item.key}/${sub.key}`,
        title: item.title,
        subTitle: sub.title,
        themeColor: sub.themeColor || item.themeColor || '',
      };
      if (pre) {
        Object.assign(element, {
          pre,
        });
        Object.assign(pre, {
          next: element,
        });
      }
      pre = element;
      routes.push(element);
    });
  });
  return routes;
}

function getCurrentRoute(menus: RouteLinked[], path: string): RouteLinked | undefined {
  const current = menus.find((item) => item.path === path);
  return current;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, menus: _menus } = props;
  const history = useHistory();
  const { pathname } = history.location;

  const [target, setTarget] = useState<'design' | 'develop'>(history.location.pathname.indexOf('/develop/components') >= 0 ? 'develop' : 'design');
  const menus = _menus[target];
  const linkedRoutes = useMemo(() => linkedMenus(menus, target), [target]);
  const [allId, setAllId] = useState([]);
  const [routeConfig, setRouteConfig] = useState<RouteLinked>(getCurrentRoute(linkedRoutes, history.location.pathname) || linkedRoutes[0]);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const useId = [
    {
      id: 'agent',
      name: '设置代理',
    },
    {
      id: 'install',
      name: '安装',
    },
    {
      id: 'browser',
      name: '浏览器支持',
    },
    {
      id: 'ts',
      name: 'TypeScript',
    },
    {
      id: 'plugin',
      name: '按需加载',
    },
    {
      id: 'demo',
      name: '示例',
    },
  ];
  const extraLoaction = ['/develop/components/how-use', '/develop/components/config'];
  useEffect(() => {
    history.listen((location) => {
      if (location.pathname) {
        if (history.action === 'PUSH') {
          document.documentElement.scrollTop = 0;
          const element = document.getElementById('g-body1');
          element.scrollTop = 0;
        }
        const tempT = location.pathname.indexOf('/develop/components') >= 0 ? 'develop' : 'design';
        const tempRoutes = linkedMenus(_menus[tempT], tempT);
        const current = getCurrentRoute(tempRoutes, location.pathname);
        if (current || extraLoaction.indexOf(location.pathname) >= 0) {
          current && setRouteConfig(current);
          location.pathname === '/develop/components/how-use' && setRouteConfig({
            path: '/how-use',
            subTitle: '如何使用',
            themeColor: '',
            title: '',
          });
          location.pathname === '/develop/components/config' && setRouteConfig({
            path: '/config',
            subTitle: '配置',
            themeColor: '',
            title: '',
          });
          // 导航切换页面需要刷新到当前页面顶部
          const [_, anchor_str] = location.hash.split('#');
          if (anchor_str) {
            setTimeout(() => {
              document.getElementById(anchor_str)?.scrollIntoView(true);
            }, 300);
          }
        }
      }
    });
    const id = [...document.querySelectorAll('*')].filter((item) => item.getAttribute('id'));
    const newId = history.location.pathname === '/develop/components/how-use' ? useId : id.filter((i) => i.id !== 'root' && i.localName !== 'h1' && ['h2'].includes(i.localName));
    setAllId(newId);
    document.documentElement.style.setProperty('--title-color', routeConfig.themeColor);
    setTarget(history.location.pathname.indexOf('/develop/components') >= 0 ? 'develop' : 'design');
  }, [routeConfig, target, history.location.pathname]);

  const navigateToNext = useCallback(() => {
    routeConfig.next && history.push(routeConfig.next?.path);
  }, [routeConfig]);

  const navigateToPrev = useCallback(() => {
    routeConfig.pre && history.push(routeConfig.pre?.path);
  }, [routeConfig]);

  const dirs = history.location.pathname === '/develop/components/how-use' ? useId : allId.map((i) => ({
    id: i.id,
    name: i.innerText,
  }));

  const handleH5 = (from: any) => {
    setTarget('design');
    if (from) {
      window.location.assign(`${window.location.origin}/h5/#/design/summary/design?from=${from}`);
    } else {
      window.location.assign(`${window.location.origin}/h5/#/design/summary/design`);
    }
  };
  const handleHome = () => {
    setTarget('design');
    setRouteConfig({
      path: '/',
      subTitle: 'title',
      themeColor: '#D1373D',
      title: '',
    });
    history.push('/');
  };
  const handleWeb = (key: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (key === 'web') {
      history.push('/design/overview/worth');
    } else {
      history.push('/download');
      setRouteConfig({
        path: '/download',
        subTitle: '资源下载',
        themeColor: '#D1373D',
        title: '',
      });
    }
    setTarget('design');
  };
  const handleChange = (key: 'design' | 'develop') => (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    setTarget(key);
    if (key === 'design') {
      setRouteConfig({
        path: '/design/overview/worth',
        subTitle: '设计价值观',
        themeColor: '#D1373D',
        title: '',
      });
      history.push('/design/overview/worth');
    } else {
      setRouteConfig({
        path: '/develop/components/button',
        subTitle: 'button',
        themeColor: '#D1373D',
        title: '',
      });
      history.push('/develop/components/button');
    }
  };

  return (
    <div className="g-layout" onClick={() => { setShow(false); setVisible(false); }}>
      {target === 'develop' && (
        <Anchor dirs={dirs} />
      )}
      <div className="g-header">
        <div className="header">
          <div>
            <img onClick={handleHome} style={{ cursor: 'pointer' }} className="logo" src={logo} alt="" />
            {/* <div className="header-title" onClick={handleHome}>联通设计系统</div> */}
            <div className="search-box-v2">
              <img src={require('../assets/images/search.png')} alt="search" width="23" />
              <Search changeTarget={setTarget} />
            </div>
          </div>
          <div className="header-right">
            <div onClick={handleHome}><span>首页</span></div>
            {/* <div onClick={handleH5}><span>移动端组件库</span></div> */}
            <div
              className="web-parent"
              style={{ position: 'relative' }}
              onClick={(e) => { e.stopPropagation(); setVisible(!visible); }}
            >
              <span><span>移动端组件库</span></span>
              <img src={dropdown} alt="" width={16} height={16} />
              <div
                className="web-child-wrap"
                style={{
                  display: visible ? 'flex' : 'none', position: 'absolute', width: 120, height: 88, border: '1px solid #D8D8D8', flexWrap: 'wrap', paddingLeft: 16, paddingBottom: 16, alignItems: 'flex-end', background: '#fff', top: 27, left: '-8px',
                }}
              >
                <div onClick={handleH5.bind(null, '')} className="child">React组件库</div>
                <div className="child" onClick={handleH5.bind(null, 'vue')}>Vue2.0组件库</div>
              </div>
            </div>
            <div
              className="web-parent"
              style={{ position: 'relative' }}
              onClick={(e) => { e.stopPropagation(); setShow(!show); }}
            >
              <span style={{ color: '#b30000' }}><span>Web端组件库</span></span>
              <img src={dropdown} alt="" width={16} height={16} />
              <div
                className="web-child-wrap"
                style={{
                  display: show ? 'flex' : 'none', position: 'absolute', width: 120, height: 88, border: '1px solid #D8D8D8', flexWrap: 'wrap', paddingLeft: 16, paddingBottom: 16, alignItems: 'flex-end', background: '#fff', top: 27, left: '-8px',
                }}
              >
                <div onClick={handleWeb('web')} className="child">React组件库</div>
                <div className="child" onClick={() => { window.location.assign(`${window.location.origin}/vue/#/design/overview/worth`); }}>Vue2.0组件库</div>
              </div>
            </div>
            <div onClick={() => { window.location.assign(`${window.location.origin}/charts/#/design/line`); }}><span>图表库</span></div>
            <div onClick={handleWeb('download')} style={{ color: !show && pathname === '/download' ? '#b30000' : 'rgba(0, 0, 0, 0.85)' }}><span>资源与下载</span></div>
            <div className="header-avatar">
              <span>欢迎您</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="g-content"
        style={{
          paddingLeft: (history.location.pathname !== '/' && history.location.pathname !== '/download') ? 240 : 0,
          backgroundColor: history.location.pathname !== '/' ? '#FAFAFA' : '#fff',
        }}
      >
        {(history.location.pathname !== '/' && history.location.pathname !== '/download') && (
        <div className="g-left">
          <div className="g-left-title">React组件库</div>
          <div className="g-switch">
            <ul className="switch">
              <li
                className={`${target === 'design' ? 'active' : ''}`}
                onClick={handleChange('design')}
              >
                设计师
              </li>
              <li
                className={`${target === 'develop' ? 'active' : ''}`}
                onClick={handleChange('develop')}
              >
                开发者
              </li>
            </ul>
          </div>
          <Menus menus={menus} target={target} routeConfig={routeConfig} />
        </div>
        )}
        <div
          className="g-body"
          id="g-body1"
          style={{
            padding: (history.location.pathname === '/' || history.location.pathname === '/download') ? 0 : '56px 180px 96px 60px',
            height: (history.location.pathname === '/' || history.location.pathname === '/download') ? 'auto' : 'calc(100% - 64px)',
          }}
        >
          {children}
        </div>

        {/* {routeConfig.title ? (
          <footer className="g-footer" style={{ backgroundColor: routeConfig.themeColor }}>
            <div className="item" onClick={navigateToPrev}>
              {
                  routeConfig.pre && (
                    <>
                      <div>
                        <Icon type="arrow-left" />
                      </div>
                      <div className="action">
                        <div className="title">上一页</div>
                        <div className="sub-title">{routeConfig.pre?.subTitle}</div>
                      </div>
                    </>
                  )
                }
            </div>
            <div className="item" onClick={navigateToNext}>
              {
                  routeConfig.next && (
                    <>
                      <div className="action">
                        <div className="title">下一页</div>
                        <div className="sub-title">{routeConfig.next?.subTitle}</div>
                      </div>
                      <div>
                        <Icon type="arrow-right" />
                      </div>
                    </>
                  )
                }
            </div>
          </footer>
        ) : ( */}
        {history.location.pathname === '/' && (
          <footer className="home-footer">
            <div className="footer1">
              <img src={require('../assets/images/footer-email.png')} style={{ width: '16px', marginRight: '5px', marginTop: '-3px' }} />
              联系我们：hqs-UniDesign@chinaunicom.cn
            </div>
            <div className="footer2">- Made with ❤️  中国联合网络通信集团有限公司 -</div>
          </footer>
        )}
        {/* )} */}
      </div>
      {history.location.pathname === '/' || history.location.pathname === '/download' ? <BackTop style={{ right: 20, bottom: 90, position: 'fixed' }} /> : <BackTop style={{ right: 20, bottom: 90, position: 'fixed' }} target={() => document.getElementById('g-body1')} />}
    </div>
  );
};

export default Layout;
