---
sidebar: auto
sidebarDepth: 2
---
## 事件统计

### SPA 与 MPA 之间的区别

![多页面](/study/img/even.png)

![单页面](/study/img/odd.png)

#### SPA

- 第一次进入页面时会请求一个 html 文件，刷新清除一下，切换到其他组件，此时路径也相应变化，但是并没有新的 html 文件请求，页面内容却变化了。

- 原理： js 会感知到 url 的变化，通过这一点可以用 js 动态地将当前页面的内容清除，然后将下一个页面的内容挂载到当前页面上。这个时候的路由不再是后端来做了，而是前端来做，判断页面显示相应的组件，清除不需要的。
- 页面跳转： js 渲染
- 优点： 页面切换快
- 缺点： 首屏时间稍慢，SEO 差
- 为什么页面切换快？
  页面每次切换跳转时，并不需要处理 html 文件的请求，这样就节约了很多 HTTP 发送时延，所以我们在切换页面的时候速度很快。
- 为什么首屏时间慢，SEO 差？
  单页应用的首屏时间慢，首屏时需要请求一次 html，同时还要发送一次 js 请求，两次请求回来了，首屏才会展示出来。相对于多页面应用，首屏时间慢。
  SEO 效果差，因为搜索引擎只认识 html 里的内容，不认识 js 渲染生成的内容，搜索引擎不识别，也就不会给一个好排名，会导致单页应用做出来的网页在搜索引擎上的排名差。

#### MPA

- 每一次页面跳转的时候，后台服务器都会返回一个新的 html 文档，这种类型的网站也就是多页网站，也叫多页应用。

- 页面跳转： 返回 HTML
- 优点： 首屏时间快，SEO 效果好
- 缺点： 页面切换慢,每次跳转都需要发送一个 HTTP 请求，如果网络状态不好，在页面间来回跳转时，就会发生明显的卡顿，影响用户体验。
- 为什么多页应用的首屏时间快？
  首屏时间叫做页面首个屏幕的内容展现的时间，当我们访问页面的时候，服务器返回一个 html，页面就会展示出来，这个过程只经历了一个 HTTP 请求，所以页面展示的速度非常快。
- 为什么搜索引擎优化效果好（SEO）？
  搜索引擎在做网页排名的时候，要根据网页的内容才能给网页权重，来进行网页的排名。搜索引擎是可以识别 html 内容的，而我们每个页面所有的内容都放在 html 中，所以这种多页应用 SEO 排名效果好。

| /                    | Web App（h5 网页应用） | Hybrid App（混合 h5 和 n 应用） | Native App（原生应用） | m（mobile）站 |
| -------------------- | ---------------------- | ------------------------------- | ---------------------- | ------------- |
| 开发成本             | 低                     | 中                              | 高                     | 低            |
| 维护更新             | 简单                   | 简单                            | 复杂                   |
| 体验                 | 差                     | 优                              | 优                     | 优            |
| Store 或 market 认可 | 不认可                 | 认可                            | 认可                   |
| 安装                 | 不需要                 | 需要                            | 需要                   | 不需要        |
| 跨平台               | 优                     | 优                              | 差                     | 优            |

### native app 开发（原生 app 开发）-所有在应用商店中下载安装的程序都是原生 app（都是安卓和 ios 开发的）

--安卓（Java-Native）；

--IOS（Object-C/swift）；

- 优势：直接安装在手机操作系统中的程序，所以可以操作手机内部的软件或者硬件，而且处理性能比较优秀（相对 h5 来说）

- 例如：获取通讯录、读取短信、获取地理位置（操作手机 GPS）、操作摄像头、操作手机的重力感应器...当然，需要用户的同意

- 弊端：版本升级更新需要用户自主，这样会导致新内容不能及时传达给用户

### web app 开发（h5 页面）--我们开发的页面一般都是运行在手机端的浏览器中，h5/css3/js...

- 优势 one：我们开发的 H5 是运行在手机端浏览器中的（原代码存放在服务器上，用户输入网址护着其他操作访问，从服务器端获取最新的原代码，然后在浏览器中呈现出来），我们只要把服务器上的程序升级，用户重新访问，看到的就是最新的版本（跟新推广的及时性）；

- 优势 two：原生 app 根据所在的手机操作系统不一样，需要两个不同的技术团队，开发两款类似的应用（不能跨平台）；但是 H5 开发不会，我们开发的页面可以适配任何操作系统（跨平台）；

- 弊端：H5 是运行在浏览器中的，不能直接操作手机系统中的软件和硬件（浏览器是原生 app，H5 想要操作手机软硬件，需要浏览器支持）；性能不是很好；

### 怎样实现路由

