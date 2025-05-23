import { defineConfig, UserConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';

const defaultLocale = 'en';
const defineSupportLocales = [
  defaultLocale,
  'vi',
  'de',
  'zh-cn',
  'zh-tw',
  'id',
  'ja'
];

const commonSidebarConfig: VitePressSidebarOptions = {
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  manualSortFileNameByPriority: [
    'hachimi',
    'about.md',
    'getting-started.md',
    'troubleshooting.md',
    'built-in-gui.md',
    'config.md',
    'faqs.md',
    'auto-translation.md',

    'translation-guide',
    'welcome.md',
    'translation-system.md',
    'using-zokuzoku.md'
  ]
};

const vitePressSidebarConfig = [
  ...defineSupportLocales.map((lang) => {
    return {
      ...commonSidebarConfig,
      documentRootPath: defaultLocale === lang ? '/docs/' : `/${lang}/docs/`,
      resolvePath: defaultLocale === lang ? '/docs/' : `/${lang}/docs/`,
      ...(defaultLocale === lang ? {} : { basePath: `/${lang}/docs/` })
    };
  })
];

// https://vitepress.dev/reference/site-config
const vitePressConfig: UserConfig = {
  title: "Hachimi",
  description: "Game enhancement and translation mod for UM:PD",
  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}]
  ],
  themeConfig: {
    logo: "/assets/logo.png",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Screenshots', link: '/#screenshots' },
      { text: 'Docs', link: '/docs' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hachimi-Hachimi/Hachimi' },
      { icon: 'discord', link: 'https://discord.gg/BVEt5FcxEn' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi'
    },
    de: {
      label: 'Deutsch',
      lang: 'de'
    },
    'zh-cn': {
      label: '简体中文',
      lang: 'zh-cn'
    },
    'zh-tw': {
      label: '繁體中文',
      lang: 'zh-tw'
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id'
    },
    ja: {
      label: '日本語',
      lang: 'ja'
    }
  }
};

export default defineConfig(
  withSidebar(vitePressConfig, vitePressSidebarConfig)
);
