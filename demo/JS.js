

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

// typeof null 返回 object，是因为95年JS第一版中没有数据类型null，
//     只把它当做object的特殊值，后来独立出来，但为了兼容之前的代码，
//     所以返回object就没法改变了


//null 和 undefined
null == undefined
console.log(undefined == null); // true
console.log(null === undefined); // false
console.log(null == false); // false
console.log(undefined ==  false); // false

// 95年JS诞生时，只有null，没有undefined，null是object的特殊值，
//     可以自动转换成0。Brendan Eich觉得表示无的值不应该是对象，
//     所以，他又设计了 undefined。
// null 和 undefined 的区别
//     null：表示一个空对象，转换数值时为 0
//     undefined：表示 此处无定义，转换数值时为 NaN
Number(null); // 0
Number(undefined); // NaN

// 返回 undefined 的典型场景
// 1 变量声明了，但没有赋值
var i;
console.log(i); // undefined
// 2 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
    console.log(x);
}
f(); // undefined
// 3 对象没有赋值的属性
var o = new Object();
console.log(o.p); // undefined
// 4 函数没有返回值时，默认返回 undefined
function f2() {};
console.log(f2()); // undefined


// 布尔值

// 被转成 false 的6个值
// null, undefined, false, 0, [''|""], NaN
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(""));
console.log(Boolean(NaN));

// true
console.log(Boolean([]));
console.log(Boolean({}));


// 数值
// -------------------------------

// JS内部，所有数字都是以64位浮点数存储的，整数也如此
console.log(1 === 1.0); // true
console.log((0.1 + 0.2) === 0.3); // false
console.log(0.3 / 0.1); // 2.9999999999999996
console.log((0.3 - 0.2) === (0.2 - 0.1)); // false

// 数值精度
// IEEE 754 JS 浮点数的64个二进制位，从左到右的组成
// 第 1 位：符号位 1，正数；2，负数
// 第 2 ~ 12 （11）位：指数部分
// 第 13 ~ 64 （52）位：小数部分

// 指数部分取值为（0 ~ 2047）
// IEEE 754 规定，如果指数部分在 0 ~ 2047（不含两个端点）之间，
//     那么有效数字的第一位默认总是 1，不保存在64位浮点数之中。
//     因此 JS 提供的有效数字最长为 53 个二进制位。
// 进度最多到 53 个二进制位，-2^53 ~ 2^53
// 一个数值 在JS内部的表示形式
// (-1)^符号位 * 1.xx...xx * 2^指数部分
// 绝对值小于 2^53 的 整数 都可以精确表示
console.log(Math.pow(2, 53)); // 9,007,199,254,740,992
// 大于 2^53 的 整数运算结果开始出错
console.log(Math.pow(2, 53) + 1); // 9007199254740992
console.log(Math.pow(2, 53) + 2); // 9007199254740994
console.log(Math.pow(2, 53) + 3); // 9007199254740996
console.log(Math.pow(2, 53) + 4); // 9007199254740996
console.log(Math.pow(2, 53) + 5); // 9007199254740996
console.log(Math.pow(2, 53) + 6); // 9007199254740998
// 多出来的数字无法保存，变成0
console.log(9007199254740992111); // 9007199254740992000
// 2^53 是一个16位的十进制数，JS 对15位以内的十进制数都可以精确处理
// 以上说的都是数值精度问题

// 数值范围
// JS 能表示的数值范围 2^1024 ~ 2^-1023之间（开区间）。
// 如果一个数大于 2^1024 则正向溢出，返回 Infinity
console.log(Math.pow(2, 1024)); // Infinity
// n^-m 负指数相当于 1/n^m
console.log(Math.pow(2, -1023)); // 1.1125369292536007e-308
console.log(Math.pow(2, -1074)); // 5e-324
console.log(Math.pow(2, -1075)); // 0
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

// 数值表示
// 采用科学计数法的情况
// 1 小数点前数字多于21位
// 2 小数点后0多于5个
console.log(123456789123456789123); // 123456789123456800000
console.log(1234567891234567891230); // 1.234567891234568e+21
console.log(0.000009); // 0.000009
console.log(0.0000009); // 9e-7
console.log(0.0000091); // 0.0000091

// 数值进制
// 十进制：12
// 八进制：0o 或 0O前缀 eg: 0o12, 0O12
// 二进制：0b 或 0B前缀 eg: 0b01, 0B01
// 十六进制：0x 或 0X前缀 eg: 0xF2, 0XF2

// 特殊数值
// 正0 和 负0
// 因为 JS 数值 64位中 有一个符号位，所以任何正数值都会有对应的负数值，0也一样
console.log(0 === -0); // true
console.log(0 === +0); // true
console.log(+0 === -0); // true

// 当+-0作为除数的时候，返回值不一样
console.log((1 / +0)); // Infinity
console.log((1 / -0)); // -Infinity
console.log((1 / +0) === (1 / -0)); // false



