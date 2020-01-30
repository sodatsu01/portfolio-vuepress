// .vuepress/config.js
module.exports = {
  head: [
    ['link', {href: '/css/style.css', rel: 'stylesheet'}]
  ],
  // Title of your website
  title: "sodatsu's portfolio",

  // Description of your website
  description: "Welcome to my portfolio site",

  // Language of your website
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  // Theme to use
  theme: '',

  // Theme config
  themeConfig: {
    lang: 'ja-JP',
    search: false,
    smoothScroll: true,
    footer: {
      contact: [
        {
          type: 'github',
          link: '',
        }
      ],
    },
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'About', link: '/about/', exact: false },
      { text: 'Works', link: '/works/', exact: false },
      { text: 'Github', link: 'https://github.com/sodatsu01', exact: false}
    ],
  },
}
