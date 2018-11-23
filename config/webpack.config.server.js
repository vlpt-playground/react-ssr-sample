const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');
const getClientEnvironment = require('./env');

const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = {
  mode: 'production',
  entry: [paths.ssrIndexJs],
  target: 'node',
  output: {
    path: paths.ssrBuild,
    filename: 'server.js',
    chunkFilename: 'chunks/[name].[chunkhash:8].chunk.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    )
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              emitFile: false, // 실제로 파일을 생성하지 않음
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,

            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),

              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false
            }
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve('babel-preset-react-app/dependencies'),
                  { helpers: true }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: true,
              sourceMaps: false
            }
          },
          {
            test: /\.css$/,
            loader: require.resolve('css-loader/locals')
            // 뒤에 /locals 를 붙여줘야 실제로 파일을 생성하지 않음.
            // postcss-loader 같은건 생략해도됨.
          },
          {
            test: /\.scss$/,
            use: [
              require.resolve('css-loader/locals'), // 여기도 locals
              require.resolve('sass-loader')
            ]
          },

          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              emitFile: false, // 실제로 파일을 생성하지 않게 함
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.DefinePlugin(env.stringified)],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    __dirname: true
  },
  performance: false
};
