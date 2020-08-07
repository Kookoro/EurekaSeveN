const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  addLessLoader,
} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addDecoratorsLegacy(),
  addLessLoader({
    javascriptEnabled: true,
    //配置antd主题颜色
    modifyVars: { "@primary-color": "#282A36" },
  })
  //if less-loader's version > @6 we should use:

  //addLessLoader({ lessOptions: { javascriptEnabled: true, modifyVars: { '@primary-color': 'red' }, }, })
);
