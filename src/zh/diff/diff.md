---
title: dom Diff
sidebar: auto
sidebarDepth: 2
---

# Diff

### diff:用于比较两个文件的内容差异，可以被制作成补丁文件，使用 patch 命令对相应的文件打补丁

![diff算法简析](/study/img/diff1.png)

### DIFF 算法在执行时有三个维度，分别是 Tree DIFF、Component DIFF 和 Element DIFF，执行时按顺序依次执行，它们的差异仅仅因为 DIFF 粒度不同、执行先后顺序不同。

### Tree DIFF 是对树的每一层进行遍历，如果某组件不存在了，则会直接销毁。如图所示，左边是旧属，右边是新属，第一层是 R 组件，一模一样，不会发生变化；第二层进入 Component DIFF，同一类型组件继续比较下去，发现 A 组件没有，所以直接删掉 A、B、C 组件；继续第三层，重新创建 A、B、C 组件。

![图解](/study/img/diff2.png)

### 如图所示，第一层遍历完，进行第二层遍历时，D 和 G 组件是不同类型的组件，不同类型组件直接进行替换，将 D 删掉，再将 G 重建

![图解](/study/img/diff3.png)

### 作用

- 计算出 Virtual DOM 中真正变化的部分，并只针对该部分进行原生 DOM 操作，而非重新渲染整个页面。

### 传统 diff 算法

- 通过循环递归对节点进行依次对比，算法复杂度达到 O(n^3) ，n 是树的节点数，这个有多可怕呢？——如果要展示 1000 个节点，得执行上亿次比较。。即便是 CPU 快能执行 30 亿条命令，也很难在一秒内计算出差异。

## Vue

### 当数据发生变化时，vue 是怎么更新节点的？

- 要知道渲染真实 DOM 的开销是很大的，比如有时候我们修改了某个数据，如果直接渲染到真实 dom 上会引起整个 dom 树的重绘和重排，有没有可能我们只更新我们修改的那一小块 dom 而不要更新整个 dom 呢？diff 算法能够帮助我们。

- 我们先根据真实 DOM 生成一颗 virtual DOM，当 virtual DOM 某个节点的数据改变后会生成一个新的 Vnode，然后 Vnode 和 oldVnode 作对比，发现有不一样的地方就直接修改在真实的 DOM 上，然后使 oldVnode 的值为 Vnode。

- diff 的过程就是调用名为 patch 的函数，比较新旧节点，一边比较一边给真实的 DOM 打补丁。

### virtual DOM 和真实 DOM 的区别？

- virtual DOM 是将真实的 DOM 的数据抽取出来，以对象的形式模拟树形结构。比如 dom 是这样的：

```html
<div>
  <p>123</p>
</div>
```

- 对应的 virtual DOM（伪代码）：

```js
var Vnode = {
  tag: "div",
  children: [{ tag: "p", text: "123" }]
};
```

### diff 的比较方式?

- 在采取 diff 算法比较新旧节点的时候，比较只会在同层级进行, 不会跨层级比较。

```html
<div>
  <p>123</p>
</div>

<div>
  <span>456</span>
</div>
```

- 上面的代码会分别比较同一层的两个 div 以及第二层的 p 和 span，但是不会拿 div 和 span 作比较。在别处看到的一张很形象的图：

![diff树比较](/study/img/diff4.png)

### diff 流程图

- 当数据发生改变时，set 方法会让调用 Dep.notify 通知所有订阅者 Watcher，订阅者就会调用 patch 给真实的 DOM 打补丁，更新相应的视图。

![diff流程图](/study/img/diff5.png)

### Key

- 可以标识组件的唯一性，为了更好地区别各个组件 key 的作用主要是为了高效的更新虚拟 DOM。另外 vue 中在使用相同标签名元素的过渡切换时，也会使用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果。

## React

#### render 执行的结果得到的不是真正的 DOM 节点.结果仅仅是轻量级的 JavaScript 对象, 我们称之为 virtual DOM.

### React 工作流程

```js
var MyComponent = React.createClass({
  render: function() {
    if (this.props.first) {
      return (
        <div className="first">
          <span>A Span</span>
        </div>
      );
    } else {
      return (
        <div className="second">
          <p>A Paragraph</p>
        </div>
      );
    }
  }
});
```

- React 要从这个表现形式当中尝试找到前一个渲染结果到后一个的最小步数.
  比如, 当我们挂载了

```html
<MyComponent first="{true}" />
```

, 然后用

```html
<MyComponent first="{false}" />
```

替换, 然后又取消挂载,
这样一个过程的 DOM 的指令是这样的:

