require('./index')

test('创建一个新对象', () => {
  var obj = {name: 'qiqi'}

  expect(Object.myCreate(obj).name).toEqual('qiqi');
  expect(Object.myCreate(obj).__proto__.name).toEqual('qiqi');
  expect(Object.myCreate(obj).__proto__.__proto__.name).not.toBeDefined();
});

test('创建一个新对象，并且将原型链上的对象的值改变，新对象由于没有此属性会跟着改变', () => {
  var obj = {name: 'qiqi'}
  var newObj = Object.myCreate(obj)
  obj.name = 'little-white'

  expect(newObj.name).toEqual('little-white');
  expect(newObj.__proto__.name).toEqual('little-white');
});

test('创建一个新对象，并且将新对象的值改变，并不会影响原型链上的对象', () => {
  var obj = {name: 'qiqi'}
  var newObj = Object.myCreate(obj)
  newObj.name = 'supershy'

  expect(newObj.name).toEqual('supershy');
  expect(newObj.__proto__.name).toEqual('qiqi');
  expect(obj.name).toEqual('qiqi');
});
