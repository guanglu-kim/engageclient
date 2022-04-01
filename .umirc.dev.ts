import { defineConfig } from 'umi';

export default defineConfig({
  define:{
    'process.env': {
      baseUrl:'http://192.168.0.90:3005/',
      txCos:{
        imageUrl:'https://oa-dev-1307991120.cos.ap-nanjing.myqcloud.com/',
        Bucket: 'oa-dev-1307991120',
        Region: 'ap-nanjing',
        SecretId: 'AKIDmPoxrVu3xbz92f290c092f28yYsviFWX',
        SecretKey: 'nKbcPyGI4ZonVx84mERO5WhiU1JK5btv',
      }
    }
  },
});
