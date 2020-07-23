
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

export default BLUtils;