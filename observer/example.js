/**
 * model the list of dependent Observers a subject may have
 */
function ObserverList() {
  this.observerList = []
}

ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj)
}

ObserverList.prototype.count = function () {
  return this.observerList.length
}

ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) return this.observerList[index]
}

ObserverList.prototype.indexOf = function (obj, starIndex = 0) {
  let i = starIndex

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) return i
    i++
  }

  return -1
}

ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1)
}

/**
 * model the Subject and the ability to add, remove or notify observers on the observer list.
 */

function Subject() {
  this.observers = new ObserverList()
}

Subject.prototype.addObserver = function (observer) {
  this.observers.add(observer)
}

Subject.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer))
}

Subject.prototype.notify = function () {
  this.observers.observerList.forEach(o => o.update())
}

/**
 * model the Observer to notify
 */

function Observer(name) {
  if (!name) throw new Error("Name must be provided!")

  this.name = name
  this.update = function () {
    console.log(`My name is ${this.name}. I have been notified right now.`)
  }
}

const subjectXYZ = new Subject()
const observerJoe = new Observer("Joe")
const observerJack = new Observer("Jack")
const observerWilliam = new Observer("William")

subjectXYZ.addObserver(observerJoe)
subjectXYZ.addObserver(observerJack)
subjectXYZ.addObserver(observerWilliam)
subjectXYZ.notify()
