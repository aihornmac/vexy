import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack';
import koa from 'koa';

const port = process.env.PORT || 21000;

const bundle = `${webpackConfig.devServer.publicPath}/${webpackConfig.output.filename}`;

const html = `\
<!doctype html>
<html>
<head>
  <title>Vexy UI</title>
</head>
<body>
  <div id="body"></div>
  <script src="${bundle}"></script>
</body>
</html>
`;

const createApp = () => {
  const app = new koa();

  app.use(async ctx => {
    ctx.body = html;
  });

  app.listen(port, err => {
    if (err) {
      return console.error(err); // eslint-disable-line
    }
    console.log(`Vexy UI listening on ${port}`); // eslint-disable-line
  });
};

const run = () => {
  const compiler = webpack(webpackConfig);

  const devServer = new WebpackDevServer(
    compiler,
    webpackConfig.devServer
  );

  devServer.listen(
    webpackConfig.devServer.port,
    webpackConfig.devServer.host,
    err => {
      if (err) {
        return console.log(err); // eslint-disable-line
      }
      console.log(`Webpack Dev Server listening on ${webpackConfig.devServer.port}`); // eslint-disable-line

      createApp();
    }
  );
};

run();
