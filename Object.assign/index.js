Object.myAssign = function(target, source1, source2){
    var args = arguments
    for(var i=1,len=args.length; i<len; i++){
        Object.keys(args[i]).forEach(function(key){
          target[key] = args[i][key]
        })
    }

  return target
}
