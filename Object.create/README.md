# Object.create

```javascript
var obj = {
  name: 'qiqi'
}
var newObj = Object.create(obj)

console.log(newObj.name) // qiqi
console.log(newObj.__proto__.name) // qiqi
console.log(newObj.__proto__.__proto__.name) // undefined 因为指向了root的Object
```

Object.create方法创建了一个新的对象，这个对象的原型链是原来的对象的引用：

```javascript
newObj.__proto__name = 'supershy'
console.log(obj.name) // supershy
```

当我们改变了原型链上的name属性的值，obj的name值也跟着改变了。

根据这个特点我们来实现个类似的方法叫Object.myCreate

```javascript
// 方法一
Object.myCreate = function(obj){
  function F(){}
  F.prototype = obj
  
  return new F
}

// 方法二
Object.myCreate = function(obj){
  var newObj = {}
  newObj.__proto__ = obj // 注意：不同的浏览器的属性不一定相同，这个在chrome下测试ok
  
  return newObj
}
```

具体实现请看[index.js](./index.js)

具体用法请看[index.test.js](./index.test.js)
