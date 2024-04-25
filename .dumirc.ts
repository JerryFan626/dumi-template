import { defineConfig } from 'dumi';
import { IThemeConfig } from 'dumi/dist/client/theme-api/types';

const themeConfig: IThemeConfig = {
  title: 'Dumi Template',
  name: 'UI',

  prefersColor: {
    default: 'light',
    switch: false,
  },
  socialLinks: {
    github: 'https://github.com/JerryFan626/dumi-template',
  },
};

export default defineConfig({
  title: 'Dumi Template',
  outputPath: 'docs-dist',
  npmClient: 'pnpm',
  themeConfig: themeConfig,
});