- hash 模式（只存在于前端）
- hash 发生变化的 url 都会被浏览器记录下来，浏览器的前进后退都可以用，点击后退时，页面字体颜色也会发生变化。尽管浏览器没有请求服务器，但是页面状态和 url 一一关联起来，后来人们给它起了一个霸气的名字叫前端路由，成为了单页应用标配。
  - push
  - replace
- history 模式
- 不怕前进，不怕后退，就怕刷新，f5，（如果后端没有准备的话）,因为刷新是实实在在地去请求服务器
  - push
  - replace

### 原生实现 hash 和 browser 两种路由模式

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>原生实现hash和browser两种路由模式</title>
</head>
<body>
    <div class="router_box">
        <a href="/home" class="router" replace="true">主页</a>
        <a href="/news" class="router">新闻</a>
        <a href="/team" class="router">团队</a>
        <a href="/about100" class="router">关于</a>
    </div>
    <div id="router-view"></div>

    <script>
        function Router(params){
            // 记录routes配置
            this.routes = params.routes || [];
            // 记录路由模式
            this.mode = params.mode || 'hash';

            // 初始化
            this.init = function(){
                // 绑定路由响应事件
                var that = this;
                document.querySelectorAll(".router").forEach((item,index)=>{
                    item.addEventListener("click",function(e){
                        // 阻止a标签的默认行为
                        if ( e && e.preventDefault ){
                            e.preventDefault();
                        }else{
                            window.event.returnValue = false;
                        }

                        if (that.mode == 'hash'){
                            // 判断是replace方法还是push方法
                            if (this.getAttribute("replace")){
                                var i = window.location.href.indexOf('#')
                                // 通过replace方法直接替换url
                                window.location.replace(
                                    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + this.getAttribute("href")
                                )
                            }else{
                                // 通过赋值追加
                                window.location.hash = this.getAttribute("href");
                            }
                        }else{
                            if (this.getAttribute("replace")){
                                window.history.replaceState({}, '', window.location.origin+this.getAttribute("href"))
                            }else{
                                window.history.pushState({}, '', window.location.origin+this.getAttribute("href"))
                            }
                            // 手动调用更新内容方法
                            that.routerChange();
                        }

                    }, false);
                });
                // 监听路由改变
                if (this.mode == 'hash'){
                    window.addEventListener("hashchange",()=>{
                        this.routerChange();
                    });
                }else{
                    window.addEventListener('popstate', e => {
                        console.log(123);
                        this.routerChange();
                    })
                }
                // 第一次进入的时候更新视图
                this.routerChange();
            },
            // 路由改变监听事件
            this.routerChange = function(){
                if (this.mode == 'hash'){
                    let nowHash=window.location.hash;
                    let index=this.routes.findIndex((item,index)=>{
                        return nowHash == ('#'+item.path);
                    });

                    if(index>=0){
                        // 查找到对应路由
                        document.querySelector("#router-view").innerHTML=this.routes[index].component;
                    }else {
                        // 没找到对应路由，查找有没有*
                        let defaultIndex=this.routes.findIndex((item,index)=>{
                            return item.path=='*';
                        });
                        // 查找到*，执行重定向
                        if(defaultIndex>=0){
                            const i = window.location.href.indexOf('#')
                            window.location.replace(
                                window.location.href.slice(0, i >= 0 ? i : 0) + '#' + this.routes[defaultIndex].redirect
                            )
                        }
                    }
                }else{
                    let path = window.location.href.replace(window.location.origin, '');
                    let index=this.routes.findIndex((item,index)=>{
                        console.log('path...', path, 'item.path...', item.path);
                        return path == item.path;
                    });
                    if(index>=0){
                        // 查找到对应路由
                        document.querySelector("#router-view").innerHTML=this.routes[index].component;
                    }else {
                        // 没找到对应路由，查找有没有*
                        let defaultIndex=this.routes.findIndex((item,index)=>{
                            return item.path=='*';
                        });
                        // 查找到*，执行重定向
                        if(defaultIndex>=0){
                            window.history.replaceState({}, '', window.location.origin+this.routes[defaultIndex].redirect)
                            this.routerChange();
                        }
                    }
                }
            }
            // 调用初始化
            this.init();
        }
        new Router({
            mode: 'history',
            routes:[
                { path: '/home', component: '<h1>主页</h1><h4>新一代前端工程师：我们啥都会</h4>' },
                { path: '/news', component: '<h1>新闻</h1><h4>今天2018-11-5，上课还得穿工装</h4>' },
                { path: '/team', component: '<h1>团队</h1><h4>WEB前端工程师</h4>' },
                { path: '/about', component: '<h1>关于</h1><h4>一面而高薪就业</h4>' },
                { path:'*', redirect:'/home'}
            ]
        });
    </script>
</body>
</html>
```
