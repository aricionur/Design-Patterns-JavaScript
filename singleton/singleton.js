const mySingleton = (() => {
  let instance = null

  function init() {
    // Singleton object creation

    let privateVar = "I am also a private var"
    const rondomNumber = Math.random()

    function privateMethod() {
      console.log("I am a private method")
    }

    return {
      // public methods and vars
      publicMethod: () => console.log("Public can see me"),
      publicProperty: "I am a public var",
      getRandomNumber: () => rondomNumber,
    }
  }

  return {
    getInstance: () => {
      if (!instance) instance = init()
      return instance
    },
  }
})()

const singleA = mySingleton.getInstance()
const singleB = mySingleton.getInstance()
// Because above two obj are the same, so their random numbers must be same !
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()) // true
