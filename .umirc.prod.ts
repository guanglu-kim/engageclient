import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env': {
      baseUrl: 'http://118.190.144.191/:3005/',
    },
  },
});
