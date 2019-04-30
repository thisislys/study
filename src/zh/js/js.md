---
title: js
sidebar: auto
sidebarDepth: 2
---

## htmls-shim 能力检测包

- css 不能嵌套 3 层以上

- JavaScript 动态类型，弱类型，基于原形的语言

- BOM 浏览器对象模型

- DOM 文档对象模型(BOM 包含 DOM)

- js 基本类型 值的复制，存在栈内存

## 深拷贝

- 数组：concat，[...]，slice
- 对象：{...}，Object.asign

## 垃圾回收

- 栈内存：当前执行环境结束销毁
- 堆内存：所有引用它的变量不存在时回收

## 检测类型

- typeof a
  - 返回 a 的数据类型。但是 null 对象 数组 都是返回 Object 类型
- a instanceof String
  - 返回布尔值
- a.constructor
  - 返回其相对于的构造函数
  - a.constructor==String 返回 true

## 事件机制

- 事件流 ：事件捕获阶段，事件目标阶段，事件冒泡阶段。
- IE 中事件流：处于目标阶段，冒泡阶段。
- 事件的执行顺序：事件的捕获阶段====>处于目标阶段====>事件的冒泡阶段====>事件的默认行为。
- settimeout 最后执行 同步永远在异步前

- 单线程（必须前面的处理好，后面的才会执行到）

- 多线程（程序中包含多个执行流）

  - 优点：可以提高 CPU 的利用率。在多线程程序中，一个线程必须等待的时候，CPU 可以运行其它的线程而不是等待
  - 缺点：占用内存，线程越多占用内存也越多，线程太多会导致控制太复杂，最终可能造成很多 Bug；
  - 坏处：增加了调度和管理的开销，带来了一些不确定性，需要复杂的同步机制，避免死锁等等。
  - 好处：一定程度上提高响应速度，在多核的情况下还是更能充分利用 CPU 资源的。

  * 线程相对于进程的优点：

    - 开销小
    - 资源共享性好。

  * 线程相对于进程的缺点：
    - 共享资源需要耗费一定的锁资源，同步相对复杂。
    - 一个线程崩溃可能导致整个进程崩溃，这个当然是自己的应用程序有问题

多线程与单线程的区别

> 生活举例

> > 你早上上班，正要打卡的时候，手机响了。。你如果先接了电话，等接完了，在打卡，就是单线程。

> > 如果你一手接电话，一手打卡。就是多线程。

- dom0 事件 事件源 事件类型 事件委托 (利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。)

  - 简单
  - 具有跨浏览器优势。

    - 每个元素（window 和 document）都有自己的事件处理程序属性

  - 绑定一次，没用冒泡和捕获
  - 全部都是默认在冒泡阶段执行

- dom2 事件 ( obj.addEventListener(事件类型，处理函数，false) 冒泡 捕获)

  - 多次注册，并且执行顺序与注册顺序一致。

  - target 触发当前事件元素
  - currentTarget 绑定当前事件元素
  - 关闭弹框（判断 target 和 currentTarget 是否相同）

## 面向对象 （抽象封装继承多态）

```js
    new a={}
    a.__proto__=A.proptotype
    A.call(a)
    B() //B若想继承A必须指向a
```

构造函数继承 只能继承函数内部 可传参

```js
    B(){
        A.call(this)
    }
    B.prototype=a


    if(this instanceOf(xx)){//判断xx是否是new出来的

    }else{

    }
```

- 差异化 放到构造函数内部 修改不会影响其他

- 原型：相当于一个模具，用来生产实例对象。就是 js 里实现面向对象的方式，也就是说，js 就是基于原型的面向对象。

- 原型链：原型对象有个指针指向构造函数，实例对象又有一个指针指向原型对象，就形成了一条原型链，最终指向 null。是 js 实现继承的方式。

- 作用域：变量或者是函数能作用的范围。

- 全局作用域：除了函数中定义的变量之外，都是全局作用域。

- 局部作用域：函数里用 var 声明的变量。

- 作用域链：变量随着作用长辈函数一级一级往上搜索，直到找到为止，找不到就报错，这个过程就是作用域链起的作用。

* 闭包：js 里为了实现数据和方法私有化的方式。内层函数可以调用外层函数的变量和方法。
* 经典的面试题
  - 如果有这样的需求

```js
    go('l') -> gol
    go()('l') -> gool
    go()()('l') -> goool

    var go = function (a) {
    var str = 'go';
        var add0 = function (a) {
        	str += 'o';
        	return a ? str += a : add0;// 巧妙使用
        }
    	return a ? str += a : add0;// 巧妙使用
    }
    console.log(go('l'));//gol
    console.log(go()('l'));//gool
    console.log(go()()('l'));//goool
```

