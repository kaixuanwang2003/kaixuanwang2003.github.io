import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    website: "https://kaixuanwang2003.github.io",
    title: "Kaixuan Wang",
    subtitle: "Embodied AI",
    author: "Kaixuan Wang",
    description: "Kaixuan Wang's homepage. Ph.D. student at The University of Hong Kong working on Embodied AI.",
    navLinks: [
      // 导航链接
      { name: 'Home', href: '/' },
      // Blog hidden for now; uncomment to restore
      // { name: 'Blog', href: '/archive' },
    ],
    socialLinks: [
      { name: 'email', href: 'mailto:kxwangzju@gmail.com' },
      { name: 'github', href: 'https://github.com/kaixuanwang2003' },
      { name: 'scholar', href: 'https://scholar.google.com/citations?user=Q3AOnE8AAAAJ' },
    ],
    footer: [
      // 页脚信息
      '© %year <a target="_blank" href="%website">%author</a>',
      'Theme <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a>',
    ],
  },
  appearance: {
    locale: 'en-us',
  },
  seo: {
    twitter: '',
    meta: [
      {
        name: 'keywords',
        content: 'Kaixuan Wang,embodied ai,robotics,robot manipulation,vision-language-action,VLA,benchmark,simulation,computer vision,HKU,MMLab,Zhejiang University'
      },
      {
        name: 'subject',
        content: 'Embodied AI, Robotics, Computer Vision'
      },
      {
        name: 'author',
        content: 'Kaixuan Wang'
      },
      {
        name: 'robots',
        content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
      },
      // Google站点验证（需要你去Google Search Console获取）
      // { name: 'google-site-verification', content: 'your-verification-code' },
    ],
    link: [
      { rel: 'canonical', href: 'https://kaixuanwang2003.github.io/' },
      { rel: 'me', href: 'https://github.com/kaixuanwang2003' },
    ],
  },
  latex: {
    katex: true,
  },
}