// NaN 非数值 (Not a Number)
console.log(5 - 'x'); // NaN
console.log(Math.acos(2)); // NaN
console.log(Math.log(-1)); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(0 / 0); // NaN
console.log(NaN + 32); // NaN
console.log(NaN - 32); // NaN
console.log(NaN * 32); // NaN
console.log(NaN / 32); // NaN
console.log(NaN % 32); // NaN

console.log(typeof NaN); // number
console.log(NaN === NaN); // false
console.log([NaN].indexOf(NaN)); // -1
console.log(Boolean(NaN)); // false



// 无穷 Infinity
// Infinity与NaN比较，总是返回false
console.log(Infinity > NaN); // false
console.log(-Infinity > NaN); // false
console.log(Infinity < NaN); // false
console.log(-Infinity < NaN); // false
console.log(Math.Infinity === -Math.Infinify); // false

console.log(Math.pow(2, 1024)); // Infinity
console.log(1 / 0); // Infinity
console.log(1 / -0); // -Infinity
console.log(-1 / -0); // Infinity

console.log(Infinity + 5); // Infinity
console.log(Infinity - 5); // Infinity
console.log(Infinity * 5); // Infinity
console.log(Infinity / 5); // Infinity
console.log(Infinity % 5); // NaN

console.log(5 + Infinity); // Infinity
console.log(5 - Infinity); // -Infinity
console.log(5 * Infinity); // Infinity
console.log(5 / Infinity); // 0
console.log(5 % Infinity); // 5

console.log(0 + Infinity); // Infinity
console.log(0 - Infinity); // -Infinity
console.log(0 * Infinity); // NaN
console.log(0 / Infinity); // 0
console.log(0 % Infinity); // 0

console.log(Infinity + 0); // Infinity
console.log(Infinity - 0); // Infinity
console.log(Infinity * 0); // NaN
console.log(Infinity / 0); // Infinity
console.log(Infinity % 0); // NaN

console.log(Infinity + Infinity); // Infinity
console.log(Infinity - Infinity); // NaN
console.log(Infinity * Infinity); // Infinity
console.log(Infinity / Infinity); // NaN
console.log(Infinity % Infinity); // NaN

console.log(null + Infinity); // Infinity
console.log(null - Infinity); // -Infinity
console.log(null * Infinity); // NaN
console.log(null / Infinity); // 0
console.log(null % Infinity); // 0

console.log(Infinity + null); // Infinity
console.log(Infinity - null); // Infinity
console.log(Infinity * null); // NaN
console.log(Infinity / null); // Infinity
console.log(Infinity % null); // NaN

console.log(undefined + Infinity); // NaN
console.log(undefined - Infinity); // NaN
console.log(undefined * Infinity); // NaN
console.log(undefined / Infinity); // NaN
console.log(undefined % Infinity); // NaN

console.log(Infinity + undefined); // NaN
console.log(Infinity - undefined); // NaN
console.log(Infinity * undefined); // NaN
console.log(Infinity / undefined); // NaN
console.log(Infinity % undefined); // NaN


// 与数值相关的方法
// parseInt()：将字符串转10进制整数
// 有空格去空格，后字符串转数值，
console.log(parseInt('123')); // 123
console.log(parseInt('    123   ')); // 123
// 有小数舍弃
console.log(parseInt(1.23)); // 1
console.log(parseInt('1.23')); // 1
// 有非数字部分，解析到此位置
console.log(parseInt('8a')); // 8
console.log(parseInt('12**')); // 12
console.log(parseInt('12.34')); // 12
console.log(parseInt('15e2')); // 15
console.log(parseInt('15px')); // 15
// 开头非数字，无数字，返回NaN
console.log(parseInt('abc')); // NaN
console.log(parseInt('.3')); // NaN
console.log(parseInt('')); // NaN
console.log(parseInt('+')); // NaN

console.log(parseInt('+1')); // 1

// 进制
console.log(parseInt('0b1')); // 0
console.log(parseInt('0o1')); // 0
// 仅0x的16进制开头可解析成数值，上边2进制，8进制则不行
console.log(parseInt('0x1')); // 1

console.log(parseInt(0b1000)); // 8
console.log(parseInt(08)); // 8
console.log(parseInt(0x8)); // 8

console.log(parseInt(1000000000000000000000.5)); // 1
console.log(parseInt('1e+21')); // 1
console.log(parseInt(0.0000008)); // 8
console.log(parseInt('8e-7')); // 8

// 进制转换
console.log(parseInt('1000')); // 1000
// 等同于
console.log(parseInt('1000', 10)); // 1000

console.log(parseInt('1000', 2)); // 8
console.log(parseInt('1000', 6)); // 216
console.log(parseInt('1000', 8)); // 512
// 进制参数：2~36范围内有意义，其余忽略
console.log(parseInt('10', 37)); // NaN
console.log(parseInt('10', 1)); // NaN
console.log(parseInt('10', 0)); // 10
console.log(parseInt('10', null)); // 10
console.log(parseInt('10', undefined)); // 10
// 对于指定进制，从最高位开始，只返回可以转换的数值
console.log(parseInt('1546', 2)); // 1
console.log(parseInt('546', 2)); // NaN

console.log(parseInt('011', 2)); // 3
console.log(parseInt(011, 2)); // NaN




















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












