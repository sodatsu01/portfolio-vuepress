// .vuepress/config.js
module.exports = {
  head: [
    ['link', {href: '/css/style.css', rel: 'stylesheet'}]
  ],

  title: "sodatsu's portfolio",
  description: "Welcome to my portfolio site",

  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  theme: '',

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
