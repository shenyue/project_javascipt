

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


// parseFloat()：将字符串转10进制浮点数
// 基本同 parseInt()

// isNaN()：判断一个值是否为NaN
console.log(isNaN(NaN)); // true
console.log(isNaN(123)); // false

// isNaN只对数值有效，所以先把字符串转成数值。
console.log(isNaN('Hello')); // true
// 相当于
console.log(isNaN(Number('Hello'))); // true

console.log(isNaN({})); // true
// 相当于
console.log(isNaN(Number({}))); // true
console.log(isNaN(['xyz'])); // true
// 相当于
console.log(isNaN(Number(['xyz']))); // true

// 但是对空数组 或 只有一个数值成员的数组返回 false
console.log(isNaN([])); // false
console.log(isNaN([123])); // false
console.log(isNaN(['123'])); // false


function myIsNaN(value) {
    return typeof value === 'number' && isNaN(value);
  }
function myIsNaN(value) {
    return value !== value;
}
console.log(myIsNaN(NaN)); // true
console.log(myIsNaN(1)); // false
console.log(myIsNaN('1')); // false
console.log(myIsNaN(true)); // false
console.log(myIsNaN(undefined)); // false
console.log(myIsNaN(null)); // false
console.log(myIsNaN({})); // false
console.log(myIsNaN([])); // false

// isFinite() 返回一个布尔值，表示某个值是否为正常的数值
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(undefined)); // false
// 除了以上四个值之外，其他均返回true

console.log(isFinite(null)); // true
console.log(isFinite(-1)); // true



// 字符串
// -------------------------------
//多个排列在一起的字符
'abc'
"abc"
'I\'m fine'
"I'm fine"
"\"Hello World\""
// 多行书写采用反斜杠，反斜杠后边必须是换行符
var longString = " Hello \
                   World \
                   ! \
                 ";
// 多行最好还是字符串拼接
var longString = " Hello "
               + "World "
               + "!";

// 转义
// \0 ：null（\u0000）
// \b ：后退键（\u0008）
// \f ：换页符（\u000C）
// \n ：换行符（\u000A）
// \r ：回车键（\u000D）
// \t ：制表符（\u0009）
// \v ：垂直制表符（\u000B）
// \' ：单引号（\u0027）
// \" ：双引号（\u0022）
// \\ ：反斜杠（\u005C）

// 特殊用法 
// Unicode码点
// \HHH 3个8进制数（000 ~ 377），只能输出256中字符
console.log('\251'); // ©
// \xHH 2个16进制数（00 ~ FF），只能输出256中字符
console.log('\xA9'); // ©
// \uXXXX 4个16进制数（0000 ~ FFFF）
console.log('\u00A9'); // ©

console.log('\\'); // \

// 字符串 与 数组
// 字符歘可以看成字符数组，但不能以数组方式设置其值
var s = 'Hello';
console.log(s[0]); // H
console.log(s[1]); // e
console.log(s[3]); // l

// 如果下标超出范围 或者 非数字，返回 undefined
console.log(s[5]); // undefined
console.log(s[-1]); // undefined
console.log(s['x']); // undefined

s[2] = 'X';
console.log(s); // Hello

// length 属性
// length属性无法改变
console.log(s.length); // 5
s.length = 7;
console.log(s.length); // 5


// 字符集
// JS 使用 Unicode字符集，JS引擎内部所有字符都用Unicode字符集
// JS 允许直接使用 Unicode码点表示字符，包括变量名。eq：\u00A9 版权符号
// JS 对于码点在 U+10000 ~ U+10FFFF之间的字符，JS认为他是两个字符（length=2）,
//    所以，JS返回的字符长度可能不正确。


// Base64 转码
// 有时，文本里出现一些不可打印的字符，如ASCII码的 0 ~ 31符号都无法打印，
//     这时可以用base64转码。
// 还有时，需要以文本格式传递二进制数据，也可以Base64转码。
// Base64 是一种编码方法，可以将任意值转成 0~9，A~Z，a~z，+，/ 这64个字符，
//     目的是不出现特殊字符，简化程序处理。
// JS 原生 Base64 方法，这2个方法不适合非ASCII码的字符
// btoa()：任意值转 Base64
// atob()：Base64 转原值
// btoa('你好'); // 报错

