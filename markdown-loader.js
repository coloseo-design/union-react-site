const marked = require('marked');

module.exports = (source) => {
  // 引入html-loader 实现多个loader配合
  const html = marked(source);
  return html;
};
