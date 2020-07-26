
// 工具对象
var BLUtils = {};

// 获取类型字符串
BLUtils.type = function(o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

// 绑定类型判断函数
[ 'Null'
, 'Undefined'
, 'Object'
, 'Array'
, 'String'
, 'Number'
, 'Boolean'
, 'Function'
, 'RegExp' ].forEach(function(t) {
    BLUtils['is' + t] = function(o) {
      return BLUtils.type(o) === t.toLowerCase();
    };
});
// eg:
// console.log(BLUtils.isObject({})); // true
// console.log(BLUtils.isNumber(NaN)); // true
// console.log(BLUtils.isRegExp(/abc/)); // true




// ======= Number =============
var BLUtils = {};
BLUtils.Number = {};
BLUtils.Number.getRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
};
BLUtils.Number.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// eg:
console.log(BLUtils.Number.getRandomArbitrary(1.3, 6.8));
console.log(BLUtils.Number.getRandomInt(1, 5));




// ======= String =============
// var BLUtils = {};
BLUtils.String = {};
BLUtils.String.randomString = function(length) {
    var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
    ALPHABET += '0123456789-_';
    var str = '';
    for (var i=0; i<length; ++i) {
        var rand = Math.floor(Math.random() * ALPHABET.length);
        str += ALPHABET.substring(rand, rand + 1);
    }
    return str;
};
// eg:
console.log(BLUtils.String.randomString(32));




// ======= Date =============
// var BLUtils = {};
// 计算本年度还剩多少天
BLUtils.Date = {};
BLUtils.Date.leftDays = function() {
    var today = new Date();
    var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
    var msPerDay = 24 * 60 * 60 * 1000;
    return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
}
// eg:
console.log(BLUtils.Date.leftDays());




// ======= RegExp =============
BLUtils.RegExp = {};
// eg:
console.log(BLUtils.Date.leftDays());


export default BLUtils;