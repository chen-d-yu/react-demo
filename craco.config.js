const path = require("path");
const fs = require('fs')

// 解析styles文件夹下的所有scss文件全局注入，不需要手动引入
const folderPath = 'src/styles'
let globalMixinsScss = ''
try {
  const files = fs.readdirSync(folderPath)
  console.log('Files in the folder:')
  globalMixinsScss = files.reduce((prev, path) => {
    return `${prev}@use "@/styles/${path}";\n`
  }, '')
  console.log(globalMixinsScss)
} catch (err) {
  console.error('Error reading folder:', err)
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
    css: {
      preprocessorOptions: {
        scss:{
            additionalData: globalMixinsScss
        },
        // postcss: {
        //   mode: 'extends',
        //   loaderOptions: {
        //     postcssOptions: {
        //       ident: 'postcss',
        //       plugins: [
        //         require('postcss-pxtorem',  {
        //           rootValue: 16, // (Number | Function) 表示根元素字体大小或根据input参数返回根元素字体大小
        //           unitPrecision: 5, // （数字）允许 REM 单位增长到的十进制数字
        //           propList: ['*'], // 可以从 px 更改为 rem 的属性 使用通配符*启用所有属性
        //           replace: true, // 替换包含 rems 的规则，而不是添加回退。
        //           mediaQuery: true,  // 允许在媒体查询中转换 px
        //           minPixelValue: 12, // 最小的转化单位
        //           exclude: /node_modules/i // 要忽略并保留为 px 的文件路径
        //         }, )
        //       ],
        //     },
        //   },
        // },
      }
    },

  },
};
