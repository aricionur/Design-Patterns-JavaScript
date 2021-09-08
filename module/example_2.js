const myNameSpace = (function () {
  let myPrivateVar = 0
  const myPrivateMethod = foo => console.log(foo)

  return {
    myPublicVar: "foo",
    myPublicFunction: bar => {
      myPrivateVar++
      myPrivateMethod(bar)
    },
  }
})()

console.log(myNameSpace.myPublicVar)
myNameSpace.myPublicFunction("this is a test string")
