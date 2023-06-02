import { version } from '../../package.json';

export default {
    title: 'Reusable Accessible Mapping Platform Documentation',
    description: "Reusable Accessible Mapping Platform documentation",
    lang: 'en-CA',
    base: '/ramp4-docs/',
    srcDir: '../docs',
    outDir: '../vite-docs',
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
      logo: '../assets/logo.svg',
      lastUpdatedText: 'Last Updated',
      search: {
        provider: 'local'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/ramp4-pcar4/ramp4-pcar4' }
      ],
      nav: [
        {
          text: 'Overview',
          link: 'toc',
          activeMatch: '/' },
        {
          text: 'API Reference',
          link: 'https://sharvenp.github.io/ramp4-docs/api-tech-docs',
        },
        {
          text: version,
          items: [
            {
              text: 'Releases',
              link: 'https://github.com/ramp4-pcar4/ramp4-pcar4/releases'
            },
            {
              text: 'Past Version',
              link: '#'
            },
          ]
        }
      ]
    }
  }