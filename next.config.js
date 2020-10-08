const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

// Globalizar los estilos empaquetados
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./styles/_styles.less"), "utf8")
);

// para las variables de desarrollo
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

// Para arreglar errores de css con antd
const devAntd = '@import "~antd/dist/antd.less";\n';
const stylesData = fs.readFileSync(
  path.resolve(__dirname, "./styles/_styles.less"),
  "utf-8"
);
fs.writeFileSync(
  path.resolve(__dirname, "./styles/self-styles.less"),
  isDev ? `${devAntd}${stylesData}` : `${devAntd}${stylesData}`,
  "utf-8"
);

// corrección: evita errores cuando el nodo requiere archivos .less
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    modifyVars: themeVariables,
    localIdentName: "[local]___[hash:base64:5]",
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    })
  ),
});
