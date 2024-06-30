// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/celeb/follow', {
      target: 'http://dev.api.vastyle.co.kr',
      changeOrigin: true,
    }),
  );
};