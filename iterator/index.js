import { Matrix } from "./matrix"

const matrix2x2 = new Matrix([
  [11, 12],
  [21, 22],
])

// iteration - 1
// const iterator = matrix2x2[Symbol.iterator]()
// let iterationResult = iterator.next()
// while (!iterationResult.done) {
//   console.log(iterationResult.value)
//   iterationResult = iterator.next()
// }

// iteration - 2
// for (const element of matrix2x2) {
//   console.log(element)
// }

// iteration - 3
// const flatenedMatrix = [...matrix2x2]
// console.log(flatenedMatrix)

// iteration - 4
const [oneOne, oneTwo, twoOne, twoTwo] = matrix2x2
console.log(oneOne, oneTwo, twoOne, twoTwo)
