---
title: 面试题小结（一）
sidebar: auto
sidebarDepth: 2
---

# 一.Dva

## 简单说一下你对 dva 框架的认识？

    答案：是基于redux + react-router + redux-saga的一层轻量封装，核心是app.model，
    用于把reducer/initialState/action/saga封装到一起

## 1.说一下你对这个 redux-saga 的认识？

    redux-saga是Redux的一个中间件，主要处理的就是react架构中的异步处理工作

## 2.redux-saga 常用方法

- Redux effects：
    - Effect 是一个javaScript对象，可以通过yield传达给sagaMiddleware进行执行，我们用了redux-saga，所有的effect 都必须被yield才会执行
    - eg ：yield call(fetch, url)
- Call：
    - call 主要是触发某个动作
- Put：
    - 触发某个action,作用和dispatch相同：
- Select：
    - 作用和redux thunk 中的getstate相同。可以通过yield select 来获取当前state中的某些字段
- Take：
    - 等待dispatch匹配某个action

# 二.跨域

## 说出几种你常见的解决跨域的方法？


- 通过jsonp跨域；
- 使用window.name来进行跨域；
- window.postMessage方法来跨域；
- 代理。
- 【扩展】： 通过修改document.domain来跨子域、flash

# 三.Postman

## 有一个项目需求，就是说你在做项目的时候，后台给你一个接口，用这个接口的 时候发现没有得到任何的数据，这个时候你去找后台确定，结果后台说接口没有问 题，这个时候你该怎么办，有没有一个好的办法来看看问题到底出在了谁身上？

    答案：postman 这一接口测试工具，可以方便的模拟get或者post其他的方式的请求

# 四.Vue 内置指令

## 我看你也用 vue 框架做过项目，你对这个 vue 的内置指令了解多少？

- V-bind：响应并更新DOM特性
- V-on：用于监听dom事件
- V-model：数据双向绑定
- V-show：条件渲染指令
- V-if：条件渲染指令
- V-else：条件渲染指令
- V-for：循环指令
- V-else-if：判断多层条件，必须跟v-if成对使用
- V-text：更新元素的textContent
- V-html：更新元素的innerHTML
- V-pre：不需要表达式，加快整个项目编译速度
- V-cloak：不需要表达式，这个指令保持在元素上直到关联实例结束编译
- V-once：不需要表达式，只渲染元素或组件一次，随后不会再渲染

# 五.Vue 自定义指令

## 那你说一下你对这个自定义指令了解多少？

    答案：使用vue.directive注册全局自定义指令，使用组件的directives选项注册局部自定义指令。

## 1.钩子函数

- Bind：只调用一次，指定第一次绑定到元素是调用
- Inserted
- Update
- ComponentUpdated
- Unbind

## 2.钩子函数参数

- El：元素，直接操作dom
- Binding：对象，包括指定好多信息
- Vnode：vue编译生成的虚拟节点

# 六.Vuex

## vuex 里边包含有什么？

- 答案：state、action、getter、mutation、modules
- Action：记录用户或者开发者自己操作的逻辑，并且将有效载荷传递给mutation；
- Getter：要对数据做二次处理，并且重复使用；
- State：存放一些基本字段，存贮应用的状态；
- Mutation：更新state；
- Modules：单一状态树，所有的状态都会几种到一个比较大的对象里，显的特别复杂，vuex允许我们将store分割成模块（module），每个模块有自己的state,mutation,action,getter

## 1.触发 action 的方式：

- dispatch、mapaction
- 注意：mutation中不可以做数据请求。
- 注意：action不能进行state修改操作。

## 4.Computed 的特性：

    在数据不发生改变的时候会走缓存

# 七.Better-scroll

## 你说你用到了 better-scroll 这个插件，你就是简单说一下这是个什么样的 插件?用的时候怎么用的？举个例子说说你的应用场景

