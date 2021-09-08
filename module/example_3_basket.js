const basketModule = (() => {
  // privates
  const basket = []

  function doSomethingPrivate() {
    //...
  }

  function doSomethingPrivate() {
    //...
  }

  // return an object exposed to public
  return {
    addItem: item => basket.push(item),
    getItemCount: () => basket.length,
    doSomething: doSomethingPrivate,
    getTotal: () => basket.reduce((acc, curr) => acc + curr.price, 0), // assume that basket is a object array
  }
})()

basketModule.addItem({ name: "banana", price: 10 })
basketModule.addItem({ name: "apple", price: 15 })

console.log(basketModule.getItemCount())
console.log(basketModule.getTotal())

// Outputs: undefined
// This is because the basket itself is not exposed as a part of our public API
console.log(basketModule.basket)
