module.exports = {
  title: `yong313.com`,
  description: `전용태의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://yong313.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `전용태`,
    bio: {
      role: `개발자`,
      description: ['이로운 것을 만드는', '새로운 도약을 꿈꾸는', '열정적인 자세의'],
      thumbnail: 'main.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/yong313`,
      linkedIn: ``, 
      email: `wjsdydxo45@naver.com`, 
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.12 ~ 2022.01',
        activity: '생드백 프로젝트 개발 및 운영',
        links: {
          post: '',
          github: 'https://github.com/thandbag/thandbag_FE',
          demo: 'https://thandbag.com/',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '항해99 실전프로젝트 - 생드백',
        description:
          `Think와 ThandBag의 합성어 생드백이라는 이름으로, 일상 생활속에서 받은 스트레스, 고민을 샌드백을 때리면서 재미있게 풀 수 있는 스트레스 해소 서비스를 기획, 개발, 배포하였습니다.`,
        techStack: ['react', 'redux', 'pwa', 'amazon s3'],
        thumbnailUrl: 'thandbag_play.gif',
        links: {
          post: '',
          github: 'https://github.com/thandbag/thandbag_FE',
          demo: 'https://thandbag.com/',
        },
      },
    ],
  },
};
