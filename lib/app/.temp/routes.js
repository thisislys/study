import Vue from 'vue'
Vue.component("Bit", () => import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-d43ed0db665f8",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\README.md").then(comp => {
        Vue.component("v-d43ed0db665f8", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-f0f6f70a2aed7",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\config\\README.md").then(comp => {
        Vue.component("v-f0f6f70a2aed7", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-a44844f3aae9a",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-a44844f3aae9a", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-f27fa77ed8aa",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\guide\\README.md").then(comp => {
        Vue.component("v-f27fa77ed8aa", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-5f520623c5944",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-5f520623c5944", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e0f3af2128629",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-e0f3af2128629", comp.default)
        next()
      })
    }
  },
  {
    name: "v-855d59fc46325",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-855d59fc46325", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f76b61befff1",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-8f76b61befff1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f9ebb9dbc8d07",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-f9ebb9dbc8d07", comp.default)
        next()
      })
    }
  },
  {
    name: "v-166f22b7658a5",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-166f22b7658a5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9883cd0d13e3f",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-9883cd0d13e3f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e9594015e5c2",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-7e9594015e5c2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-065d03c29136f",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\README.md").then(comp => {
        Vue.component("v-065d03c29136f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-a70859caf6e7a",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-a70859caf6e7a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b332e0243e6ae",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-b332e0243e6ae", comp.default)
        next()
      })
    }
  },
  {
    name: "v-89356cfea0ee3",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-89356cfea0ee3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3cd1f30b981f",
    path: "/zh/algorithm/Charpter7.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter7.md").then(comp => {
        Vue.component("v-3cd1f30b981f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-49cc68e279adc",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-49cc68e279adc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-6e913d5202a06",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-6e913d5202a06", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-e747928370104",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-e747928370104", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-d0d5cab2a2d37",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-d0d5cab2a2d37", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-f8671e1bf46d4",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-f8671e1bf46d4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a4d4cb2e7c85b",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-a4d4cb2e7c85b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-96351e19ea93",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-96351e19ea93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-525f03c27f60d",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-525f03c27f60d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5222f31fecfe8",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-5222f31fecfe8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-92f5150de57a4",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-92f5150de57a4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c33e2cf42fadf",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-c33e2cf42fadf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7d735e51b0089",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-7d735e51b0089", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b0f4dc0b057e4",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-b0f4dc0b057e4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a9496d4fc2a83",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-a9496d4fc2a83", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6ddc42fc2418d",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-6ddc42fc2418d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-27e0b0bcf8996",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-27e0b0bcf8996", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6c1f815c965f7",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-6c1f815c965f7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1fd2abbd92b43",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-1fd2abbd92b43", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-d207b44ad75d6",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-d207b44ad75d6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-76a418b48be9f",
    path: "/zh/interview/sum.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\sum.md").then(comp => {
        Vue.component("v-76a418b48be9f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6208868a89e44",
    path: "/zh/interview/sum2.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\sum2.md").then(comp => {
        Vue.component("v-6208868a89e44", comp.default)
        next()
      })
    }
  },
  {
    name: "v-718c650f6e2f7",
    path: "/zh/js/js.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\js\\js.md").then(comp => {
        Vue.component("v-718c650f6e2f7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ce5fab81208d2",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-ce5fab81208d2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-2b927d5953285",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-2b927d5953285", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2428fd7f5d3c",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-2428fd7f5d3c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-223e3c2f856ce",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-223e3c2f856ce", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-0bc6e1db24907",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-0bc6e1db24907", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-90d276bdce7ea",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-90d276bdce7ea", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-de56fd9985256",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-de56fd9985256", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-aaf08844ab37b",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-aaf08844ab37b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e126c7948ffa",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-8e126c7948ffa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2132ba4f4cdb7",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-2132ba4f4cdb7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a1c6186233007",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-a1c6186233007", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-79c58a1014971",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-79c58a1014971", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-5c516706a5e29",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-5c516706a5e29", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-c4c9640ef000e",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-c4c9640ef000e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-3232608ec41",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-3232608ec41", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2e4b1589f07f6",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-2e4b1589f07f6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-5d68b8fc92ed7",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-5d68b8fc92ed7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-339100d1161f",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-339100d1161f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-49f56dea2e63e",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-49f56dea2e63e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2134aca0e27f9",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-2134aca0e27f9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c2e219a292663",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-c2e219a292663", comp.default)
        next()
      })
    }
  },
  {
    name: "v-26f7eafc95b7e",
    path: "/zh/standard/SinglePageApplication.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\SinglePageApplication.md").then(comp => {
        Vue.component("v-26f7eafc95b7e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-06cc965077f1f",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-06cc965077f1f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2f50555a30c5e",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-2f50555a30c5e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e0d3c402f1e9",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-4e0d3c402f1e9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-38fa60ccf8ff",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-38fa60ccf8ff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-43c605362fb89",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-43c605362fb89", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-ba186f51e3f4d",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-ba186f51e3f4d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-150c4bc178129",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-150c4bc178129", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-0cf5c8616dd46",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-0cf5c8616dd46", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-62172510db467",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-62172510db467", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-9828247d65ee1",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-9828247d65ee1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-72c7a1b5133f5",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-72c7a1b5133f5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-5c7cb70854149",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-5c7cb70854149", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dbe2d1e6acb82",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-dbe2d1e6acb82", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e4aacac8944ec",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\2\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-e4aacac8944ec", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]