## ajax(页面局部刷新技术，异步)

- 建立 xmlHttpRequest 对象
- 设置回调函数
- 使用 OPEN 方法与服务器建立连接
- 向服务器端发送数据
- 在回调函数中针对不同的响应状态进行处理
- async 改变同步异步
- abort 取消 ajax
- axios（返回 promise，依赖 XMLHttpRequest）
- flyio（拦截请求，代理）
- fetch（返回 promise）

## 跨域只存在前端（同源策略:协议、域名和端口号，浏览器行为）

- 解决方案
  - jsonp（跨域资源请求方案，script 发请求带 callback（xx），在 window 上写一个 xx 函数方法，返回函数调用，执行）
    - scripts 请求
    - js
    - 返回函数调用名
    - window 创建函数方法
- CORS（跨域资源共享）
  - 服务端设置响应头
  - 响应头字段：access-control-allow-origin
  - 响应头字段：access-control-allow-methods
    - devDependencies 用于本地环境开发时候。
    - dependencies 用户发布环境，不仅开发环境能使用，生产环境也能使用
- 服务端做代理
  - restful：请求方式
    - get（查）
    - post（增）
    - put（改）
    - delete（删）
    - options（试探服务器响应是否正确,是否能接受真正的请求，探测请求，探路哨兵）

## 80（http）443（https）

- 区别
  - JSONP 只能实现 GET 请求，而 CORS 支持所有类型的 HTTP 请求
  - 使用 CORS，开发者可以使用普通的 XMLHttpRequest 发起请求和获得数据，比起 JSONP 有更好的错误处理
  - JSONP 主要被老的浏览器支持，它们往往不支持 CORS，而绝大多数现代浏览器都已经支持了 CORS
- 请求：有逻辑交互的
- 资源：没有逻辑交互的
- 盗链：非资源域名下访问资源
- 防盗链：referer
- 防盗链解决方法：
  - 下载资源
  - 请求服务器>服务器去掉 referer 后返回资源
- 多个跨域：改地址栏参数（正常发请求，后台处理）

## new 的过程发生了什么？

- 创建空对象；var obj = {};
- 设置新对象的 constructor 属性为构造函数的名称，设置新对象的 proto 属性指向构造函数的 prototype 对象；

```js
obj.constructor = ClassA;
obj.proto = ClassA.prototype;
//扩展了新对象的原型链。
```

- 使用新对象调用函数，函数中的 this 被指向新实例对象：

```js
ClassA.call(obj); //{}.构造函数();
```

- 返回 this 指针。当存在显示的返回时，返回 return 后面的内容。新建的空对象作废。

```js
function test() {
  this.name = "test";
}
test.prototype = {
  a: {},
  b: {}
};
var c = new test();
```

## Object.defineProperty(obj, prop, descriptor)

- 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

- obj
  - 要在其上定义属性的对象。
- prop
  - 要定义或修改的属性的名称。
- descriptor

  - 将被定义或修改的属性描述符。

- writable
  - 当且仅当该属性的 writable 为 true 时，value 才能被赋值运算符改变。默认为 false。
- value
  - 该属性对应的值。默认为 undefined。
- configurable
  - configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false
- enumerable
  - enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false。
- get
  - 一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入 this 对象（由于继承关系，这里的 this 并不一定是定义该属性的对象）。
  - 默认为 undefined。
- set
  - 一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。
  - 默认为 undefined。

## vuex

- 组件—>redux/vuex->api(带权限)->mockjs/server

- template 都用
- render 用第二个 优化 30%
- 运行时编译
- 运行时依赖

- vue.runtime.min/esm.js
- 需要配别名 alias

## keep-alive

- 生命周期 activated、deactivated
- 是 Vue 的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染 DOM。

## 闭包

- 闭包就是能够读取其他函数内部变量的函数。
- 闭包是将函数内部和函数外部连接起来的桥梁。
- 可以读取函数内部的变量
- 让这些变量的值始终保持在内存中，不会调用后被自动清除。
- 内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在 IE 中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
- 闭包会在父函数外部，改变父函数内部变量的值。
  vue 底层原理 发布订阅 数据劫持 vuex

## Promise

- Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。
- 所有返回值都会通过 Promise.resolve()转化为 Promise 函数
- pending:初始状态，既不是成功，也不是失败状态。
- fulfilled: 意味着操作成功完成。
- rejected: 意味着操作失败。
- 导航守卫 判断是否登陆 未登录 跳转登陆页面 保存账号密码（加密）

### link 和 import 的区别：

