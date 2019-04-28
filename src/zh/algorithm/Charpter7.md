---
sidebar: auto
sidebarDepth: 2
---
# 算法题答案

# 第四章

  <!-- <

    
 
    
    
    <h4>8.矩阵的乘法运算</h4>
    
    
    

    

    
    <h4>16. 复杂级数的前n项和</h4>
    
     -->

## 4-2

```js
    <h4>2.编写一个程序,在终端输入一个字符,输出它的ASCII码</h4>
    <input class="asc" type="text" />
    <button onclick="change()">查询</button>
```

```js
 let asc = document.querySelector('.asc');

    function change() {
        var key = asc.value
        alert(key.charCodeAt(0))
    }
```

## 4-3

```js
    <h4>3.学校进行成绩分级管理,取消分数制,改为成绩分级评定。具体办法是：小于60分为E类；60分至70分（不含70分）为D类；70分至80分（不含）为C类；80分至90分（不含）为B类；90分以上为A类。设计一个程序，对输入的成绩进行等级划分
    </h4>
    <input class="score" type="text" />
    <button onclick="find()">查询</button>
```

```js
    let ipt = document.querySelector('.score');

    function find() {
        var key = ipt.value
        if (key < 60) {
            alert('您的成绩分级为E')
        } else if (key >= 60 && key < 69) {
            alert('您的成绩分级为C')
        } else if (key >= 70 && key < 79) {
            alert('您的成绩分级为C')
        } else if (key >= 80 && key < 89) {
            alert('您的成绩分级为B')
        } else if (key >= 90 && key <= 100) {
            alert('您的成绩分级为A')
        } else {
            alert('成绩有误，请重新输入！')
        }
    }
```

## 4-4

```js
    <h4>4.已知a为1，b为01，c为001，又知有一个0/1字符串为：“001011101001011001”，编写一个C程序，按照给定的前缀码表为该字符串译码。</h4>
```

```js
    var a = '1',
        b = '01',
        c = '001',
        str = '001011101001011001',
        strs = "";
    for (var i = 0; i < str.length; i++) {
        let key = str.charAt(i)
        switch (key) {
            case '1':
                strs += 'a';
                break;
            case '0':
                {
                    i++;
                    switch (str.charAt(i)) {
                        case '1':
                            strs += 'b';
                            break;
                        case '0':
                            i++;
                            switch (str.charAt(i)) {
                                case '1':
                                    strs += 'c';
                                    break;
                            }
                            break;
                    }
                }
                break;
        }
    }
    console.log(strs)
```

## 4-5

```js
    <h4>5.给定一个年份，判断该年是否是闰年。</h4>
    <input class="year" type="text" />
    <button onclick="years1()">查询</button>
```

```js
    let year = document.querySelector('.year');

    function years() {
        var val = year.value
        if (val % 4 == 0 && val % 100 != 0) {
            alert('此年为闰年')
        } else {
            alert('此年为平年')
        }
    }
```

## 4-7

```js
    <h4>7.矩阵的转置运算</h4>
```

```js
    let twoArr = [
        ['11', '12', '13'],
        ['21', '22', '23'],
        ['31', '32', '33']
    ];
    var newArr = twoArr.map((v, i) => {
        return v.map((val, idx) => {
            var a = val.charAt(0)
            var b = val.charAt(1)
            if (a != b) {
                c = a;
                a = b;
                b = c;
            }
            return a + b
        })
    })
    console.log(newArr)
```

## 4-9

```js
    <h4>9.用位运算操作实现两个整数的交换。例如x1=5，x2=10；交换后x1=10，x2=5。</h4>
```

```js
    var x1 = 5,
        x2 = 10;
    x1 = x1 + x2; //15
    x2 = x1 - x2; //5
    x1 = x1 - x2; //10
    console.log(x1, x2)
```

## 4-12

```js
    <h4>12.记录并输出该段程序执行的时间。</h4>
```

```js
    console.time('global')
    console.log('获取我执行的时间')
    console.timeEnd('global')
```

