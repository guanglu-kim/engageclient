import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: true,
    skipModelValidate: true,
  },
  locale: {
    default: `zh-CN`,
    antd: true,
  },
});
