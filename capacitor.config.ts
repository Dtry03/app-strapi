import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gt3cars.admin',
  appName: 'Strapi Admin',
  webDir: 'dist',
  server: {
    url: 'https://api.gt3cars.com/admin', 
    cleartext: true
  }
};

export default config;