---
title: 面试题小结（二）
sidebar: auto
sidebarDepth: 2
---
## 使用过那些css预处理？说下他的优缺点
- 使用过less、sass。
- less简单,易上手;属于css的基础拓展；
- sass 复杂,功能强大,更加丰富的拓展;
- 没有特别的优缺点，自己喜欢什么就选择什么，有的时候什么都不选择就用css就行了。
## 移动端项目如何解决300ms延迟问题？
- 问题由来
  - 这要追溯至 2007 年初。苹果公司在发布首款 iPhone 前夕，遇到一个问题：当时的网站都是为大屏幕设备所设计的。于是苹果的工程师们做了一些约定，应对 iPhone 这种小屏幕浏览桌面端站点的问题。

  - 这当中最出名的，当属双击缩放(double tap to zoom)，这也是会有上述 300 毫秒延迟的主要原因。

  - 双击缩放，顾名思义，即用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。 那么这和 300 毫秒延迟有什么联系呢？ 假定这么一个场景。用户在 iOS Safari 里边点击了一个链接。由于用户可以进行双击缩放或者双击滚动的操作，当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。 鉴于iPhone的成功，其他移动浏览器都复制了 iPhone Safari 浏览器的多数约定，包括双击缩放，几乎现在所有的移动端浏览器都有这个功能。之前人们刚刚接触移动端的页面，在欣喜的时候往往不会care这个300ms的延时问题，可是如今touch端界面如雨后春笋，用户对体验的要求也更高，这300ms带来的卡顿慢慢变得让人难以接受。
  - 也就是说，移动端浏览器会有一些默认的行为，比如双击缩放、双击滚动。这些行为，尤其是双击缩放，主要是为桌面网站在移动端的浏览体验设计的。而在用户对页面进行操作的时候，移动端浏览器会优先判断用户是否要触发默认的行为。
- 方案一：通过 touchstart 和 touchend模拟实现

  - 能不能直接用touchstart代替click呢，
答案是不能，使用touchstart去代替click事件有两个不好的地方。
  - 第一：touchstart是手指触摸屏幕就触发，有时候用户只是想滑动屏幕，却触发了touchstart事件，这不是我们想要的结果；
  - 第二：使用touchstart事件在某些场景下可能会出现点击穿透的现象。-

- 方案二：FastClick
  - 原理: 在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后真正的click事件阻止掉
  - 缺点: 脚本相对较大, 不建议使用
## better-scroll做过那些需求？
- 使用时better-scroll是作用在外层的wrapper容器上的，滚动的部分是content---需要注意的是，better-scroll只处理容器的第一个子元素，其他的元素会被忽略，如果里面需要滚动的部分有好几部分。一定要拿一个元素把他包裹起来
- 还有就是better-scroll初始化了，但是没法滚动。大家知道浏览器滚动的原理是页面的高度超过视口高度的时候，才会出现滚动条。也就是说父容器一定要有一个固定的高度并且溢出隐藏，子容器的高度要大于父元素的高度，才能滚动
- 滚动的原理

        element.style {
             transition-duration: 0ms;
             transform: translate(0px, 0px) scale(1) translateZ(0px);
             transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
         }
通过滑动的距离动态改变translate的值来实现，让它相对于父级移动，就有了一种滚动的效果，但是这里就又有了下一个坑

- 滚动元素里面的某一块元素的position：fixed失效,本来我们想实现一个效果是滚动到某一高度让它有个吸顶效果，但是它死活吸不上去，实验了几次后发现它的fixed是相对于它的父容器定位的---（我想到的解决办法是实时改变这个元素的top值，但是感觉不太流畅但是有效果）
  - fixed定位的元素，如果父级有transform样式，值不为none，那么fixed定位就会失效，scale(),rotate()都会使fixed定位失效。

  - 解决方法：使用transform样式的元素，不要包含fixed定位的子元素；css3的新属性：flex;很好的解决了在transform下fixed失效的问题；也可以添加类和移除类

- 使用下拉加载的时候，一定不能把包裹子元素的容器重新渲染，这样滚动事件就会失效，因为你第一次初始化时给这个容器写上样式了，如果重新渲染的时候这些样式就会被覆盖，没有样式就不会滚动了，除非你再初始化一下这个容器，但是太麻烦不建议这样使用
当 DOM 结构发生变化的时候务必要调用refresh()确保滚动的效果正常，重新渲染高度
## 点击穿透？
- 假如页面上有两个元素A和B。B元素在A元素之上。我们在B元素的touchstart事件上注册了一个回调函数，该回调函数的作用是隐藏B元素。我们发现，当我们点击B元素，B元素被隐藏了，随后，A元素触发了click事件。
- 这是因为在移动端浏览器，事件执行的顺序是touchstart > touchend > click。而click事件有300ms的延迟，当touchstart事件把B元素隐藏之后，隔了300ms，浏览器触发了click事件，但是此时B元素不见了，所以该事件被派发到了A元素身上。如果A元素是一个链接，那此时页面就会意外地跳转。

## 使用过百度地图吗？使用过echarts？
## react定义组件的方法有哪些？区别是什么？
- 函数式定义的无状态组件 
- es5原生的方式 React.createClass方式 
- es6中extends React.Component定义的组件 
- 区别
  - 无状态组件 无法对界面中状态state进行更改，无法实例化，无法对this进行更改，无法访问生命周期 
  - React.createClass方式，extends React.Component定义的组件可以访问生命周期，组件初始状态state的配置不同。函数中this自绑定

## 说说redux和vuex的不同？
- vuex是吸收了Redux的经验并且对redux的进行了调整,从而对仓库的管理更加明确,vuex还放弃了一些特性做了一些优化,代价是只能和vue配合

- vuex有自动渲染的功能,所以不需要更新

- Redux 是一个状态管理系统
- vuex是redux的基础上进行改变，对仓库的管理更加明确使用mutation来替换redux中的reducer 

## redux需要注意的问题有哪些？
-  Store中的State修改不能直接修改原有的State，若直接修改State，则redux中的所有操作都将指向内存中的同一个state，将无法获取每一次操作前后的state，就无法追溯state变更记录，不能实现state的历史记录，也无法保证this.props和nextProps能得到正确的值，不能实现实现组件render的优化

- Store中的数据结构不能太复杂，层次最好不会超过3层，以方便创建全新的副本State

- 数据应该尽量绑定到上层的controller组件上，而不是所有的组件都connect一次，因为redux的数据传递是通过subscribe订阅实现的，connect越多，每次处理订阅次数越多，就有可能发生性能问题了
## redux和router开发的时候遇到过那些问题？怎么解决的？
- redux的问题就是页面刷新后无法保存数据，需要用localStorage来配合解决。Router在子组件里会出现跳转的问题，使用withRouter来解决。
## react+redux开发项目的时候 数据请求这块如何分配？
- 比如做会员登录时，会员的信息记录到redux中。在做购物车是也需要把数据记录在redux中。
## 大型的前端构建项目，本地打包和编译的时候如何区别开发和生产环境
- 通过变量来区分：export NODE_ENV="development"是开发环境。export NODE_ENV="production"是生产环境。
## 看过jquery源码吗？你说说jquery的底层实现原理。
- 看过；比如：$("#name")就是原生js的document.getElementById("name")。$(function(){})实现原理是监听DOMContentListener(兼容火狐和谷歌等浏览器)和onreadystatechange(兼容ie浏览器)实现的。