// 将非ASCII码字符转Base64
function b64Encode(str) {
    return btoa(encodeURIComponent(str));
}
function b64Decode(str) {
    return decodeURIComponent(atob(str));
}
console.log(b64Encode('你好')); // JUU0JUJEJUEwJUU1JUE1JUJE
console.log(b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE')); // 你好
 




// 对象
// -------------------------------
// 键名以 ES6 的 Symbol值 形式
var obj = {
    foo: 'Hello',
    bar: 'World'
};
var obj = {
    'foo': 'Hello',
    'bar': 'World'
};
var obj = {
    1: 'Hello',
    2: 'World',
    '1p': '1P',
    'h w': 'H W',
    'p+q': 'P+Q'
};
// 以上这些key都可以
// 但下边的不行
// var obj = {
//     1p: 'Hello'
// };

var obj = {
    p: function(x) {
        return 2 * x;
    }
};
console.log(obj.p(1)); // 2 

var o1 = {};
var o2 = { bar: 'Bar' };
o1.foo = o2;
console.log(o1.foo.bar); // Bar

var obj = {
    p: 123,
    m: function () {}, // 此逗号可有可无
};

// 对象的引用
// 多个变量指向同一个地址，改变其中任一一个对象的属性，都会影响其他对象。
var o1 = {};
var o2 = o1;
o1.a = 1;
console.log(o2.a);
o2.b = 2;
console.log(o1.b);
o1 = 1; // o1 解除了对原来的引用，所以 o2 不受影响
console.log(o2);

var x = 1;
var y = x;
x = 2;
console.log(y); // 1

// 表达式还是语句？
{ foo: 'foo'}
// JS 引擎的做法是，如果遇到这种情况，一律解释为代码块
// 想要其为 表达式，采用()包裹
({foo: 'foo'})

// 属性操作
// 属性读取
var obj = {
    p: 'Hello World'
};
console.log(obj.p); // Hello World
console.log(obj['p']); // Hello World
// 采用方括号运算符，键名必须卸载引号里，否则会被当成变量
var foo = 'bar';
var obj = {
    foo: 1,
    bar: 2
};
console.log(obj[foo]); // 2
// 方括号内部，可以使用表达式
obj['foo' + 'bar'];
obj[3 + 3];
// 数字键可以不加引号
var obj = {
    0.7: 'Hello World'
}
console.log(obj[0.7]); // Hello World
console.log(obj['0.7']); // Hello World
// 数值键 不能使用 .运算符
var obj = {
    123: '123'
};
// console.log(obj.123); // 报错
console.log(obj[123]);


// 属性赋值
var obj = {};
obj.foo = 1;
obj['bar']  = 2;
console.log(obj.foo); // 1
console.log(obj.bar); // 2


// 属性查看
console.log(Object.keys(obj)); // foo bar


// 属性删除
console.log(delete obj.foo); // true 
// delete 遇到不能删除的属性返回 返回false，否则返回 true
// delete 只能删除对象自身的属性 
console.log(Object.keys(obj)); // bar
console.log(obj.foo); // undefined


// 属性是否存在
console.log('foo' in obj); // false
console.log('bar' in obj); // true
var obj = {};
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}


// 属性遍历
var obj = {a: 1, b: 2, c: 3};
for (var i in obj) {
    console.log('键名：', i);
    console.log('键值：', obj[i]);
}


// with 语句
// 建议不要使用
with (obj) {

}


// 函数
// -------------------------------
// 函数声明的3种方法
// 1 function命令
function f1() {}
// 2 函数表达式 Function Expression
var f1 = function() {};
// 3 Function构造函数
var f1 = new Function();
// 函数重复声明，后面的覆盖前面的

// JS 将函数看成一种值，可以赋值给 变量 和 对象属性，可以当 参数 和 返回值

// 函数名提升
// 同变量名提升一个道理
f();
function f() {}

// 函数的 属性 和 方法
// name 属性
console.log(f.name); // f
// length 属性
// 定义的参数个数
function f(x, y) {}
console.log(f.length); // 2

// toString()
// 返回 function 的源码
console.log(f.toString()); // function f(x, y) {}
// 原生函数调用toString()返回[native code]


// 函数作用域 （scope）
// ES5 规范定义了 全局作用域 和 函数作用域 
// ES6 增加了 块级作用域
// 全局变量 （global variable）：顶层函数外部声明的变量为全局变量
var g = 1;
function f() {
    console.log(g); // 1
}
f();
// 函数内部定义的变量叫 局部变量（local variable）
function f() {
    var l = 1;
}
console.log(l); // l is not defined
// 同名局部变量覆盖全局变量
function f() {
    var g = 5;
    console.log(g); // 5
}
f();
console.log(g); // 1

// 函数内部变量提升，同理

// 函数本身的作用域
var a = 1;
var x = function() {
    console.log(a); // 此处的 a 为全局变量a
};
function f() {
    var a = 2;
    x(); // 不会使用局部变量 a
}
console.log(f()); // 1

