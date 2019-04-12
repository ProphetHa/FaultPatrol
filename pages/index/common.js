//common.js
function sayHello(name) {
  //ES6新特性，使用${}来避免字符串的拼接，另外最外面使用ESC键下面的那个点包含，而不是Enter键旁边那个单引号。
  console.log(`Hello  ${name}` )
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}

module.exports.sayHello1 = sayHello
exports.sayGoodbye1 = sayGoodbye

