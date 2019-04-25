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
    name: "v-6368265c2cfe3",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\README.md").then(comp => {
        Vue.component("v-6368265c2cfe3", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-662a388010271",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\config\\README.md").then(comp => {
        Vue.component("v-662a388010271", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-1dbb4848591d1",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-1dbb4848591d1", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-e4d45423af91b",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\README.md").then(comp => {
        Vue.component("v-e4d45423af91b", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-32d77a8bee043",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-32d77a8bee043", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d3c574f413344",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-d3c574f413344", comp.default)
        next()
      })
    }
  },
  {
    name: "v-48d274bc5a7ce",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-48d274bc5a7ce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4cb21b67584ea",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-4cb21b67584ea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b9f3c7abb3eb8",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-b9f3c7abb3eb8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b50b05c35aeb",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-9b50b05c35aeb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9f78251654516",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-9f78251654516", comp.default)
        next()
      })
    }
  },
  {
    name: "v-68f3eebc3043",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-68f3eebc3043", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4ec33c526517f",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\README.md").then(comp => {
        Vue.component("v-4ec33c526517f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-c244368c88b51",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-c244368c88b51", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2f68317acfae5",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-2f68317acfae5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c9295cc726931",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-c9295cc726931", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3bd374b7c3f8b",
    path: "/zh/algorithm/Charpter7.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter7.md").then(comp => {
        Vue.component("v-3bd374b7c3f8b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e68196e743a35",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-e68196e743a35", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-b815300b74eb7",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-b815300b74eb7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-aa896f29085e2",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-aa896f29085e2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-345f7f74c295",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-345f7f74c295", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-c659fd900f52c",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-c659fd900f52c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3fdd6ea778929",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-3fdd6ea778929", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef2bee1d51204",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-ef2bee1d51204", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9e04b9f32e6ff",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-9e04b9f32e6ff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eba2e982ccd03",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-eba2e982ccd03", comp.default)
        next()
      })
    }
  },
  {
    name: "v-065d166bae55f",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-065d166bae55f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d6106a4e3f25",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-6d6106a4e3f25", comp.default)
        next()
      })
    }
  },
  {
    name: "v-51aea9fa93ba6",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-51aea9fa93ba6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1d4fa297fbc79",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-1d4fa297fbc79", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2915cdc65ee7e",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-2915cdc65ee7e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0da7f406c9c5a",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-0da7f406c9c5a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c43fc4419b52",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-c43fc4419b52", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c8cd1dde0d0e1",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-c8cd1dde0d0e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9876f6e91686a",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-9876f6e91686a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-d4fd1e07e5158",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-d4fd1e07e5158", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c867c1072afd7",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-c867c1072afd7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-712eccf97b011",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-712eccf97b011", comp.default)
        next()
      })
    }
  },
  {
    name: "v-47cf34bbb21ca",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-47cf34bbb21ca", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-be0a3aceab09e",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-be0a3aceab09e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-7a61bc04edcf3",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-7a61bc04edcf3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-4da503286698b",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-4da503286698b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-6a7368f493d4e",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-6a7368f493d4e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-76214d6a0f80b",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-76214d6a0f80b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3324d74512b31",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-3324d74512b31", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ab4d5b55ee2e",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-9ab4d5b55ee2e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c90ae0bce5f09",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-c90ae0bce5f09", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-869babada932b",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-869babada932b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-6dcd789ce4d9d",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-6dcd789ce4d9d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-9607b388dae61",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-9607b388dae61", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-c9731336518b3",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-c9731336518b3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-56ae783a829bb",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-56ae783a829bb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-7c8e840a3a3a7",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-7c8e840a3a3a7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-f1ea185b5b185",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-f1ea185b5b185", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-08579117b79d3",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-08579117b79d3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-15ba77f113dbf",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-15ba77f113dbf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-881873032aff8",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-881873032aff8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d46a300f7d1d2",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-d46a300f7d1d2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b2d02eb05d665",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-b2d02eb05d665", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b59f891767fd9",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-b59f891767fd9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d63ff31a05aeb",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-d63ff31a05aeb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-77e402a942c63",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-77e402a942c63", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-d1480163f6ef5",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-d1480163f6ef5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0884cc6b661c9",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-0884cc6b661c9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-60898e56d9fab",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-60898e56d9fab", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-5b4da6080b738",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-5b4da6080b738", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-7afc550bae2d3",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-7afc550bae2d3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-44a4f445e9015",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-44a4f445e9015", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-e4bf65d2a49",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-e4bf65d2a49", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5bed2f0d38532",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-5bed2f0d38532", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f235cae7a528a",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-f235cae7a528a", comp.default)
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