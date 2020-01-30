// .vuepress/config.js
module.exports = {
  // Title of your website
  title: "sodatsu's portfolio",

  // Description of your website
  description: "This is sodatsu's portfolio site",

  // Language of your website
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: 'ja-JP',

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'sodatsu',

      // Introduction of yourself (HTML supported)
      description: 'Programmer</br>',

      // Email
      email: 'darumasanga.koronda@gmail.com',

      // Your location
      location: 'Tokyo, Japan',

      // Your organization
      organization: 'Jobless',

      // Your avatar image
      // Set to external link
      avatar: '/img/icon.jpeg',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: 'sodatsu01',
          link: 'https://github.com/sodatsu01',
        },

        // Facebook account and link
        // facebook: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.facebook.com/meteorlxy.cn',
        // },

        // LinkedIn account and link
        // linkedin: {
        //   account: 'meteorlxy',
        //   link: 'http://www.linkedin.com/in/meteorlxy',
        // },

        // Twitter account and link
        twitter: {
          account: 'PokerSodatsu',
          link: 'https://twitter.com/PokerSodatsu',
        },

        // Sina Weibo account and link
        // weibo: {
        //   account: '@焦炭君_Meteor',
        //   link: 'https://weibo.com/u/2039655434',
        // },

        // Zhihu account and link
        // zhihu: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.zhihu.com/people/meteorlxy.cn',
        // },

        // Douban account and link
        // douban: {
        //   account: '159342708',
        //   link: 'https://www.douban.com/people/159342708',
        // },

        // Reddit account and link
        // reddit: {
        //   account: 'meteorlxy',
        //   link: 'https://www.reddit.com/user/meteorlxy',
        // },

        // Medium account and link
        // medium: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://medium.com/@meteorlxy.cn',
        // },

        // Instagram account and link
        // instagram: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.instagram.com/meteorlxy.cn',
        // },

        // GitLab account and link
        // gitlab: {
        //   account: 'meteorlxy',
        //   link: 'https://gitlab.com/meteorlxy',
        // },

        // Bitbucket account and link
        // bitbucket: {
        //   account: 'meteorlxy',
        //   link: 'https://bitbucket.org/meteorlxy',
        // },

        // Docker Hub account and link
        // docker: {
        //   account: 'meteorlxy',
        //   link: 'https://hub.docker.com/u/meteorlxy',
        // },

        // CSDN account and link
        // csdn: {
        //   account: '',
        //   link: 'https://www.csdn.net/',
        // },

        // Juejin account and link
        // juejin: {
        //   account: 'meteorlxy',
        //   link: 'https://juejin.im/user/5c6fa9dde51d453fcb7baf09',
        // },
      },
    },

    // Header Config (Optional)
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: false,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Footer Config (Optional)
    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
      poweredBy: true,

      // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
      poweredByTheme: true,

      // Add your custom footer (HTML supported)
      custom: 'Copyright 2020-present <a href="https://github.com/sodatsu01" target="_blank">sodatsu</a> | MIT License',
    },

    // Info Card Config (Optional)
    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: false,
      },
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
    ],

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: 'sodatsu',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },

    // Pagination config (Optional)
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}
