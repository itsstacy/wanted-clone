const createProxyMiddleware = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware(["/api", "/socket.io"], {
      target: "http://hayeon-sum.shop",
      changeOrigin: true,
      ws: true,
      router: {
        //   '/socket.io': 'ws://nginx:80'
      },
    })
  );
};
