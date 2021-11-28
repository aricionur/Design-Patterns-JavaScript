const createTask =
  (target, ...args) =>
  () => {
    target(...args)
  }

const targetFn = (arg1, arg2) => console.log("Hi, this is a log that target function was triggered. My args:" + arg1 + ", " + arg2)
const task = createTask(targetFn, "Joe", "Jack")
const task_2 = createTask(targetFn, 1234, 5678)

console.log("Before task is invoked.")
task()
console.log("After task is invoked.")

console.log("Before task_2 is invoked.")
task_2()
console.log("After task_2 is invoked.")
