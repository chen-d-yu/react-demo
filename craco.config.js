const path = require("path");
const fs = require("fs");
const cracoPluginSvgSprite = require("craco-plugin-svg-sprite");

// 解析styles文件夹下的所有scss文件全局注入，不需要手动引入
const folderPath = "src/styles";
let globalMixinsScss = "";
try {
  const files = fs.readdirSync(folderPath);
  console.log("Files in the folder:");
  globalMixinsScss = files.reduce((prev, path) => {
    return `${prev}@use "@/styles/${path}";\n`;
  }, "");
  console.log(globalMixinsScss);
} catch (err) {
  console.error("Error reading folder:", err);
}

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  style: {
    modules: {
      localIdentName: "",
    },
  },
  plugins: [
    {
      plugin: cracoPluginSvgSprite,
      options: {
        include: "./src/assets/icon", // required
        compress: true, // option
        svgoConfig: {
          // option
        },
        spriteLoaderConfig: {
          // option
          symbolId: "icon-svg-[name]", // 无效
        },
        svgPrefixName: "icon-svg", // option
      },
    },
  ],
};
