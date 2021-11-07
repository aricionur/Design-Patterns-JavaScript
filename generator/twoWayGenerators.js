// Example - 1
// function* twoWayGenerator() {
//   const what = yield null
//   yield "hello " + what
// }

// const twoWayGeneratorObj = twoWayGenerator()
// console.log(twoWayGeneratorObj.next())
// console.log(twoWayGeneratorObj.next("World..."))

function* twoWayGenerator() {
  try {
    const what = yield null
    yield "hello " + what
  } catch (error) {
    console.log("Error log:", error.message)
  }
}

// console.log("Using throw():")
// const twoWayException = twoWayGenerator()
// twoWayException.next()
// console.log(twoWayException.throw(new Error("Boom!")))

console.log("Using return():")
const twoWayReturn = twoWayGenerator()
console.log(twoWayReturn.return("myReturnValue"))