- 从没有到第一步

  - 创建节点:

    ```html
    <div className="first"><span>A Span</span></div>
    ```

- 第一步到第二步

  - 替换属性: className="first" 到 className="second"

  - 替换节点:

    ```html
    <span>A Span</span> 到
    <p>A Paragraph</p>
    ```

- 第二步到没有

  - 删除节点:

    ```html
    <div className="second"><p>A Paragraph</p></div>
    ```

#### 调和：将 Virtual DOM 树转换成 actual DOM 树的最少操作的过程 称为 调和 。

#### React diff 算法：diff 算法是调和的具体实现。

### diff 策略

#### React 用 三大策略 将 O(n^3)复杂度 转化为 O(n)复杂度

- 策略一（tree diff）：
  Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。
- 策略二（component diff）：
  拥有相同类的两个组件 生成相似的树形结构，
  拥有不同类的两个组件 生成不同的树形结构。
- 策略三（element diff）：
  对于同一层级的一组子节点，通过唯一 id 区分。

### component diff

#### React 对不同的组件间的比较，有三种策略

- 同一类型的两个组件，按原策略（层级比较）继续比较 Virtual DOM 树即可。
- 同一类型的两个组件，组件 A 变化为组件 B 时，可能 Virtual DOM 没有任何变化，如果知道这点（变换的过程中，Virtual DOM 没有改变），可节省大量计算时间，所以 用户 可以通过 shouldComponentUpdate() 来判断是否需要 判断计算。
- 不同类型的组件，将一个（将被改变的）组件判断为 dirty component（脏组件），从而替换 整个组件的所有节点
- 注意：如果组件 D 和组件 G 的结构相似，但是 React 判断是 不同类型的组件，则不会比较其结构，而是删除 组件 D 及其子节点，创建组件 G 及其子节点。

### element diff

#### 当节点处于同一层级时，diff 提供三种节点操作：删除、插入、移动。

- 插入：组件 C 不在集合（A,B）中，需要插入
- 删除：（1）组件 D 在集合（A,B,D）中，但 D 的节点已经更改，不能复用和更新，所以需要删除 旧的 D ，再创建新的。
  （2）组件 D 之前在 集合（A,B,D）中，但集合变成新的集合（A,B）了，D 就需要被删除。
  移动：组件 D 已经在集合（A,B,C,D）里了，且集合更新时，D 没有发生更新，只是位置改变，如新集合（A,D,B,C），D 在第二个，无须像传统 diff，让旧集合的第二个 B 和新集合的第二个 D 比较，并且删除第二个位置的 B，再在第二个位置插入 D，而是 （对同一层级的同组子节点） 添加唯一 key 进行区分，移动即可。

### 如果 DOM 节点出现了跨层级操作,diff 会咋办呢？

- 答：diff 只简单考虑同层级的节点位置变换，如果是跨层级的话，只有创建节点和删除节点的操作。

#### 重点说下移动的逻辑：

##### 情形一：新旧集合中存在相同节点但位置不同时，如何移动节点

