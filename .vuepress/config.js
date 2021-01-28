module.exports = {
  "title": "个人随笔",
  "description": "人生不可能总是顺心如意的，但是持续朝着阳光走，影子就会躲在后面。刺眼，却是对的方向。",
  "dest": "public",
  "base": '/',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "文档",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/GeekChenYi",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "爱分类",
        "desc": "前端基于React Hooks + TS + Ant Design搭建，后端基于Egg.js编写接口",
        "avatar": "https://geekchenyi.oss-cn-chengdu.aliyuncs.com/avatar/avatar-00.jpg",
        "link": "http://39.106.144.159:8012"
      },
      {
        "title": "爱分类H5",
        "desc": "基于Vue.js搭建的爱分类移动端H5",
        "avatar": "https://geekchenyi.oss-cn-chengdu.aliyuncs.com/avatar/avatar-01.jpeg",
        "link": "http://39.106.144.159:8010"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "GeekChenYi",
    "authorAvatar": "/avatar.jpg",
    "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
  "locales": {
    '/': {
      lang: 'zh-CN'
    }
  }
}