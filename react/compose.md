### 组合函数解析

``` js
function compose(...funcs) {
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

function func1(x) {
  return x * 2;
}
function func2(y) {
  return y * 2;
}
function func3(z) {
  return z * 2;
}


// 第一次循环开始

a = func1
b = func2

return (...args) => func1(func2(...args))

// 第二次循环开始

a = (...args) => func1(func2(...args))
b = func3

return (...args) => a(func3(...args))

// 最终相当于

(...args) => func1(func2(func3(...args)))

```