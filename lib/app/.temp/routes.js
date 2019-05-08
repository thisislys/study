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
    name: "v-100c010570d8",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\README.md").then(comp => {
        Vue.component("v-100c010570d8", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-19281cd12d9e2",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\config\\README.md").then(comp => {
        Vue.component("v-19281cd12d9e2", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-9aef6aba0ed39",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-9aef6aba0ed39", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-d6915268ff1be",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\README.md").then(comp => {
        Vue.component("v-d6915268ff1be", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-6c1a5b1c0d2d5",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-6c1a5b1c0d2d5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ac8ad00b93e5",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-9ac8ad00b93e5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-262755eafce3b",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-262755eafce3b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-880b51f2a12d5",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-880b51f2a12d5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f941022e11cca",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-f941022e11cca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9f837d9750c3a",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-9f837d9750c3a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-858fafbe52198",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-858fafbe52198", comp.default)
        next()
      })
    }
  },
  {
    name: "v-be6040318d325",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-be6040318d325", comp.default)
        next()
      })
    }
  },
  {
    name: "v-20ee6a2895b8e",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\README.md").then(comp => {
        Vue.component("v-20ee6a2895b8e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-65ce3febe8a03",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-65ce3febe8a03", comp.default)
        next()
      })
    }
  },
  {
    name: "v-92edeedd07123",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-92edeedd07123", comp.default)
        next()
      })
    }
  },
  {
    name: "v-415daa333682",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-415daa333682", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e3285cb3394",
    path: "/zh/algorithm/Charpter7.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Charpter7.md").then(comp => {
        Vue.component("v-4e3285cb3394", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aa0bb9c835eba",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-aa0bb9c835eba", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-8da76476c7f63",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-8da76476c7f63", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-08bbadc10bae7",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-08bbadc10bae7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-e4e7510ac7dd2",
    path: "/zh/diff/diff.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\diff\\diff.md").then(comp => {
        Vue.component("v-e4e7510ac7dd2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-66ca78dc4a4e5",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-66ca78dc4a4e5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-d6f0629a0419c",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-d6f0629a0419c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ce5600c35880f",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-ce5600c35880f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0c59a557f92cc",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-0c59a557f92cc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b54a990e7beb4",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-b54a990e7beb4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d708592f75bb",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-6d708592f75bb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-64e343695f93",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-64e343695f93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0ac8f62f2feb3",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-0ac8f62f2feb3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2178feff38336",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-2178feff38336", comp.default)
        next()
      })
    }
  },
  {
    name: "v-25d68da88a5a7",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-25d68da88a5a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d4b4d91dae7c5",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-d4b4d91dae7c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7f4157c72750c",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-7f4157c72750c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8769984f8357",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-8769984f8357", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d38c8a98e55e6",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-d38c8a98e55e6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c8dc970d13ea2",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-c8dc970d13ea2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-a2507c996e279",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-a2507c996e279", comp.default)
        next()
      })
    }
  },
  {
    name: "v-71fc74d80c4a8",
    path: "/zh/interview/sum.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\sum.md").then(comp => {
        Vue.component("v-71fc74d80c4a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5f65352d17129",
    path: "/zh/interview/sum2.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\interview\\sum2.md").then(comp => {
        Vue.component("v-5f65352d17129", comp.default)
        next()
      })
    }
  },
  {
    name: "v-079cae5b70705",
    path: "/zh/js/js.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\js\\js.md").then(comp => {
        Vue.component("v-079cae5b70705", comp.default)
        next()
      })
    }
  },
  {
    name: "v-73f4ac96bb8e7",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-73f4ac96bb8e7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-6bb34004866fe",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-6bb34004866fe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4900fddbce28d",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-4900fddbce28d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-ad86d8583b23c",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-ad86d8583b23c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-15251fda0cc43",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-15251fda0cc43", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-2657057a4ca35",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-2657057a4ca35", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-aacc0740eeaa4",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-aacc0740eeaa4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-7ad90012fc7da",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-7ad90012fc7da", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e4a8bfd61cd85",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-e4a8bfd61cd85", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ee7551192aa08",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-ee7551192aa08", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5fc49b55aa389",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-5fc49b55aa389", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-30950f7efbee4",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-30950f7efbee4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-5c4cf8f227f5e",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-5c4cf8f227f5e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-a52be2f77dbfe",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-a52be2f77dbfe", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-d22fb2f98cd9b",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-d22fb2f98cd9b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e4031a1262a3",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-7e4031a1262a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-1b729f59f08d8",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-1b729f59f08d8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-c00b1185037c8",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-c00b1185037c8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-6e951d77f4e7d",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-6e951d77f4e7d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3a602cf73ed8b",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-3a602cf73ed8b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-15e7fdaba71c6",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-15e7fdaba71c6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b3f798b3317bf",
    path: "/zh/standard/SinglePageApplication.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\SinglePageApplication.md").then(comp => {
        Vue.component("v-b3f798b3317bf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-652d938bad1ba",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-652d938bad1ba", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f50ab98854095",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-f50ab98854095", comp.default)
        next()
      })
    }
  },
  {
    name: "v-17ec3f04d9b44",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-17ec3f04d9b44", comp.default)
        next()
      })
    }
  },
  {
    name: "v-217801f41a494",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-217801f41a494", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d4b792e0d6cb",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-d4b792e0d6cb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-6937b1aeec588",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-6937b1aeec588", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d8830978d247f",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-d8830978d247f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-1e40905e5b4e2",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-1e40905e5b4e2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-f306af5a0236f",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-f306af5a0236f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-0be5455535195",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-0be5455535195", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-adca461e72388",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-adca461e72388", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-0957e6d5e01f9",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-0957e6d5e01f9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9c729e810e691",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-9c729e810e691", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5892af8819fe1",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\梁元\\Desktop\\练习\\study\\Front-end-knowledge-summary\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-5892af8819fe1", comp.default)
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