## 4-13

```js
    <h4>13.将输入的十进制数转化为二进制表示。例如：输入十进制数64，输出二进制数表示1000000</h4>
    <input class="ten" type="text" />
    <button onclick="toTwo()">转二进制</button>
    <input class="two" type="text" />
    <button onclick="toTen()">转十进制</button>
```

```js
    let two = document.querySelector('.two');

    function toTen() {
        var val = two.value
        console.log(parseInt(val, 2))
    }
    let ten = document.querySelector('.ten');

    function toTwo() {
        var num = ten.value * 1
        console.log(num.toString(2))
    }
```

## 4-14

```js
    <h4>14.计打印特殊图案</h4>
    <input class="stars" type="text" />
    <button onclick="line()">星星行数</button>
    <h5 class="star"></h5>
```

```js
    let star = document.querySelector('.star');
    let stars = document.querySelector('.stars');

    function line() {
        var num = stars.value;
        for (var i = 1; i <= num; i++) {
            for (var j = num; j >= i; j--) {
                star.innerHTML += '&ensp;'
            }
            for (var z = 1; z <= 2 * i - 1; z++) {
                star.innerHTML += '*'
            }
            star.innerHTML += '<br/>'

        }
    }
```

## 4-15

```js
    <h4>15.6阶杨辉三角</h4>
    <h5 class="sj"></h5>
```

```js
    var yhsj = function (num) {
        if (num) {
            var result = [
                [1]
            ]
            for (var i = 1; i < num; i++) {
                result[i] = []
                for (var j = 0; j < i + 1; j++) {
                    result[i][j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0)
                }
            }
            return result
        } else {
            return [];
        }
    }
    console.log(yhsj(6))
```

## 4-17

```js
    <h4>17.在一个矩阵中，可能会有这样的元素：它在该行中最大，而在该列中最小。我们把这样的元素称为“鞍点”。一个矩阵中也可能没有“鞍点”。任意输入一个5x5的矩阵，寻找该矩阵中的“鞍点”，并将它在矩阵中的位置（行，列）输出。</h4>
```

```js
    var max_row = 0,
        min_col = 0,
        col_no = 0,
        row_no = 0;

    function arr(arr) {
        for (var i = 0; i < arr.length; i++) {
            max_row = arr[i][0]
            //找出本行最大
            for (j = 0; j < arr[i].length; j++) {
                if (max_row < arr[i][j]) {
                    max_row = arr[i][j]
                    col_no = j;
                    row_no = i;
                }
            }
            //找出本列最小
            min_col = max_row;
            for (var j = 0; j < arr.length; j++) {
                if (min_col > arr[j][col_no]) {
                    min_col = arr[j][col_no]
                }
                if (max_row == min_col && col_no == j) {
                    console.log(arr[row_no][col_no])
                }
            }
        }
    }
    arr([
        [1, 19, 3, 10, 2], //19
        [2, 23, 4, 25, 2],
        [3, 24, 0, 16, 27],
        [4, 25, 6, 17, 8],
        [5, 26, 7, 8, 2]
    ])
```

## 4-18

```js
    <h4>18.n阶勒让德多项式求解</h4>
```

```js
 function lrdd(n, x) {
        if (n == 0) return 1;
        else if (n == 1) return x;
        else if (n >= 1) return ((2 * n - 1) * x - lrdd(n - 1, x) - (n - 1) * lrdd(n - 2, x)) / n
    }
    console.log(lrdd(5, 1.6).toFixed(2))
```

## 4-19

```js
    <h4>19.编写一个递归函数，实现将输入的任意长度的字符串反向输出的功能。例如输入字符串：ABCD，输出字符串：BCDA</h4>
    <input class="overturn" type="text" />
    <button onclick="reversal()">翻转</button>
```

```js
    let overturn = document.querySelector('.overturn');

    function reversal() {
        console.log(overturn.value.split("").reverse().join(""))
    }
```

<!-- ## 4-20

```

``` -->
