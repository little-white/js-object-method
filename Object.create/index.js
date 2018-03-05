function ObjectCreate(obj){
  function F(){}
  F.prototype = obj
  return new F
}

module.exports = ObjectCreate
