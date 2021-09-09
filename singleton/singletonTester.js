const SingletonTester = (() => {
  function Singleton(options) {
    options = options || {}

    this.name = "Singleton Testet"
    this.pointX = options.pointX || 6
    this.pointY = options.pointY || 10
  }

  let instance = null
  const _static = {
    getInstance: options => {
      if (!instance) instance = new Singleton(options)
      return instance
    },
  }

  return _static
})()

const singletonTester = SingletonTester.getInstance({ pointX: 5 })
console.log(singletonTester.pointX)