- Link 是标签、import 是 css 提供的一种方式
- 兼容问题，link 无兼容问题，import 在 IE5 以上才支持
- 可以使用 js 去控制 link（因为是标签），却控制不了 import
- 页面中多个 link 标签可以并行下载，而 如果有 import，则阻塞其他样式表的下载，影响并行性
-

### call

- call 方法第一个参数是要绑定给 this 的值，后面传入的是一个参数列表。当第一个参数为 null、undefined 的时候，默认指向 window。

### apply

- apply 接受两个参数，第一个参数是要绑定给 this 的值，第二个参数是一个参数数组。当第一个参数为 null、undefined 的时候，默认指向 window。

### bind

- 和 call 很相似，第一个参数是 this 的指向，从第二个参数开始是接收的参数列表。区别在于 bind 方法返回值是函数以及 bind 接收的参数列表的使用。

### 封装 bind 方法

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function() {
    var self = this, // 保存原函数
      context = [].shift.call(arguments), // 保存需要绑定的this上下文
      args = [].slice.call(arguments); // 剩余的参数转为数组
    return function() {
      // 返回一个新函数
      self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    };
  };
}
```

### 使用 call 将类数组转化为数组

```js
var trueArr = Array.prototype.slice.call(arrayLike);
```

### 使用 call 判断变量类型

```js
function isArray(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
}
isArray([]); // true
isArray("dot"); // false
```

### 使用 apply 做继承

```js
function Person(name, age) {
  // 这里的this都指向实例
  this.name = name;
  this.age = age;
  this.sayAge = function() {
    console.log(this.age);
  };
}
function Female() {
  Person.apply(this, arguments); //将父元素所有方法在这里执行一遍就继承了
}
var dot = new Female("Dot", 2);
```

### 使用 log 代理 console.log

```js
function log() {
  console.log.apply(console, arguments);
}
// 当然也有更方便的 var log = console.log()
```

### call、apply 和 bind 函数存在的区别:

- bind 返回对应函数, 便于稍后调用；
- apply, call 则是立即调用。
- 除此外, 在 ES6 的箭头函数下, call 和 apply 将失效, 对于箭头函数来说:
  - 箭头函数体内的 this 对象, 就是定义时所在的对象, 而不是使用时所在的对象;所以不需要类似于 var \_this = this 这种丑陋的写法
  - 箭头函数不可以当作构造函数，也就是说不可以使用 new 命令, 否则会抛出一个错误
  - 箭头函数不可以使用 arguments 对象,，该对象在函数体内不存在. 如果要用, 可以用 Rest 参数代替
  - 不可以使用 yield 命令, 因此箭头函数不能用作 Generator 函数

### forEach

- 返回值的情况：无返回值(undefined)；
- 原数组是否改变：如果是通过值类型的方式修改，则不会改变，如果通过下标的方式或者通过引用类型的方式修改，则原数组*会*发生变化；
- 遍历中断条件：无法中断, 除非 throw Error，但是这样做没有意义，因为会导致整个程序全部终止；

### map

- 返回值的情况：如果不 return 则无返回值（undefined），否则有返回值；
- 原数组是否改变：同上
- 遍历中断条件：同上

### every

- 返回值的情况：只要回调函数返回的值当中有一个是 false，则返回值是 false，否则返回值为 true；
- 原数组是否改变：如果是通过值类型的方式修改，则不会改变，如果通过下标的方式或者通过引用类型的方式修改，则原数组*可能会*发生变化；注意返回值的情况，如果返回值为 false，则会中断整个循环，导致后续的数组项不会继续执行。
- 遍历中断条件：只要回调函数返回的值为 false，则会立即中断

### some

- 返回值的情况：只要回调函数返回的值当中有一个是 true，则返回值是 true，否则返回值为 false；
- 原数组是否改变：如果是通过值类型的方式修改，则不会改变，如果通过下标的方式或者通过引用类型的方式修改，则原数组可能会发生变化；注意返回值的情况，如果返回值为 true，则会中断整个循环，导致后续的数组项不会继续执行。
- 遍历中断条件：只要回调函数返回的值为 true，则会立即中断；

### filter

- 返回的是一个新数组，数组里的内容是回调函数运行后为 true 的各项值，不改变原数组

### reduce

- 返回的是累计器累计完后的单个值，原数组不会发生变化
- 权限管理
- RBAC 基于角色的权限访问控制（Role-Based Access Control）

## 页面统计

- pv （ page visitor）
  - 页面浏览量
- uv user（Unique Visitor） visitor
  - 1 天内访问某站点的用户数(以 cookie 为依据);访问网站的一台电脑客户端为一个访客。

