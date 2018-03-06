require('./index')

test('创建一个新对象，它是原对象的拷贝', () => {
  var obj = {name: 'qiqi'}

  expect(Object.myAssign({}, obj).name).toBe('qiqi');
  expect(Object.myAssign({}, obj)).toEqual(obj);
  expect(Object.myAssign({}, obj).__proto__.name).not.toBeDefined();
});

test('创建一个新对象，其实就是Object.myAssign的第一个参数', () => {
  var obj = {name: 'qiqi'}
  var target = {}

  expect(Object.myAssign(target, obj)).toBe(target);
});

test('传递多个参数，如果不同key的话会逐一添加到新的对象上，如果相同key，会以最后面的值为最终值', () => {
  var obj = {name: 'qiqi'}
  var target = {}

  expect(Object.myAssign(target, {name: 'qiqi'}, {name: 'supershy'}, {age: 32})).toEqual({name: 'supershy', age: 32});
});