var x = function() {
    console.log(aa); // 此处 aa 未定义
};
function y(f) {
    var aa = 2;
    f(); // 不会使用局部变量 aa
}
y(x); // aa is not defined

function foo() {
    var x = 1;
    function bar() {
        console.log(x); // 此处使用局部变量 x
    }
    return bar;
}
var x = 2;
var f = foo(); // 不会使用全局变量 x
console.log(f()); // 1


// 参数
// 参数的省略
function f(a, b) {
    return a;
}
console.log(f(1, 2, 3)); // 1
console.log(f(1)); // 1
console.log(f()); // undefined
console.log(f.length); // 2

// console.log(f(, 1)); // Uncaught SyntaxError: Unexpected token ','
console.log(f(undefined, 1)); // undefined


// 参数传递方式
// 原值类型的值，值传递（passes by value），函数体内修改参数不影响外部。
var p = 2;
function f(p) {
    p = 3;
    console.log(p); // 3
}
f(p);
console.log(p); // 2

// 如果是复合类型的值，引用传递（pass by reference），内部修改参数会影响外部
var obj = { p: 1 };
function f(o) {
    o.p = 2;
}
f(obj);
console.log(obj.p); // 2
// 但如果是替换掉整个参数，则不会影响外部，因为引用指向的地址变了
var obj = { p: 1 };
function f(o) {
    o = { x: 1 };
}
f(obj);
console.log(obj.p);

// 同名参数
// 以后边的为准
function f(a, a) {
    console.log(a);
}
f(1, 2); // 2
f(1); // undefined

function f(a, a) {
    console.log(arguments[0]);
}
f(1) // 1

// arguments 对象
// 由于 JS 允许函数有不定数目的参数，所以需要一种机制让函数体内部读取所有参数。
// 这就是 arguments 的由来
// arguments 包含了 运行时 函数的所有参数
var f = function() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
};
f(1, 2, 3); // 1 2 3

// 正常情况下，arguments 对象可以运行时修改
var f = function(a, b) {
    arguments[0] = 2;
    arguments[1] = 3;
    return a + b;
};
f(1, 1); // 5
// 严格模式下，则不可以
var f = function(a, b) {
    'use strict'; // 严格模式
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
};
f(1, 1); // 2
// 通过 arguments.length 能检查出调用函数时，传进来几个参数
function f() {
    return arguments.length;
}
console.log(f(1, 2, 3)); // 3
console.log(f(1, 2)); // 2
console.log(f(1)); // 1
console.log(f()); // 0

// 与数组的关系
// arguments 像数组 但不是 它不能调用数组的方法

// callee 属性
// 返回对应的 原函数，严格模式下禁用此属性
var f = function() {
    console.log(arguments.callee === f); // true
};
f(); // true


// 闭包（closure）
// JS 的链式作用域（chain scope），父中的所有变量对子可见。
//    子中的属性对父则不可见
// 闭包的最大特点，就是它可以记住其诞生环境
// 闭包的作用：1 是读取函数内部的变量；
//           2 是可以使其诞生环境一直存在
//           3 封装对象的 私有属性 和 方法
// 1
function f1() {
    var a = 999;
    function f2() {
        console.log(a);
    }
    return f2;
}
var result = f1();
result(); // 999
// 2
function createIncrementor(start) {
    return function() {
        return start++;
    };
}
var inc = createIncrementor(5);
console.log(inc()); // 6
console.log(inc()); // 7
console.log(inc()); // 8
// 3
function Person(name) {
    var _age;
    function setAge(val) {
        _age = val;
    }
    function getAge() {
        return _age;
    }

    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    };
}
var p = Person('张三');
p.setAge(40);
console.log(p.name);
console.log(p.getAge());
// 注意，外层函数每次运行都会生成新的闭包，而这个闭包又会保存
//    外部函数的内部变量，所以内存小号很大。不能滥用，可能会
//    造成网页性能问题。


// 立即调用的函数表达式（IIFE）
// Immediately-Invoked Function Expression
// 有些函数定义出来想要立即调用
// 但是这样写会报错 function f() {}();
// 因为 function 关键字，既可以当做表达式，也可以当做语句
// 语句
function f() {}
// 表达式
var f = function() {};
// 为了避免歧义，JS 引擎把 出现在行首function一律解析成语句。
//    这就是为什么 unction f() {}(); 报错
// 为了解决此问题，只要function不在行首就可以
(function f() {}());
(function f() {})();
var i = function() {}();
true && function() {}();
0, function() {}();
!function() {}();
// 以上都可以
// 通常只对匿名函数使用IIFE，目的有2个
//    1 不必为函数命名，避免污染全局变量
//    2 封装私有变量
// 2中写法
// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);
// 写法二
(function() {
    var tmp = newData;
    processData(tmp);
    storeData(tmp);
}());
// 写法二更好，避免污染了全局变量


 // eval命令



 // 数组
 // -------------------------------
 // 定义
 var arr = ['a', 'b', 'c']; 
 var arr = [];
 arr[0] = 'a';
 arr[1] = 'b';
 arr[2] = 'c';
 var arr = [
    {a: 1},
    [1, 2, 3],
    function() {return true;}
];
// 多维数组
var a = [[1, 2], [3, 4]];
console.log(typeof [1, 2, 3]); // object
console.log(Object.keys(arr)); // ["0", "1", "2"]
// 数组的键名其实也是字符串，非字符串会转成字符串
console.log(arr['0']); // {a:1}

