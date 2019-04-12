const utils = require('./utils')

//在Worker线程执行上下文会全局暴露一个worker对象，直接调用
//worker.onMessage/postMessage即可

worker.onMessage(function(res){
  console.log(res)
})