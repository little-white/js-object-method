# Object.assign

```javascript
var obj = {name: 'qiqi'}
var objCopy = Object.assign({}, obj)

console.log(objCopy.name) // qiqi
```

和Object.create相同的是它们都新创建了一个对象，不同的是Object.assign是对象的copy，和原对象没关系；Object.create是将新对象的原型链指向了原对象。

```javascript
var obj = {name: 'qiqi'}
var objCopy = Object.assign(obj, {age: 32}, {name: 'supershy'})

objCopy.name = 'little-white'
console.log(obj) // little-white
```

由此可得新创建的对象就是assign的第一个参数的引用，也就是说我们直接赋值就好，并不需要额外的变量了。

### 实现原理

```javascript
function test(obj){
  obj.name = 'test'
}

var person = {name: 'qiqi'}
test(person)
console.log(person.name) // qiqi
```

当我们传递的参数是对象的时候，对这个对象的属性进行修改，实际上是和传递的参数指向同一个地址，所以传递的参数随机发生改变。

**注意**

```javascript
function test(obj){
  obj = {name: 'test'}
}

var person = {name: 'qiqi'}
test(person)
console.log(person.name) // qiqi
```

当给对象进行赋值操作时候，新的对象会产生一个新的地址，并不会改变传递参数的的地址，所以不会发生变化。

### 具体实现

```javascript
Object.myAssign = function(target, source1, source2){
  Object.keys(source1).forEach(function(key){
    target[key] = source1[key]
  })

  Object.keys(source2).forEach(function(key){
    target[key] = source2[key]
  })

  return target
}
```

这只是个雏形，因为参数是不定的，我们就需要用arguments来循环了。

具体实现请查看[index.js](./index.js)

具体用法请查看[index.test.js](./index.test.js)
