// 语句和表达式的区别：
//     语句是为了某种操作，表达式是为了得到返回值

// 变量是对值的具名引用
// 变量名区分大小写
var a = 5;
var A = 6;

// 声明变量未赋值时，其值为 undefined
var b; // undefined

// JS是动态类型语言，变量可以随时更改类型
var c = 1;
c = 'hello';

// 变量提升 hoisting
console.log(d);
var d = 1;
// 以上写法是不会报错的，因为JS解析引擎的工作方式是
// 先解析代码，将所有变量声明提升到代码头部，即 hoisting
// var d;
// console.log(d);
// d = 1;

// if判断时
//    优先使用 === 而非 ==
//    常量写在前，if (2 === d)，因为 if (d = 2) 编译可以通过

// switch时
switch(1 + 3) {
    case 2 + 2: 
        console.log('执行了');
        break;
    default:
}
// 上述代码是可以的
// switch 和 case 后的表达式采用的是严格相等运算符 ===

// 数据类型
// 6种

// 原始类型 primitive type
// number
// string
// boolean

// 合成类型 complex type
// object
//     object
//     array
//     function

// 特殊值
// undefined
// null

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






