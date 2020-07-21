

// JavaScript 入门
// ==========================


// 1.
// JavaScript是一种轻量级的脚本语言。
// 所谓脚本语言（Script Language）是指不具备开发操作系统的能力
//     ，只用来编写控制其他大型应用程序的脚本。
// 他也是一种嵌入式语言（embedded），只做一些数学和逻辑运算，无I/O api,
// 仅能通过宿主环境（host）进行I/O操作
// 常见的宿主环境 是浏览器，服务端是 Node

// 2. 语法核心
//   基本语法构造 和 标准库 
// 宿主环境提供api，如
// 浏览器提供
//   1）浏览器控制类
//   2）DOM类
//   3）Web类
// Node提供
//   1) 文件操作api
//   2) 网络通信api
//   等

// 一 基本语法
// 二 标准库
// 三 浏览器api
// 四 DOM

// 以下是  ECMAScript 5.1
// 使用领域
// 1 浏览器平台化：现今浏览器越来越强大，可以调用很多系统功能
//   如操作本地文件，操作图片，调用摄像头和麦克风等
// 2 Node：
// 3 数据库操作：NoSQL数据库，本身就是在JSON（JavaScript Object Notation）基础上诞生的。
// 4 移动平台开发：React Native等
// 5 内嵌脚本语言：
// 6 跨平台的桌面应用程序：Chromium OS，Window 8等操作系统支持JS编写应用程序
//   Google 的 Chrome App, GitHub 的 Electron,TideSDK 都可以用来编写跨平台应用

// 强大的性能
// 1 语法灵活，表达力强
//   JS既支持类似C的过程式编程，也支持函数式编程，可以编写并发处理（concurrent）
//   JS所有值都是对象，不需要预定义数据结构
// 2 支持编译运行
//   JS本身是解释型语言，但现代浏览器中JS都是编译后运行，程序会被高度优化，运行效率接近二进制程序
//   JS引擎正快速发展，性能将越来越好
//   WebAssembly格式。
// 3 事件驱动（event-driven） 和 非阻塞式设计（non-blocking）
//   在服务端适合高并发环境，普通硬件可以承受很大访问量

// 开放性
// 遵循ECMA-262的ISO国际标准，主要实现 V8引擎 和 SpiderMonkey引擎
// JS是一门开放的语言，不属于任何公司和个人，不存在 版权 和 专利问题
// JS语言标准由TC39委员会负责制定，该委员会运作透明，所有讨论开放，会议记录对外公开



//  JavaScript 诞生
// 1990年底 CERN 欧洲核能研究组织 的科学家 Tim Berners-Lee 发明了 万维网WWW（World Wide Web）
//     最早的网页只能运行在终端里
// 1992年底 NCSA 美国国家超级电脑应用中心 开发了第一个浏览器 Mosaic
//     从此网页可以在窗口浏览
// 1994 10 NCSA的一位主要程序员 Marc Andreessen 联合 风投 Jim Clark 成立了 Mosaic通信公司，
//     后改名Netscape，开发了新一代浏览器 Netscape Navigator
// 1994 12 Navigator发布了1.0 市场份额超过90%
//     不久，该公司发现浏览器需要一种脚本语言来控制浏览器行为，期初使用Java applet，
//     但Java语法太重，所以弃用
// 1995 Netscape公司雇佣了 Brendan Eich开发这种脚本语言，希望以Scheme语言为蓝本，实现这种新语言
// 1995 5 Brendan Eich 用了10天，设计出第一版，最初Netscape公司将此语言命名为Mocha，
// 1995 9 改为 LiveScript，
// 1995 12 与Sun公司达成协议，联合发布了 JavaScript语言
// 1996 3 Naviaator 2.0 内置了 JavaScript

// JavaScript 与 ECMAScript 的关系
// 1996 8 微软模仿JS开发了 JScript
// 1996 11 Netscape公司将JS提交ECMA（European Computer Manufactures Association），
//     希望成为国际标准，ECMA的39号技术委员（Technical Committee 39）会负责制定和审核这个标准
// 1997 7 ECMA 组织发布 262 号标准文件，规定了浏览器脚本语言的标准，ECMAScript 1.0
// ECMA-262 后来被另一个国际标准化组织 ISO（International Organization for Standardization）批准
//     标准号：ISO-16262

