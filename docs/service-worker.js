/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c15395b37ef7ebc6f80f66f7c9771998"
  },
  {
    "url": "algorithm/4.14.png",
    "revision": "cf1dc1de181367a387ae85e21ba63bcb"
  },
  {
    "url": "algorithm/4.16.png",
    "revision": "b9570248ada2f2d08b4f7254dfc137ea"
  },
  {
    "url": "algorithm/4.18.png",
    "revision": "fe68fab74cb718d49725256a425aca8c"
  },
  {
    "url": "algorithm/4.7.png",
    "revision": "2ba4f71ac2ef37005d276c71b3b616dd"
  },
  {
    "url": "algorithm/4.8.png",
    "revision": "13b814c15b528867960c284b669076b3"
  },
  {
    "url": "algorithm/5.10.png",
    "revision": "c1b3fb127a670627bf4d7f71560adf47"
  },
  {
    "url": "algorithm/5.16.png",
    "revision": "1282750fa9e0bffc2c03b6f8462f0f72"
  },
  {
    "url": "algorithm/5.17.png",
    "revision": "6e8f75da2534dc3cd90fd9ce6c200484"
  },
  {
    "url": "algorithm/5.18.png",
    "revision": "219b65ef7fc12b8adaec7c67d36605c1"
  },
  {
    "url": "algorithm/5.7.png",
    "revision": "da5e156808eb65e6b25905ec045a8b1c"
  },
  {
    "url": "algorithm/6.1.png",
    "revision": "c9834a228d3f59eea885563f567a94d2"
  },
  {
    "url": "algorithm/6.13.png",
    "revision": "00134122ba8ccd4caf4d50c4ef41a72e"
  },
  {
    "url": "assets/css/0.styles.cecb3923.css",
    "revision": "55064e839828ebabcec8e27a2965b43f"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.c9abe944.js",
    "revision": "e66f4c3682f2e722c5852ac69950a57b"
  },
  {
    "url": "assets/js/11.fcceb6ca.js",
    "revision": "888bdef5fabcf19ac72e7fd9f35174d4"
  },
  {
    "url": "assets/js/12.bec8247a.js",
    "revision": "331f760b74fa70b06a2e8a81eb2cff9a"
  },
  {
    "url": "assets/js/13.6795f28f.js",
    "revision": "00bb953fe5e2446968059390076fecb7"
  },
  {
    "url": "assets/js/14.2ebead51.js",
    "revision": "0431edd727ebae0d0cee8ddde9d8c659"
  },
  {
    "url": "assets/js/15.a8b5d486.js",
    "revision": "5a9e1db83a9bbfadb88c2d87d60c239f"
  },
  {
    "url": "assets/js/16.3ac5a50c.js",
    "revision": "f054be967e64a828bb46e6d4fc111f36"
  },
  {
    "url": "assets/js/17.81b3f4f0.js",
    "revision": "25e4cf41b8937ec0f4fab7f3242c46ec"
  },
  {
    "url": "assets/js/18.53b40684.js",
    "revision": "c73e55542497499bcb7c22dbcdb51012"
  },
  {
    "url": "assets/js/19.68c3f11d.js",
    "revision": "bb109b34a5061fca1a931fe65a2fc35a"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.24d6dafc.js",
    "revision": "33810175684a4a03e8355bbc63e861a3"
  },
  {
    "url": "assets/js/21.669ca711.js",
    "revision": "35765efdc2a8ac7079eff4bd2a8e845f"
  },
  {
    "url": "assets/js/22.bc23c763.js",
    "revision": "080f2dd7e0421bb0e353029b39d569d4"
  },
  {
    "url": "assets/js/23.49d878f6.js",
    "revision": "313264b60022c174dcd5c8a0eb470cdd"
  },
  {
    "url": "assets/js/24.3884cb48.js",
    "revision": "e53650697401613b6dbffd16962caf5f"
  },
  {
    "url": "assets/js/25.f5cb9f55.js",
    "revision": "be02573f5dce6e6344edc3c51f34e3e3"
  },
  {
    "url": "assets/js/26.acbaf925.js",
    "revision": "bfa5fdf07908b106e48c5e357739d067"
  },
  {
    "url": "assets/js/27.6127eb6d.js",
    "revision": "aaba40a66608a15fe35cdfff3dd20c97"
  },
  {
    "url": "assets/js/28.0ac8be86.js",
    "revision": "4a5fa87704b3e4ad3e963e8a4a316ae8"
  },
  {
    "url": "assets/js/29.819ccac6.js",
    "revision": "9eef16162d6f94b305b57721ee70823f"
  },
  {
    "url": "assets/js/3.5f72c7b5.js",
    "revision": "6a613fd52a9137197fc83c584fd3b6d5"
  },
  {
    "url": "assets/js/30.1929680e.js",
    "revision": "bb165c658df34b796849018f51c5a134"
  },
  {
    "url": "assets/js/31.24c77d7e.js",
    "revision": "f68df2c08bce62f98d12ef3ea2a43e67"
  },
  {
    "url": "assets/js/32.0a310bd5.js",
    "revision": "1db53a17d564c241e713f15473b5d331"
  },
  {
    "url": "assets/js/33.6a3349e9.js",
    "revision": "0a920da11f55bf6c76069fc41e2b399d"
  },
  {
    "url": "assets/js/34.459a1fa9.js",
    "revision": "6bf53cb357e1c9031280f15fa576b35e"
  },
  {
    "url": "assets/js/35.18407149.js",
    "revision": "b13c61785252b79ff173a4b87ed75e88"
  },
  {
    "url": "assets/js/36.b0840ec8.js",
    "revision": "5b43387537c21a3e916a04a2271e9e5a"
  },
  {
    "url": "assets/js/37.a270384e.js",
    "revision": "8f7f0846478e9777a88bae5492ceedee"
  },
  {
    "url": "assets/js/38.c78a2bf3.js",
    "revision": "a4c42df5b5eb90eb4f764c409eb9e014"
  },
  {
    "url": "assets/js/39.26fe37e8.js",
    "revision": "18fa50ed82db7397ae4ef09c6fb81359"
  },
  {
    "url": "assets/js/4.9eb695d9.js",
    "revision": "01614442f546851db0a40e502ec160bf"
  },
  {
    "url": "assets/js/40.51eb2185.js",
    "revision": "e3fc5a63a3ed72503d67d11da84b9bb2"
  },
  {
    "url": "assets/js/41.a50025b8.js",
    "revision": "f42e629e40381566bacb7fb7e5e88542"
  },
  {
    "url": "assets/js/42.0708a344.js",
    "revision": "e71165c954567df0fa179b2ed9dcd8de"
  },
  {
    "url": "assets/js/43.82da63c6.js",
    "revision": "67fa7a7460429110f7d2ff2e715b54a6"
  },
  {
    "url": "assets/js/44.e9817c78.js",
    "revision": "f36df1fd2d03f0bbfd379f3a176dcf96"
  },
  {
    "url": "assets/js/45.69230089.js",
    "revision": "ed72f3353a8d21ae7db2af88c9fe6095"
  },
  {
    "url": "assets/js/46.b08769d6.js",
    "revision": "4750840dfa4b0e117c372ed5fc365bda"
  },
  {
    "url": "assets/js/47.197aac29.js",
    "revision": "5efa2843f3722ff1f89655cfe5fdbbeb"
  },
  {
    "url": "assets/js/48.bab69a58.js",
    "revision": "97911c00281620473287c237b179d705"
  },
  {
    "url": "assets/js/49.8cf39730.js",
    "revision": "0b2203f22bc7c1e726a709fb2ba2827c"
  },
  {
    "url": "assets/js/5.d2110d03.js",
    "revision": "2fba1b830af53cc228f258b65dcf1974"
  },
  {
    "url": "assets/js/50.18d57662.js",
    "revision": "e521a437ffd663b0e6d7f54111dfbaa9"
  },
  {
    "url": "assets/js/51.820b5f16.js",
    "revision": "e5c709cf5f080fb50345dad28278479b"
  },
  {
    "url": "assets/js/52.deb226df.js",
    "revision": "0659fb7423267ea3d41ff3d4b9c00ad3"
  },
  {
    "url": "assets/js/53.bbb78300.js",
    "revision": "bd820660719ebe5d761c4c5e862c7165"
  },
  {
    "url": "assets/js/54.20998e12.js",
    "revision": "5a6369d3351ead81f0930847be40e464"
  },
  {
    "url": "assets/js/55.a3062e66.js",
    "revision": "eb12a78384d1c456e97c0913e64201c1"
  },
  {
    "url": "assets/js/56.1a53f494.js",
    "revision": "e82d28e7ec89eece28263228ec4ae51e"
  },
  {
    "url": "assets/js/57.39c3e834.js",
    "revision": "ca3f5f6e68b8ea15180a39558ef7bbbe"
  },
  {
    "url": "assets/js/58.b1753342.js",
    "revision": "0367848c5347b8c8971a71c08979a857"
  },
  {
    "url": "assets/js/59.380e9cb7.js",
    "revision": "7344acd1d03f44010501c98e1dc4740e"
  },
  {
    "url": "assets/js/6.bef0375f.js",
    "revision": "2fa297059308764a9ed612b72af823a3"
  },
  {
    "url": "assets/js/60.a227423f.js",
    "revision": "77a5c04e99f99f92c183ae0c5cd93494"
  },
  {
    "url": "assets/js/61.d314b8ce.js",
    "revision": "09320c751bb8427531353531ed9516c3"
  },
  {
    "url": "assets/js/62.f21d4166.js",
    "revision": "5134b68634f8fc005db7773897f08a48"
  },
  {
    "url": "assets/js/63.33c8a661.js",
    "revision": "3a823de9eecd29566982d8f70ca31916"
  },
  {
    "url": "assets/js/64.37ed31b1.js",
    "revision": "80cd4e01ef76b8f4291d19d43142e03c"
  },
  {
    "url": "assets/js/65.caed61ea.js",
    "revision": "9d652dc7027ff61422428d2a824c0754"
  },
  {
    "url": "assets/js/66.c87bf235.js",
    "revision": "5420ce90a1a82c05b0745019fc52e054"
  },
  {
    "url": "assets/js/67.38e63c5c.js",
    "revision": "9271d5f602bd390ae5eed32c294b47e7"
  },
  {
    "url": "assets/js/68.fa874bc9.js",
    "revision": "ab38051c0a0376bfa3073e53bc354144"
  },
  {
    "url": "assets/js/69.6b78370b.js",
    "revision": "04bd54673ed36e27f25f632890e36093"
  },
  {
    "url": "assets/js/7.0151f8ae.js",
    "revision": "4ff231ad4599611249952f7021e30978"
  },
  {
    "url": "assets/js/70.9d5d6c4d.js",
    "revision": "74b90ee0b1b4dda32b2cd4231618e678"
  },
  {
    "url": "assets/js/71.949c3111.js",
    "revision": "0986c7b8bc52be2df0112eedba69b738"
  },
  {
    "url": "assets/js/72.5a3b8e67.js",
    "revision": "6325d93c8be7e5e8e817578a0279a7eb"
  },
  {
    "url": "assets/js/73.8a916d73.js",
    "revision": "51424ec5b830b1c9d4d38967229104f1"
  },
  {
    "url": "assets/js/74.b441d262.js",
    "revision": "d7356ecf788f235f9a145eafb55738f2"
  },
  {
    "url": "assets/js/75.2f2eb7dd.js",
    "revision": "683dd35bb389ba9d4483245e46078621"
  },
  {
    "url": "assets/js/76.3975ab6a.js",
    "revision": "7d1a129301e241cefde34c7246695bc7"
  },
  {
    "url": "assets/js/77.257361bd.js",
    "revision": "c8efde62c3f5696bb6b617425b6d12f9"
  },
  {
    "url": "assets/js/78.342f32e2.js",
    "revision": "b4dea47c6c8ad52f805dedf3f19a30e4"
  },
  {
    "url": "assets/js/8.6f43b257.js",
    "revision": "849c9c3f89ed3035e392f27442c78e75"
  },
  {
    "url": "assets/js/9.77ce49c1.js",
    "revision": "dfdf405518fe41d0009bc4c240fed5b7"
  },
  {
    "url": "assets/js/app.cf560aa8.js",
    "revision": "58643f06c87129d6433d71cbc2684a51"
  },
  {
    "url": "avatar.png",
    "revision": "ce9618c8366ea53d34df25789a7a6dc4"
  },
  {
    "url": "baidu.png",
    "revision": "e989d76137aa87abd8d4acfa195b499c"
  },
  {
    "url": "config/index.html",
    "revision": "6fd5b258df17682be531cd33a836afca"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "17573f32c30c53788933808a35b2e370"
  },
  {
    "url": "FastStoneEditor.jpg",
    "revision": "8b81b91fd9c0fdf5f2a1e0ac9bcbe60f"
  },
  {
    "url": "guide/assets.html",
    "revision": "5236c3a854993a4aa63a46760b195b55"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "7982761fcc978d9da182e56fefc6a373"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "d3e6bcc042ebd527caeb6eb39be42b7c"
  },
  {
    "url": "guide/deploy.html",
    "revision": "6bfadce2916ea8a3dc8701d745475401"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a98ccbc303aa5dee3311fa055eefce89"
  },
  {
    "url": "guide/i18n.html",
    "revision": "a888e7088f2a0d910ff2d00784e5f8a9"
  },
  {
    "url": "guide/index.html",
    "revision": "904f11d4aff493482c603054c3b4c0c2"
  },
  {
    "url": "guide/markdown.html",
    "revision": "820f9afb691e74ef6b6509215ac2c9f6"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "7752d5f3e0ee03f0b61235e82f6d2e6e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "img/improve.png",
    "revision": "4e9abff75630811f884a22e0e6094d21"
  },
  {
    "url": "index.html",
    "revision": "4d1e6cfde7b9ac1ae5c59df4cfd2b9cb"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "a28c97fd597f0728c30445301580579b"
  },
  {
    "url": "project.jpg",
    "revision": "9837b50e98c7c106a49bc62d593e91e6"
  },
  {
    "url": "zh/algorithm/Charpter4.html",
    "revision": "05bde303149f6cd469d382d3b191d451"
  },
  {
    "url": "zh/algorithm/Charpter5.html",
    "revision": "73c64e9da0199cf1da7476782ed6644e"
  },
  {
    "url": "zh/algorithm/Charpter6.html",
    "revision": "646a6c4d4d6cf9c848b77831dd3148fe"
  },
  {
    "url": "zh/algorithm/Charpter7.html",
    "revision": "05baf98cbdc9610c2d0173ac6b2b7fec"
  },
  {
    "url": "zh/algorithm/index.html",
    "revision": "15e2a8534a27c9eb43b81f8bad9e2883"
  },
  {
    "url": "zh/config/index.html",
    "revision": "194997ea9d47724f750c5f2f034d7aaa"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "c4127c08bea845467f8dce7b9c354241"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "1b835616c1993dbf6a0145c82d0ac16c"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "396bfe8a7886ccd173a6669fd49975e0"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "d61ee7eb53ba6107c51462ffc7e8c9e5"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "db8bed501c481850ceabed4d34bbef06"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "79939312b5dbfb0db41c5c213a8e9b4c"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "8293cae672ee929ad1eeb6f9882bf5d7"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "280bee1038ec05059ffd6738b9ea2c5b"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "f5d324624c8ca0f5f0463a4e4e3b2f95"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "bb0d4fab6d49216d69172bd90d9c3427"
  },
  {
    "url": "zh/index.html",
    "revision": "ad58d76d1466b2e797629a92d828f4e4"
  },
  {
    "url": "zh/interface/BlackMarket.html",
    "revision": "9edef893765cde18069cb55a18175670"
  },
  {
    "url": "zh/interface/Mind.html",
    "revision": "2d5b73e1add790b944b87e89174d995d"
  },
  {
    "url": "zh/interface/TouTiao.html",
    "revision": "139c44acc39a689454cc083ece46c21c"
  },
  {
    "url": "zh/interface/Yuedu.html",
    "revision": "daa3016be657fd60481490bfada9dd35"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "5428ba23647522bfa57698f0e44df808"
  },
  {
    "url": "zh/interview/index.html",
    "revision": "16979325dc31e42e2018e8e90da41122"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "b6752e72ac5f2df792c334b1de7372b2"
  },
  {
    "url": "zh/interview/sum.html",
    "revision": "0b2a5811605714bd3a547c63cb6e1a17"
  },
  {
    "url": "zh/interview/sum2.html",
    "revision": "e5aaa2f2eb356d100de336044e225527"
  },
  {
    "url": "zh/js/js.html",
    "revision": "0ae2ab58592491af3817cec8b36492d5"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "ee65e3efea903d77cc07478425d1534c"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "dba7bc8d7a3c6a942652d83d1c921135"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "3aeedba1879c2debd6b059a6b380fada"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "92a4f8e9e9c2d95aeb9248fa7ae762e4"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "9a138db6fecff74b9e493167011255ae"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "ef19c5d3047dd6cae6c69fe3f1d690c8"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "d51fe7bc58f7a62020379edba0176765"
  },
  {
    "url": "zh/react/index.html",
    "revision": "0f77499e963c21d3c7104097597530cd"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "a568a559d90504ba666af667e9dc137c"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "def56e57e2428ba8f07c81064376d757"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "8ec7a6f668746e014385c25624797713"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "ee7e556b8cbcf6f27026269e94113b6d"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "358d498aabb393dc58dee0c2535beb09"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "f94d70786e7e9a1ec9f7695ef0e4ec37"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "92c0c700b8e153277d6779c812a380e2"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "7bf3c5738f0b58c714d5d77a0c7c6acc"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "4b798bd81b975e53d1a4d72854d5bf14"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "5b9305825634fcc8339d37c73e9a8d45"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "974a128e043bb3b636f466b7bfcd2377"
  },
  {
    "url": "zh/standard/Cooperation.html",
    "revision": "ab3f84e686f88fa5a180f4e58a1432a4"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "deeb3cca920fce2c7fdb74c2d696ee6b"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "2102965f7d8901e4494bb65105a25bf9"
  },
  {
    "url": "zh/standard/Start.html",
    "revision": "4411a475ae431d2f3a9a47e044ddd589"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "fac34ce6e5aaf916a53c31e4f8ea71e6"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "9233996ae21490d9d12a6abd918cca5c"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "f1b7dff634678a984c1d0100fc209bd7"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "43622b05f1dd004d5a6865ee831389d9"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "adae5e90b628306a34658676dd14c351"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "fff79c818f588d092e65c7ef265f9254"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "2f77ec9324e9af43d80ee1fe708404f1"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "00046248e7d68067c445f5b46426f77b"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "57cd8e753ad5b801594cfd0902327d2c"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "36fbc80eaaef44318e007565cdd89024"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "0fd5b30cc70a08cba89023134a0bb357"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "51634bc6e3670686d4f27b640d6d8dfe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
