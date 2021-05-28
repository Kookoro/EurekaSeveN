const {
  override,
  useBabelRc,
  fixBabelImports,
  addDecoratorsLegacy,
  addLessLoader,
  addWebpackPlugin,
} = require("customize-cra");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const appConfig = require("./src/app.config.json");
const DEBUG = process.env.NODE_ENV === "development";
const config = appConfig;
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  //添加webpack plugin配置
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  // addWebpackPlugin(DEBUG ? new BundleAnalyzerPlugin() : null),
  useBabelRc(),
  addDecoratorsLegacy(),
  addLessLoader({
    javascriptEnabled: true,
    //配置antd主题颜色
    modifyVars: {
      "@primary-color": config.default_theme_color
        ? config.default_theme_color
        : "#282A36",
    },
    /*
      @primary-color: #1890ff; // 全局主色
      @link-color: #1890ff; // 链接色
      @success-color: #52c41a; // 成功色
      @warning-color: #faad14; // 警告色
      @error-color: #f5222d; // 错误色
      @font-size-base: 14px; // 主字号
      @heading-color: rgba(0, 0, 0, 0.85); // 标题色
      @text-color: rgba(0, 0, 0, 0.65); // 主文本色
      @text-color-secondary: rgba(0, 0, 0, 0.45); // 次文本色
      @disabled-color: rgba(0, 0, 0, 0.25); // 失效色
      @border-radius-base: 4px; // 组件/浮层圆角
      @border-color-base: #d9d9d9; // 边框色
      @box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
    
    */
  })
  //if less-loader's version > @6 we should use:

  //addLessLoader({ lessOptions: { javascriptEnabled: true, modifyVars: { '@primary-color': 'red' }, }, })
);