// JavaScript 版本
// 1997 7  ECMAScript 1.0
// 1998 6  ECMAScript 2.0
// 1999 12 ECMAScript 3.0
// 2007 10 ECMAScript 4.0草案发布
// 2008 7 由于各方分歧太大 终止4.0，发布为 ECMAScript 3.1
// 2009 12 ECMAScript 5.0
// 2011 6  ECMAScript 5.1
// 2013 3  ECMAScript 6 草案冻结
// 2012 12 ECMAScript 6 草案发布
// 2015 6  ECMAScript 6 更名 ECMAScript 2015



// JavaScript基本语法
// -------------------------------

// 1 语句
// 语句（statement）和 表达式（expression）的区别：
//     语句是为了某种操作，表达式是为了得到返回值

// 2 变量
// 变量是对值的具名引用
// 变量名区分大小写
var a = 5;
var A = 6;
// 声明变量未赋值时，其值为 undefined
var b; 
console.log(b); // undefined
// 引用未定义的变量报错
console.log(X); // Uncaught ReferenceError: X is not defined
// JS是动态类型语言，变量可以随时更改类型
var c = 1;
c = 'hello';
// 变量提升 hoisting
console.log(d);
var d = 1;
// 以上写法是不会报错的，因为JS解析引擎的工作方式是
// 先解析代码，将所有变量声明提升到代码头部，即 hoisting
// var d;
// console.log(d); // undefined
// d = 1;

// 标识符（identifier）
// 变量名 函数名 JS中大小写敏感
// 标识符规则
// 1 首字符，任意 Unicode 字母 及 $ _
// 2 之后的字符，还可以是0-9

// 注释
// 单行注释： //
// 多行注释： /*   */

// 区块 block
// 区块不单独构成作用域（scope）
{
    var a = 1;
}
console.log(a); // 1

// 条件语句
// if判断时
//    优先使用 === 而非 ==
//    尽量常量写在前，if (2 === d)，因为 if (d = 2) 编译可以通过，不报错
if (1 === a) {
    console.log(a);
} else if (2 === a) {
    console.log(a);
} else {
    console.log(a);
}

// switch时
switch(1 + 3) {
    case 2 + 2: 
        console.log('执行了');
        break;
    default:
}
// 上述代码是可以的
// switch 和 case 后的表达式采用的是严格相等运算符 ===

// 三元运算符 ? :
console.log(1 === a ? 'true' : 'false');

// while, do while
var i = 0;
while(i < 100) {
    console.log(i);
    i++;
}

do {
    console.log(i);
} while(i<5);

// for continue break label
var x = 3;
top: for (var i=0; i<x; i++) {
    if (1 === i) {
        continue;
    }
    if (3 === i) {
        break top;
    }
    console.log(i);
}






// JavaScript 数据类型
// ==========================

// 6种数据类型
// 原始类型（primitive type）
// 1）number
// 2）string
// 3）boolean

// 合成类型（complex type）
// 4）object
//     object
//     array
//     function

// 特殊值
// 5）undefined
// 6）null

// typeof运算符
console.log(typeof 123); // number
console.log(typeof '123'); // string
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof function f(){}); // function
console.log(typeof []); // object

function isNumber(val, type) {
    return typeof val === "number";
}



// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined

// 被转成false的6个值
// null, undefined, false, 0, [''|""], NaN

// 判断一个变量是否为对象
function isObject(value) {
    return value === Object(value);
}

Object.keys();
Object.getOwnPropertyNames();
Object.getOwnPropertyDescriptor();
Object.defineProperty();
Object.defineProperties();
Object.preventExtensions();
Object.isExtensible();
Object.seal();
Object.isSealed();
Object.freeze();
Object.isFrozen();
Object.create();
Object.getPrototypeOf();

Object.prototype.valueOf();
Object.prototype.toString();
Object.prototype.toLocaleString();
Object.prototype.hasOwnProperty();
Object.prototype.isPrototypeOf();
Object.prototype.propertyIsEnumerable();












