import { defineConfig } from "dumi";

let base = "/shida-ui"
let publicPath = "/shida-ui/"

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
   base = undefined
   publicPath = undefined
}

export default defineConfig({
  title: "SHIDA UI",
  mode: "site",
  outputPath: "doc-site",
  exportStatic: {}, // 后续部署到github pages 直接生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包  优化首屏加载速度
  webpack5: {},
  base,
  publicPath
})