![图解](https://upload-images.jianshu.io/upload_images/5518628-89bb3cd6ebdb4296.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/642/format/webp)

- 看着上图的 B，React 先从新中取得 B，然后判断旧中是否存在相同节点 B，当发现存在节点 B 后，就去判断是否移动 B。
  B 在旧 中的 index=1，它的 lastIndex=0，不满足 index < lastIndex 的条件，因此 B 不做移动操作。此时，一个操作是，lastIndex=(index,lastIndex)中的较大数=1.
  注意：lastIndex 有点像浮标，或者说是一个 map 的索引，一开始默认值是 0，它会与 map 中的元素进行比较，比较完后，会改变自己的值的（取 index 和 lastIndex 的较大数）。
- 看着 A，A 在旧的 index=0，此时的 lastIndex=1（因为先前与新的 B 比较过了），满足 index < lastIndex，因此，对 A 进行移动操作，此时 lastIndex=max(index,lastIndex)=1。
- 看着 D，同（1），不移动，由于 D 在旧的 index=3，比较时，lastIndex=1，所以改变 lastIndex=max(index,lastIndex)=3
- 看着 C，同（2），移动，C 在旧的 index=2，满足 index < lastIndex（lastIndex=3），所以移动。
  由于 C 已经是最后一个节点，所以 diff 操作结束。

##### 情形二：新集合中有新加入的节点，旧集合中有删除的节点

![图解](https://upload-images.jianshu.io/upload_images/5518628-eb7ef5477ea1a678.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/601/format/webp)

- B 不移动，不赘述，更新 l astIndex=1
- 新集合取得 E，发现旧不存在，故在 lastIndex=1 的位置 创建 E，更新 lastIndex=1
- 新集合取得 C，C 不移动，更新 lastIndex=2
- 新集合取得 A，A 移动，同上，更新 lastIndex=2
- 新集合对比后，再对旧集合遍历。判断 新集合 没有，但 旧集合 有的元素（如 D，新集合没有，旧集合有），发现 D，删除 D，diff 操作结束。

##### diff 的不足与待优化的地方

![图解](https://upload-images.jianshu.io/upload_images/5518628-aea2bb7e8e843db6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/636/format/webp)

- 看图的 D，此时 D 不移动，但它的 index 是最大的，导致更新 lastIndex=3，从而使得其他元素 A,B,C 的 index < lastIndex，导致 A,B,C 都要去移动。
- 理想情况是只移动 D，不移动 A,B,C。因此，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，会影响 React 的渲染性能。


## diff.js
```js
/**
 * Diff two list in O(N).
 * @param {Array} oldList - Original List
 * @param {Array} newList - List After certain insertions, removes, or moves
 * @return {Object} - {moves: <Array>}
 *                  - moves is a list of actions that telling how to remove and insert
 */
function diff(oldList, newList, key) {
  var oldMap = makeKeyIndexAndFree(oldList, key);
  var newMap = makeKeyIndexAndFree(newList, key);

  var newFree = newMap.free;

  var oldKeyIndex = oldMap.keyIndex;
  var newKeyIndex = newMap.keyIndex;

  var moves = [];

  // a simulate list to manipulate
  var children = [];
  var i = 0;
  var item;
  var itemKey;
  var freeIndex = 0;

  // fist pass to check item in old list: if it's removed or not
  while (i < oldList.length) {
    item = oldList[i];
    itemKey = getItemKey(item, key);
    if (itemKey) {
      if (!newKeyIndex.hasOwnProperty(itemKey)) {
        children.push(null);
      } else {
        var newItemIndex = newKeyIndex[itemKey];
        children.push(newList[newItemIndex]);
      }
    } else {
      var freeItem = newFree[freeIndex++];
      children.push(freeItem || null);
    }
    i++;
  }

  var simulateList = children.slice(0);

  // remove items no longer exist
  i = 0;
  while (i < simulateList.length) {
    if (simulateList[i] === null) {
      remove(i);
      removeSimulate(i);
    } else {
      i++;
    }
  }

  // i is cursor pointing to a item in new list
  // j is cursor pointing to a item in simulateList
  var j = (i = 0);
  while (i < newList.length) {
    item = newList[i];
    itemKey = getItemKey(item, key);

    var simulateItem = simulateList[j];
    var simulateItemKey = getItemKey(simulateItem, key);

    if (simulateItem) {
      if (itemKey === simulateItemKey) {
        j++;
      } else {
        // new item, just inesrt it
        if (!oldKeyIndex.hasOwnProperty(itemKey)) {
          insert(i, item);
        } else {
          // if remove current simulateItem make item in right place
          // then just remove it
          var nextItemKey = getItemKey(simulateList[j + 1], key);
          if (nextItemKey === itemKey) {
            remove(i);
            removeSimulate(j);
            j++; // after removing, current j is right, just jump to next one
          } else {
            // else insert item
            insert(i, item);
          }
        }
      }
    } else {
      insert(i, item);
    }

    i++;
  }

  function remove(index) {
    var move = { index: index, type: 0 };
    moves.push(move);
  }

  function insert(index, item) {
    var move = { index: index, item: item, type: 1 };
    moves.push(move);
  }

  function removeSimulate(index) {
    simulateList.splice(index, 1);
  }

  return {
    moves: moves,
    children: children
  };
}

/**
 * Convert list to key-item keyIndex object.
 * @param {Array} list
 * @param {String|Function} key
 */
function makeKeyIndexAndFree(list, key) {
  var keyIndex = {};
  var free = [];
  for (var i = 0, len = list.length; i < len; i++) {
    var item = list[i];
    var itemKey = getItemKey(item, key);
    if (itemKey) {
      keyIndex[itemKey] = i;
    } else {
      free.push(item);
    }
  }
  return {
    keyIndex: keyIndex,
    free: free
  };
}

function getItemKey(item, key) {
  if (!item || !key) return void 666;
  return typeof key === "string" ? item[key] : key(item);
}

exports.makeKeyIndexAndFree = makeKeyIndexAndFree; // exports for test
exports.diff = diff;
```

## 总结

- 尽量不要跨层级的修改 dom
- 设置 key 可以最大化的利用节点
- diff 的效率并不是每种情况下都是最优的
