const testModule = (() => {
  var counter = 0

  return {
    incrementCounter: () => counter++,
    resetCounter: () => {
      console.log("Counter value prior to reset:", counter)
      counter = 0
    },
  }
})()

testModule.incrementCounter()
testModule.resetCounter()

// Hence counter value becomes private like JAVAs private class variables
// Only access to 'counter' are getter/setter public functions.
