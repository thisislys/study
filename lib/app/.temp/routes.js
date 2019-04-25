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
    name: "v-104245137c39f",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\README.md").then(comp => {
        Vue.component("v-104245137c39f", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-2091ec45eb3d2",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\config\\README.md").then(comp => {
        Vue.component("v-2091ec45eb3d2", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-4b80fd899e45b",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-4b80fd899e45b", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-94122ab83f019",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\README.md").then(comp => {
        Vue.component("v-94122ab83f019", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-51c5ec13027d1",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-51c5ec13027d1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7590e956c3903",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-7590e956c3903", comp.default)
        next()
      })
    }
  },
  {
    name: "v-77dae7128553",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-77dae7128553", comp.default)
        next()
      })
    }
  },
  {
    name: "v-23b9b3c1fa3b",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-23b9b3c1fa3b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1ef05729bb953",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-1ef05729bb953", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dd8680b3b7e81",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-dd8680b3b7e81", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d2574dd1c9f73",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-d2574dd1c9f73", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f6b06404da216",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-f6b06404da216", comp.default)
        next()
      })
    }
  },
  {
    name: "v-896619cefc8a8",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\README.md").then(comp => {
        Vue.component("v-896619cefc8a8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-f6cc474f3984c",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-f6cc474f3984c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-700d8c05c6827",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-700d8c05c6827", comp.default)
        next()
      })
    }
  },
  {
    name: "v-da7d434431067",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-da7d434431067", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fd82175e78c57",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-fd82175e78c57", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-d6056c95591e",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-d6056c95591e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-a981a292a27a4",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-a981a292a27a4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-2c3758ae8170e",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-2c3758ae8170e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-c61be889299bd",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-c61be889299bd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3f9f05d1320df",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-3f9f05d1320df", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2a0b2398ae3c6",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-2a0b2398ae3c6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b43bf751a8d3d",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-b43bf751a8d3d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc863887fcd9d",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-cc863887fcd9d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-114b466c981af",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-114b466c981af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f2fe30e0e2216",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-f2fe30e0e2216", comp.default)
        next()
      })
    }
  },
  {
    name: "v-890f014435295",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-890f014435295", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aa0d17ebba7ea",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-aa0d17ebba7ea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5bf5a37ec5e92",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-5bf5a37ec5e92", comp.default)
        next()
      })
    }
  },
  {
    name: "v-21c510adb7ebc",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-21c510adb7ebc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-17b2115c2fed8",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-17b2115c2fed8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2f97b78957c",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-2f97b78957c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4236a2474d764",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-4236a2474d764", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-4d4b2691eedaa",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-4d4b2691eedaa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-30287e4be0b7f",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-30287e4be0b7f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-da0481d490463",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-da0481d490463", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eb575b7e59eb3",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-eb575b7e59eb3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-defd35e59808f",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-defd35e59808f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-4b5960d576641",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-4b5960d576641", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b3db2369dedf4",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-b3db2369dedf4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-ed4973852fddc",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-ed4973852fddc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-a46e2ed6c6bbd",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-a46e2ed6c6bbd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-67a129539fa9e",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-67a129539fa9e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d123f79f66282",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-d123f79f66282", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cea6f8ee0536b",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-cea6f8ee0536b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-353cff8dddb2a",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-353cff8dddb2a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-dd406b3847b23",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-dd406b3847b23", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-7ee1c3d2dc661",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-7ee1c3d2dc661", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-af33abdf2f026",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-af33abdf2f026", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1382d5bda5cb",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-1382d5bda5cb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-f336f91befb52",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-f336f91befb52", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-a2c5d1788fbec",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-a2c5d1788fbec", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-6bda388abfb68",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-6bda388abfb68", comp.default)
        next()
      })
    }
  },
  {
    name: "v-79f7e4e46af38",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-79f7e4e46af38", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4f9b097e3638f",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-4f9b097e3638f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c8fa83d2c47c5",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-c8fa83d2c47c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-08f8d6f7b3254",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-08f8d6f7b3254", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2e2e527f7fdb5",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-2e2e527f7fdb5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cb29e5acaf985",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-cb29e5acaf985", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5180205c180a4",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-5180205c180a4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-9028632527438",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-9028632527438", comp.default)
        next()
      })
    }
  },
  {
    name: "v-40ee3c0072736",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-40ee3c0072736", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-a648461b6a117",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-a648461b6a117", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-dba3e70a17788",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-dba3e70a17788", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-f66d157971079",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-f66d157971079", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-baa724b896418",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-baa724b896418", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-a9df1d2a0b90d",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-a9df1d2a0b90d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2a5b578789647",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-2a5b578789647", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d5c98bd0d7047",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-d5c98bd0d7047", comp.default)
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