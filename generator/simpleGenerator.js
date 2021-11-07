function* fruitGenerator() {
  yield "peach"
  yield "watermelon"
  return "summer"
}

const fruitGeneratorObj = fruitGenerator()

// generator iteration- 1
// console.log(fruitGeneratorObj.next())
// console.log(fruitGeneratorObj.next())
// console.log(fruitGeneratorObj.next())

// generator iteration - 2
for (const fruit of fruitGeneratorObj) {
  console.log(fruit)
}
