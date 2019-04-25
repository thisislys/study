import Vue from 'vue'
Vue.component("Bit", () => import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-fddc1202c9c4",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\README.md").then(comp => {
        Vue.component("v-fddc1202c9c4", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-c3b1fb4629d15",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\config\\README.md").then(comp => {
        Vue.component("v-c3b1fb4629d15", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-6fdadd9740f0c",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-6fdadd9740f0c", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-2a7bc70c34104",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\README.md").then(comp => {
        Vue.component("v-2a7bc70c34104", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-79c95b8bca5bb",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-79c95b8bca5bb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-edf544ca626c1",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-edf544ca626c1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f56cf4fe40e74",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-f56cf4fe40e74", comp.default)
        next()
      })
    }
  },
  {
    name: "v-42dc0d6ce89d1",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-42dc0d6ce89d1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-56e952df2c9f1",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-56e952df2c9f1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-353bb04016ab8",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-353bb04016ab8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-376ea53390f14",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-376ea53390f14", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc4a157cba334",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-bc4a157cba334", comp.default)
        next()
      })
    }
  },
  {
    name: "v-74e37b14f2579",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\README.md").then(comp => {
        Vue.component("v-74e37b14f2579", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-a19589cf1c2ef",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-a19589cf1c2ef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2872e5ff97ffb",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-2872e5ff97ffb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c002c9e85e71b",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-c002c9e85e71b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c08c0aaa0542d",
    path: "/zh/algorithm/Charpter7.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter7.md").then(comp => {
        Vue.component("v-c08c0aaa0542d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-71e22b20a87c7",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-71e22b20a87c7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-0294d5a24ec88",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-0294d5a24ec88", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-8571c40e1813d",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-8571c40e1813d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-f315b6e3c714f",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-f315b6e3c714f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-e8a084f485372",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-e8a084f485372", comp.default)
        next()
      })
    }
  },
  {
    name: "v-86bd9120e0ca",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-86bd9120e0ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-99cc2ffeeaf6e",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-99cc2ffeeaf6e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-01f90fd246af9",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-01f90fd246af9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e29f6f0c65196",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-e29f6f0c65196", comp.default)
        next()
      })
    }
  },
  {
    name: "v-26a23b64c3278",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-26a23b64c3278", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b4602122c12e8",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-b4602122c12e8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a5e73630b161d",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-a5e73630b161d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5083c0bf7b11b",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-5083c0bf7b11b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-495524c1738ab",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-495524c1738ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fd24dbf4a9b04",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-fd24dbf4a9b04", comp.default)
        next()
      })
    }
  },
  {
    name: "v-71e9cc7eaaffe",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-71e9cc7eaaffe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6346f9ca102a",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-6346f9ca102a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d5c1d4f007372",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-d5c1d4f007372", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-dd1e6919fd66a",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-dd1e6919fd66a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b847caa0e6a8b",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-b847caa0e6a8b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-464a155484acb",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-464a155484acb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-db80515b9f086",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-db80515b9f086", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-2307a314d6b79",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-2307a314d6b79", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-cd946f051b24a",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-cd946f051b24a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-7ed0d82f76642",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-7ed0d82f76642", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-bfc793f437d",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-bfc793f437d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-8606a686f9748",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-8606a686f9748", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e1aaa8bb28b2",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-7e1aaa8bb28b2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0d9397d11abf3",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-0d9397d11abf3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f32204b433044",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-f32204b433044", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-65cd50f7465f8",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-65cd50f7465f8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-72c907f685cf",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-72c907f685cf", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-a936962c52f7f",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-a936962c52f7f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-0921856cc8bf8",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-0921856cc8bf8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d3ae873186af7",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-d3ae873186af7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-5b52cba7d7cab",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-5b52cba7d7cab", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-87b063fd66a56",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-87b063fd66a56", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-e9708d7f6e65e",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-e9708d7f6e65e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-064c8c5083b8",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-064c8c5083b8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-81f806c4c080c",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-81f806c4c080c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-37b4c6814083f",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-37b4c6814083f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7888837a20cd",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-7888837a20cd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5080bc1fe4db",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-5080bc1fe4db", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ea8d4a08e85e1",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-ea8d4a08e85e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-093860afbf2a3",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-093860afbf2a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-43de6d96d3e1",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-43de6d96d3e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d1fe5915c575",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-6d1fe5915c575", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-7a44fea08eb55",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-7a44fea08eb55", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-246cf9cc3fb8f",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-246cf9cc3fb8f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-f711329a53a65",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-f711329a53a65", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-8882067043dde",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-8882067043dde", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-fa09cacb613c4",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-fa09cacb613c4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2d3da063cffbc",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-2d3da063cffbc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ed6b25160859",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-9ed6b25160859", comp.default)
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