- 是一个移动端滚动解决方案，不仅可以做普通的滚动列表，还可以做轮播图等；
- 用的时候我们把这个模块引入，然后new实例化一下，传入详细参数：
    - eg：new BScroll(Dom对象,{//opsitons})
- 1.Vue中数据更新是异步的，在数据还没有加载完之前，BScroll是无法获取目标内容容器的高度的，就会出现无法滚动的现象。
    - 这里可以用$nextTick()解决。
- 2.在pc上，点击事件会执行两次。
    - 由于better-scroll派发的事件有event_constructed:true属性，可以进行处理

# 八.Git

## 我看你简历上说，对这个 git 有一定的了解，简单说一下你在做项目的时候一 个 git 的流程？

- 首先我们在做一个功能的时候，从自己的分支上拉一个feature分支，一般命名都是以这个功能块的名字来命名；
- 功能做好之后，向老大发送一个pull请求，把代码合并到自己的分支上
- 【扩展】
    - 提测时，从自己的分支上拉一个release分支，发现有bug时，在从release分支上拉一个fixbug分支，修复bug之后，合并fixbug分支到release支，最后合并到自己的分支上
    - 代码冲突时，如果说就几个js文件，我们找见代码冲突的地方，把冲突的代码删除，换成自己的代码，最后提交；如果说有几百个文件，而我们又修改过好多，完全不知道是哪一块期待吗冲突了，这个时候我们要拉一个分支，把我们的代码保存一下，通过git log回滚到上一个版本，我们之前提交的起冲突代码就没有了，最后回到我们保存代码的分支，重新merge到我的分支：
    保存 -> 回滚 -> 合并

# 九.Fetch

## 你对 fetch 了解有多少？

    答案：这是window下的方法，等同于XMLHttpRequest。它提供了许多和XMLHttpRequest相同的功能，但是设计更有扩展性和高效性。

## 1.你说你对 fetch 又进行了一次封装，这是做什么用的？

    主要是涉及一个安全问题，用户每次登录，都会发起一个请求，我们就会在请求头信息里带一个token字段，这个字段是计算返回给我们的，我们首次登录的时候，这个值是个空，我们会到localstorage中去取，下一次我们登录的时候，拿到这个值，要把这个值存入localstorage中，为了让接下来的操作，都能从localstorage中获取到这个值

# 十.Nodejs

## 简单介绍一下 nodejs

    答案：Node.js是一个基于Chrome V8引擎的JavaScript运行时。Node.js使用高效、轻量级的事件驱动、非阻塞I/O模型。它的包生态系统，npm，是目前世界上最大的开源库生态系统
- 常用内置模块：
        path、fs、until、events、http、express等
- Nodejs + express 跨域：
    - Access-Control-Allow-Origin  允许的域
    - Access-Control-Allow-Headers 允许的header类型
    - 需要前后台商议，我们需要在前端配置请求头信息，express使用app.all进行url拦截，然后在app.all中做一些相对应的配置
- 更多了解：
    - Crypto-加密
    - Buffer-缓冲
    - Global-全局变量
    - Process-进程
    - Child_process-子进程
    - Error-异常
    - Zlib-压缩

## 公司有没有强制使用 eslint 等代码检测工具？

    没有强制使用，但是也让使用，防止冗余代码的出现尤其对新手比较重要。

## 平时怎么学习前端知识？

## 项目开发时是怎么进行项目自测？

![image](http://5b0988e595225.cdn.sohucs.com/images/20171216/8c033c746206494985f3687ca484b78d.png)

## h5 及 c3 新增的一些内容？

    h5新增语义化标签
        标签语义化:在合适的地方放合适的标签 利于seo优化

        <header>头部</header>
        <nav>导航</nav>
        <section>
        <aside>侧边栏</aside>
        <article>文章</article>
        </section>
        <footer>底部</footer>

    新增表单类型
        email，tel，url，number，search（搜索框），range（自由拖动滑块），color，time，date（日期，年月日），datatime（日期时间），month，week（年周）

    表单元素
        <datalist>数据列表 与input配合使用

    表单属性
        autofocus自动获取焦点

        placeholder提示文字

        required 必填的

        autocomplete=”on” 自动完成，默认为on开启，关闭则为off

        multiple 用于上传多个文件

        pattern=”” 自定义验证，直接写正则表达式

        form=”需要提交至那个表单的ID” 指定表单所属的表单域

        novalidate 关闭表单的验证功能 加给form标签。

    表单事件
        oninput:当用户输入时触发

        oninvalid:当验证不通过时触发，通常用于设置验证不通过时的提示文字

    多媒体标签
        audio音频标签
        video视频标签

        controls控制条
        autoplay自动播放
        loop循环播放

        兼容写法
        音频标签

![image](https://img-blog.csdn.net/20180816093830497?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNjk2ODE5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

    视频标签

![image](https://img-blog.csdn.net/20180816093854323?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNjk2ODE5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

    7.Dom 操作
        获取单个元素

            document.querySelector 获取符合条件的第一个元素,括号里边可以写任意合法的 css 选择器。
        获取所有元素

            document.querySelectorAll 获取所有符合条件的元素，返回的是一个伪数组。

        C3 的选择器： 
            1.关系选择器：
                ul>li 子代选择器
                ul li 后代选择器
                .now+li 后一个兄弟为 li 的元素
                .now~li 后面所有为 li 的兄弟元素 
            2.属性选择器：
                li[属性||自定义属性 ='值'] li 里面属性或者自定义属性=值的元素
                li[属性] 所有有此属性的元素
                li[属性^='du'] 值以 du 字母开头的
                li[属性$='du'] 值以 du 字母结束的
                li[属性*='du'] 值包含 du 字母的 
            3.伪类选择器：
                li:first-child li 的父元素下第一个为 li 的子元素
                li:last-child li 的父元素下最后一个为 li 的子元素
                li:nth-child(下标) li 的父元素下对应下标的子元素，下标从 1 开始
                下标还可以用 odd 奇数或 even 偶数 表示下标为奇偶的的子元素
                或者 n n 从 0 开始 2n+1 奇数
                li:nth-of-type（下标 n） 父元素下标签为 li 下标为 n 的子元素
                li:first-of-type 
                li:last-of-type 
            4.伪元素选择器： 
                ::after{}
                ::before{}
                ::first-letter 第一个字 
                ::first-line 第一行

        C3 中阴影设置：
            文字阴影：
                text-shadow:水平偏移 垂直偏移 羽化值 阴影颜色 （px px px color）;
            盒子阴影：
                box-shadow:（inset 内阴影） 水平偏移 垂直偏移 羽化值 外延值 阴影颜色 （inset + px px px px color）;

        C3 背景设置：background 系列

        C3 渐变：
            线性渐变 
                background-image: linear-gradient(to 方向//45deg，color，color);
            径向渐变 
                background-image: radial-gradient(20px at center ,color,color);

        C3 过渡：
            transition：all 1s;
            合写 transitionend 过渡结束事件

        C3 之 2D 转换：
            transform 只能写一个，多了会覆盖，合写用空格隔开
            transform: scale(1.5);缩放
            transform-origin: top;设置转换原点
            transform: rotate(45deg);转换角度
            transform: translate(20px,20px);平移距离 translateX translateY
            transform: skewX(45deg);斜切

        C3 之 3D 转换：
            perspective: 1000px; 给有 3d 效果的父元素添加 显示近大元小的 3D 效果
            transform: rotateX(45deg) rotateY(45deg) rotateZ(45deg);角度转换
            transform: translateX(20px) translateY(20px) translateZ(20px);平移位置
            transform-style: preserve-3d;子盒子要呈现 3D 效果，父盒子必须添加这个属性

        媒体查询：
            （Media Query）是 CSS3 提出来的一个新的属性，通过媒体查询可以查询到 screen 的宽度，从而指定某个宽度区间的网页布局。
            用在响应式开发 原理：使用媒体查询实现不同终端的布局和样式的切换。
            用法：@media screen and （条件） {}
            条件的写法，多个条件用 and 链接
            min-width:只要屏幕宽度超过这个值的设备样式就能生效
            max-width:只要屏幕宽度小于这个值的设备样式就能生效
            例：@media screen and (min-width: 992px) and (max-width: 1200px) {
             .container {
               width: 970px;    background-color: blue;
            }
            };

## 移动端如何做多终端的适配？（各主流手机 ，pad，电脑）

    1、可以用bootstrap。
    2、用css3的媒体查询。
    3、使用rem。

## 使用 angular vue react 框架做过那些类型的项目？项目有多大？遇到过那些棘手的 bug？

## jquery 和 zepto 有什么区别？ 他俩对于现在的 mv\*框架及 react 这种专注视图层的框架有什么区别？

- 同
    - Zepto最初是为移动端开发的库，是jQuery的轻量级替代品，因为它的API和jQuery相似，而文件更小。
    - Zepto最大的优势是它的文件大小，只有8k多，是目前功能完备的库中最小的一个，尽管不大，Zepto所提供的工具足以满足开发程序的需要。
    - 大多数在jQuery中·常用的API和方法Zepto都有，Zepto中还有一些jQuery中没有的。
    - 另外，因为Zepto的API大部分都能和jQuery兼容，所以用起来极其容易，如果熟悉jQuery，就能很容易掌握Zepto。
    - 你可用同样的方式重用jQuery中的很多方法，也可以方面地把方法串在一起得到更简洁的代码，甚至不用看它的文档。

- 异
    - Zepto不支持旧版本的IE浏览器
    - 添加id时jQuery不会生效而Zepto会生效
    - Zepto中没有为原型定义extend方法而jQuery有
    - Zepto最初是为移动端开发的库，是jQuery的轻量级替代品，因为它的API和jQuery相似，而文件更小
    - 事件触发的区别：使用jquery时load事件的处理函数不会执行；使用zepto时load事件的处理函数会执行
    - 事件委托的区别：zepto中，选择器上所有的委托事件都依次放入到一个队列中，而在jquery中则委托成独立的多个事件
    10,Zepto不支持的选择器：
![image](https://images2015.cnblogs.com/blog/548670/201603/548670-20160317211253053-1021095070.jpg)

## ajax 和 fetch 有什么区别？jsonp 是解决跨域的，还了解过那些并实际使用过那些跨域的解决方法？

- fetch()返回的promise将不会拒绝http的错误状态，即使响应是一个HTTP 404或者500

- 在默认情况下 fetch不会接受或者发送cookies

- 跨域:跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这里跨域是广义的。

- 跨域的解决方案:
    - 通过jsonp跨域

    - document.domain + iframe跨域

    - location.hash + iframe

    - window.name + iframe跨域

    - postMessage跨域

    - 跨域资源共享（CORS）

    - nginx代理跨域

    - nodejs中间件代理跨域

    - WebSocket协议跨域
## gulp，grunt，webpack这些工具的区别？
- Webpack与Gulp、Grunt没有什么可比性，它可以看作模块打包机，通过分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。
- Gulp/Grunt是一种能够优化前端的开发流程的工具
- WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack在很多场景下可以替代Gulp/Grunt类的工具。
- 他们的工作方式也有较大区别：
    - Grunt和Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，工具之后可以自动替你完成这些任务。
    - Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。
