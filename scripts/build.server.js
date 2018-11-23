process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.env.APP_ENV = 'server'; // informs it is ssr

process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');

const webpack = require('webpack');
const config = require('../config/webpack.config.server'); // 환경설정 파일 변경
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

function build() {
  let compiler = webpack(config);
  compiler.run((err, stats) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(stats.toString());
  });
}

build(); // build 호출
