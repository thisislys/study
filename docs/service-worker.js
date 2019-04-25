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
    "revision": "5c904051980d9efc1bbb33846baf8ee7"
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
    "url": "assets/js/10.b81d562a.js",
    "revision": "39ecee5c5fdd2b11b6eac0f06898ef99"
  },
  {
    "url": "assets/js/11.1fad785e.js",
    "revision": "687b68507ab5296a2176ba5a4798b0ac"
  },
  {
    "url": "assets/js/12.118c439f.js",
    "revision": "850046b669cf361317ca52b932cc0244"
  },
  {
    "url": "assets/js/13.762a6dac.js",
    "revision": "c0564cd52f26b5e5ba393e1ba4a79f36"
  },
  {
    "url": "assets/js/14.6f917f73.js",
    "revision": "ca9334b0a10cc72baf8f1636880ce3dd"
  },
  {
    "url": "assets/js/15.8fc11cdd.js",
    "revision": "1e0409a2d8a7ab35726a0fc0531f866c"
  },
  {
    "url": "assets/js/16.a171284c.js",
    "revision": "8e88fd2dfc6e458a2b2adb6abaf072f4"
  },
  {
    "url": "assets/js/17.432cbe1a.js",
    "revision": "68038d5762577134e93b7d7d29ef8880"
  },
  {
    "url": "assets/js/18.41fe02b0.js",
    "revision": "f80468a5d83a0056bd3a80fa7730b5ef"
  },
  {
    "url": "assets/js/19.b758c31d.js",
    "revision": "24c24b9a5973d30cc96b10913b5e2ce0"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.118b65e8.js",
    "revision": "611179618263eb52758489c07a0c5fdb"
  },
  {
    "url": "assets/js/21.421a3a51.js",
    "revision": "6fc98feb81b3e334d21ff7834c754d02"
  },
  {
    "url": "assets/js/22.e2de0f66.js",
    "revision": "992dca0bc0c4fa33896b6da695c6099f"
  },
  {
    "url": "assets/js/23.a770d102.js",
    "revision": "1bde6113a6f992412bf6cab3125cdb09"
  },
  {
    "url": "assets/js/24.7f8a370e.js",
    "revision": "e53650697401613b6dbffd16962caf5f"
  },
  {
    "url": "assets/js/25.13f3e194.js",
    "revision": "a03a2b663f37d60c93e39ed3dfe29b05"
  },
  {
    "url": "assets/js/26.3f95fafb.js",
    "revision": "9b502d9f2909bcb8ecd9dac650bcb69d"
  },
  {
    "url": "assets/js/27.88953dec.js",
    "revision": "07c652835dc6cdf2d21089e8987e581e"
  },
  {
    "url": "assets/js/28.0debf49f.js",
    "revision": "551fe07a9610d4a547f502fad73eaba8"
  },
  {
    "url": "assets/js/29.e2047787.js",
    "revision": "221f14a8ebcf6be8da4c978eff1326d6"
  },
  {
    "url": "assets/js/3.956efdeb.js",
    "revision": "97770ade56b128c6bf01141b143d1d41"
  },
  {
    "url": "assets/js/30.18a6b331.js",
    "revision": "c5e1f8e6453025d80d3fced8e28dcba0"
  },
  {
    "url": "assets/js/31.c0c4ef64.js",
    "revision": "ff50b4bed55af3b91a8c0179b1a69ca3"
  },
  {
    "url": "assets/js/32.1e30de5a.js",
    "revision": "9b3cea81b634d411b6b7cde6e75dd867"
  },
  {
    "url": "assets/js/33.6048f5a9.js",
    "revision": "1c771bf9295c9b867198252742208e77"
  },
  {
    "url": "assets/js/34.c9105929.js",
    "revision": "65a670bbd91706705cec35af5eefafec"
  },
  {
    "url": "assets/js/35.b271675c.js",
    "revision": "888e4e84be84eabd9e7f6a9d51a5416a"
  },
  {
    "url": "assets/js/36.07a0bc47.js",
    "revision": "b50135e0c6830d278bb49500fd7d6382"
  },
  {
    "url": "assets/js/37.8e941b12.js",
    "revision": "b37b57ff9f8cc4fe71b4b434c22c9049"
  },
  {
    "url": "assets/js/38.3205b93b.js",
    "revision": "bab3eadbd6f1a60a057afa779689ff0d"
  },
  {
    "url": "assets/js/39.14cc0e49.js",
    "revision": "389b7de350508fba55a87e0d393cb5da"
  },
  {
    "url": "assets/js/4.ca5e78a4.js",
    "revision": "135682a46214ca1ac855222465584310"
  },
  {
    "url": "assets/js/40.a8735aec.js",
    "revision": "aace7fba18c2e56097f91e38873e5962"
  },
  {
    "url": "assets/js/41.1b2e36ef.js",
    "revision": "132dcba50529915239cddc6b4365aa41"
  },
  {
    "url": "assets/js/42.1999abd2.js",
    "revision": "e679dd391bb77c5566e19973052162f8"
  },
  {
    "url": "assets/js/43.a8945865.js",
    "revision": "9d093a295ab938efb9248990585454c0"
  },
  {
    "url": "assets/js/44.d81a5540.js",
    "revision": "51ea790878ab381f4249c04be40df1f4"
  },
  {
    "url": "assets/js/45.b8cb2f48.js",
    "revision": "d4c2c8070f7bc8bbd0b1a0a2d36cf604"
  },
  {
    "url": "assets/js/46.fdd61a8c.js",
    "revision": "4f3de96b00d0e8ee1772949f4b49764c"
  },
  {
    "url": "assets/js/47.69bfd429.js",
    "revision": "c89b7502f212c640da1b0a68b5a218f7"
  },
  {
    "url": "assets/js/48.04a91514.js",
    "revision": "4d19e5d48e9df00e9c36fb651baa0e38"
  },
  {
    "url": "assets/js/49.213d093d.js",
    "revision": "7e6a07359e68ab68d1ce36aec9513843"
  },
  {
    "url": "assets/js/5.86af8c8a.js",
    "revision": "5a6759ddbf73222c3e72044abecfbfad"
  },
  {
    "url": "assets/js/50.740fbdf6.js",
    "revision": "86e86bd6ec272e8257bb57654964aca1"
  },
  {
    "url": "assets/js/51.3d0845e7.js",
    "revision": "f980cf5165e9d5f81efee369f545c9f6"
  },
  {
    "url": "assets/js/52.c71733b6.js",
    "revision": "8a9c211baf377141ce9dc94c32e1bf62"
  },
  {
    "url": "assets/js/53.8a9f54a2.js",
    "revision": "ee438ca72ce407f78455c768351ec1e9"
  },
  {
    "url": "assets/js/54.2a3647da.js",
    "revision": "562ff4fa7ecf2ba540b440147e3ed4b6"
  },
  {
    "url": "assets/js/55.19fe7411.js",
    "revision": "30a87d67566b701619d11e02a4001bd7"
  },
  {
    "url": "assets/js/56.4b4f1602.js",
    "revision": "afec6af73f5b6929b3cdf3ed3975fd0e"
  },
  {
    "url": "assets/js/57.280f8185.js",
    "revision": "34060f4e144cdeffde0dafe436d79f07"
  },
  {
    "url": "assets/js/58.3300c9ca.js",
    "revision": "32325dba3ebbca299655098a570cabc9"
  },
  {
    "url": "assets/js/59.f1e2355a.js",
    "revision": "0ac77fc5308f7a562c00e32e76e47a21"
  },
  {
    "url": "assets/js/6.ac2d05a5.js",
    "revision": "2c1aecaebfed9cb08e62b7ea9925beb9"
  },
  {
    "url": "assets/js/60.5c6b287e.js",
    "revision": "bef9dff25e0e3d073d523aebf4929609"
  },
  {
    "url": "assets/js/61.caf7a640.js",
    "revision": "0ecb7d4d828b365ffa8140b74e4f9c05"
  },
  {
    "url": "assets/js/62.131d009f.js",
    "revision": "a12569c22394cbe38b65ed0365e06ff8"
  },
  {
    "url": "assets/js/63.54508735.js",
    "revision": "d6be9862bcf4c2bdf79c952e28f13492"
  },
  {
    "url": "assets/js/64.342db5d6.js",
    "revision": "b071240e15e53d3f64215f00060c8e1a"
  },
  {
    "url": "assets/js/65.83535871.js",
    "revision": "73d15dcb1e12f911f7f476bb9703b94a"
  },
  {
    "url": "assets/js/66.427e8500.js",
    "revision": "f00da1a086348787832d1180c6c9ef0f"
  },
  {
    "url": "assets/js/67.d75fe954.js",
    "revision": "dffc641116eea1bc1b3c9b13825a47c8"
  },
  {
    "url": "assets/js/68.b5d83573.js",
    "revision": "e14e8d8ffab0b8b626605a5b7ff7f69e"
  },
  {
    "url": "assets/js/69.baa2b7d0.js",
    "revision": "e866e1d4fe0cdd1051edd3994d388750"
  },
  {
    "url": "assets/js/7.25f5d8e9.js",
    "revision": "3c5c43dc84ac9f9502fbe71033cc725f"
  },
  {
    "url": "assets/js/70.722c1a27.js",
    "revision": "e7bcb4e225e1ac669f18ac7992b5f89a"
  },
  {
    "url": "assets/js/71.aa01a6af.js",
    "revision": "7a86f3f2c80557e3adb609be4cb3b86f"
  },
  {
    "url": "assets/js/72.39ff88f4.js",
    "revision": "ca05f1cc4dfec23117ed3ace91a8d9bd"
  },
  {
    "url": "assets/js/73.e9406cce.js",
    "revision": "55b6163b3331713234687fc5da5cdd37"
  },
  {
    "url": "assets/js/74.150695e1.js",
    "revision": "92f15e3cf58d0228b1c42ffbe24cde8c"
  },
  {
    "url": "assets/js/75.781cedd2.js",
    "revision": "2a3978cc2ccb48fe5376a99c4efaa27a"
  },
  {
    "url": "assets/js/8.9c58a54e.js",
    "revision": "ca962307baa73a261d4008ada2651ffa"
  },
  {
    "url": "assets/js/9.ada2cb99.js",
    "revision": "a3c47843e2be16c4913dfd4e1368700b"
  },
  {
    "url": "assets/js/app.f01811f6.js",
    "revision": "d095aa8a96bba7f52f07d6fac8b86230"
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
    "revision": "0ed55d542db4718fcacdd63070f9f547"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "5cf2b9a2b047f3da155a11a472e78115"
  },
  {
    "url": "FastStoneEditor.jpg",
    "revision": "8b81b91fd9c0fdf5f2a1e0ac9bcbe60f"
  },
  {
    "url": "guide/assets.html",
    "revision": "1b2966d12ce7a2f0333a922728f39993"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "ed3dd430ac9505f3c5011872b4f62811"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "373211cbfbe8045f3a26024f2aa19d2c"
  },
  {
    "url": "guide/deploy.html",
    "revision": "7ffc6a950ce8d9111af15fe83453df78"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "05fd55f04f15a21c46e2ad6fb4c29ea9"
  },
  {
    "url": "guide/i18n.html",
    "revision": "1f1b5539bf70357e26d79fe58e7dc88a"
  },
  {
    "url": "guide/index.html",
    "revision": "f2445e52ecbf7772534cd8f10baa64bd"
  },
  {
    "url": "guide/markdown.html",
    "revision": "b06faeafe5656396abc96bbfe4e7a05a"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "3f534c29311fe81f25e0076196d5fc7a"
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
    "revision": "255d9149ebf0871bb0007b707d488c44"
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
    "revision": "c79b50015c13350d2a9d2719b2c89944"
  },
  {
    "url": "zh/algorithm/Charpter5.html",
    "revision": "8d82db3d3f3a8ad8ac0cbde99021c845"
  },
  {
    "url": "zh/algorithm/Charpter6.html",
    "revision": "d773036c151e1f98dbb49ad4b5fef59d"
  },
  {
    "url": "zh/algorithm/Charpter7.html",
    "revision": "d45e2412358048770bdd5d2417f8bff0"
  },
  {
    "url": "zh/algorithm/index.html",
    "revision": "570327dd7207377478543796d2755e95"
  },
  {
    "url": "zh/config/index.html",
    "revision": "0f7eada1a6eaeba93314bfdc7848c7aa"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "8a7d5799cda68117d8d4f085c740de52"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "8f814755ae0b5a87f4ebc0ec3812e4c0"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "c37bfa85055608554d78c3f2d73ba595"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "410abc03148db919ccea514f7ad92328"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "e5056d5e0f82251fa60d8b43373a974e"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "4d274520c6f13febfccca6ab80d4b810"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "6fd8d664b737973aaac0c08a56c12ce4"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "33b901bea551d6c7f510f11230053145"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "7c7c18f5961a0123c7f06b6a97743c8f"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "ba6284be666e9593862626a7797d7948"
  },
  {
    "url": "zh/index.html",
    "revision": "5b748705535d1cc334566ca3da4747c4"
  },
  {
    "url": "zh/interface/BlackMarket.html",
    "revision": "e81064449201020a0b00c57f53af6096"
  },
  {
    "url": "zh/interface/Mind.html",
    "revision": "3d22a6c44391d8e0f905697104b05a85"
  },
  {
    "url": "zh/interface/TouTiao.html",
    "revision": "88fd65c98544e6b07d6da861c6e93036"
  },
  {
    "url": "zh/interface/Yuedu.html",
    "revision": "301819361989b7ca07a63ae663e00b80"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "3c633fbc1d388f551dda44fb62b24c97"
  },
  {
    "url": "zh/interview/index.html",
    "revision": "9a840e3e8d75a880c872a7d499f5d830"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "9333d3ade684478a955e6326d69d17d8"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "fea0fc825dddbf90cb0b3802d4809fd5"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "61150e2cb9bd68efb10e3771c752b626"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "7dfbc8ddf162b02d6f8f00e86ca8a6f5"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "5677ddd9d48b76b3210b4d60652f6c1f"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "fbecc5c285aa4733ee37b312a1867764"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "1c49c93cb4108245a1793a27c986e294"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "c1824f3b868a6fcd6d054f87f99c26bc"
  },
  {
    "url": "zh/react/index.html",
    "revision": "8a7cca6f415b91f431b2a83bd9573070"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "7c438b8a6e9f5893148d3cfc560cbf81"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "0f194440eed94f88ee61512cd477144a"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "23b9f9a866e05278971bb62ffa07ee20"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "62a26ac9f662839a34ebe90f9c81bdfa"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "41fe364ca3305f0d5bfaf188345e8da0"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "72a6d2a9ed5668ac9ca0174749d7ef29"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "031a1d50b662a49751961a5b38165a00"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "dc8e32df47356382bd5dd1529217dad2"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "1ca67412553504602228d38d4128cbd3"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "e13f377c694bba421d76643620230a56"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "25a93f0ba8bab2cad44c188f4c8938cb"
  },
  {
    "url": "zh/standard/Cooperation.html",
    "revision": "669cd53aaf159921e7c26160b88c4af2"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "d5119c464cd212f1bf13410bd27ad5eb"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "24edc3600497110aaba55a49860d222e"
  },
  {
    "url": "zh/standard/Start.html",
    "revision": "b020ecd2d2af6992d664b5cd2a8a99fa"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "9df3bd5815ea4f9c26478fe910816047"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "c5ac98d32f01ff1b07efeeea92b97cf4"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "195f2a77d9c5746c0103fdd039acc4da"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "42ed342d3e95f143243dcac7e72adbf4"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "7d7fbeee7d0da2f55e4ab946bc080a70"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "98130c90d926667e96384f2e2db79352"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "ff1e4731117054bfe59f156be444ac6a"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "ac99fcb3307f0f6cf8ddcb9b99782339"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "43127961f792dc043033f0cf36266d5c"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "e63d87befd40478ed2716244ba11bee6"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "380f9c78d934bd09e7ad39375ec800db"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "b5a6b4ae380ba349d2314e66f6e96444"
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
