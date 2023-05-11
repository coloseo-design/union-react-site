/* eslint-disable no-new-object */
/* eslint-disable camelcase */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

/*
测试 licence：vy6dOlcFY3CZQF1e
生产 licence：3G81FKAJzQ6wtaFY
*/
const isTianyanCollectData = true;
if (isTianyanCollectData && isTianyanCollectData) {
  var uam_xy_paq = uam_xy_paq || [];
  const uam_xy_obj = new Object();
  const uam_xy_session = new Object();
  (function () {
    uam_xy_paq.push(['server_url', '/tianyan/sendlog/sendqueue']);
    // 对接系统编码进行修改
    uam_xy_paq.push(['systemCode', 'vy6dOlcFY3CZQF1e']);
    // 对接系统licence进行修改
    uam_xy_paq.push(['licence', 'vy6dOlcFY3CZQF1e']);

    uam_xy_paq.push(['staffId', '']);
    uam_xy_paq.push(['provinceCode', '']);

    const d = document;
    const g = d.createElement('script');
    const s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = '/tianyan/uam_public_commonajax.js';
    s.parentNode.insertBefore(g, s);
  }());
}