// length 属性
// JS 使用 32 位整数，保存元素个数，也就是说，数组成员最多有 2^32-1 个
// length 的最大值 4,294,967,295，length 可写
// 数组的键值不需要连续，数组是一种动态结构，可随时增减元素
var arr = ['a', 'b'];
console.log(arr.length); // 2
arr[1000] = 'e';
console.log(arr.length); // 1001
// length 可写
arr.length = 0;
console.log(arr); // []
arr.length = 2;
console.log(arr[1]); // undefined

// 设置负值
[].length = -1; // RangeError: Invalid array length
// 数组元素个数大于等于2的32次方
[].length = Math.pow(2, 32); // RangeError: Invalid array length
// 设置字符串
[].length = 'abc'; // RangeError: Invalid array length
var a = [];
a['p'] = 'abc';
console.log(a.length); // 0
a[2.1] = 'abc';
console.log(a.length); // 0

var arr = [];
arr[-1] = 'a';
arr[Math.pow(2, 32)] = 'b';
console.log(arr.length); // 0
console.log(arr[-1]); // a
console.log(arr[4294967296]); // b

// in 运算符
// 检查某个键名是否存在
var arr = ['a', 'b', 'c'];
console.log(2 in arr); // true
console.log('2' in arr); // true
console.log(4 in arr); // false

// for in 循环遍历数组
var a = [1, 2, 3];
a.foo = true;
for (var i in a) {
  console.log(a[i]); // 1 2 3 true
}

// while 遍历数组
var a = [1, 2, 3];

// for循环
for(var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

// while循环
var i = 0;
while (i < a.length) {
  console.log(a[i]);
  i++;
}
var l = a.length;
while (l--) {
  console.log(a[l]);
}

// forEach 遍历数组
var colors = ['r', 'g', 'b'];
colors.forEach(function(color) {
    console.log(color);
});

// 数组的空位
// 空位不影响 length
var a = [1, , 1];
console.log(a.length); // 3
// 逗号在最后，不会产生空位
var a = [1, 1,];
console.log(a.length); // 2
// 空位返回 undefined
var a = [, , ,];
console.log(a[1]); // undefined
// delete 删除一个元素，会产生空位，但不影响 length
var a = [1, 2, 3];
delete a[1];
console.log(a[1]); // undefined
console.log(a.length); // 3

// 空位遍历会被跳过
var a = [, , ,];
a.forEach(function (x, i) {
  console.log(i + '. ' + x); // 不产生任何输出
})
for (var i in a) {
  console.log(i); // 不产生任何输出
}
console.log(Object.keys(a)); // []

// undefined 则不会被跳过 
var a = [undefined, undefined, undefined];
a.forEach(function (x, i) {
  console.log(i + '. ' + x);
});
// 0. undefined
// 1. undefined
// 2. undefined
for (var i in a) {
  console.log(i);
}
// 0
// 1
// 2
console.log(Object.keys(a));
// ['0', '1', '2']

// 类数组
function args() { return arguments }
var arrayLike = args('a', 'b');
console.log(arrayLike[0]); // 'a'
console.log(arrayLike.length); // 2
console.log(arrayLike instanceof Array); // false

// DOM元素集
var elts = document.getElementsByTagName('h3');
console.log(elts.length); // 3
console.log(elts instanceof Array); // false

// 字符串
console.log('abc'[1]); // 'b'
console.log('abc'.length); // 3
console.log('abc' instanceof Array); // false

// 类数组的遍历
// 1
var arrayLike = args('a', 'b');
var arr = Array.prototype.slice.call(arrayLike);
arr.forEach(function (chr) {
    console.log(chr);
});
// a b
// 2
function print(value, index) {
    console.log(index + ' : ' + value);
}
Array.prototype.forEach.call(arrayLike, print);

Array.prototype.forEach.call('abc', function (chr) {
    console.log(chr);
});
// a b c





















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












