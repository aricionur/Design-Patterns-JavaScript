import http from "https"

export class CheckUrls {
  constructor(urls) {
    this.urls = urls
  }

  [Symbol.asyncIterator]() {
    const urlsIterator = this.urls[Symbol.iterator]()

    return {
      async next() {
        const iteratorResult = urlsIterator.next()
        if (iteratorResult.done) return { done: true }

        const url = iteratorResult.value
        try {
          let data = ""
          const checkResult = await http.get(url)

          return {
            done: false,
            value: `${url} is up, status: ${checkResult.status}`,
          }
        } catch (err) {
          return {
            done: false,
            value: `${url} is down, error: ${err.message}`,
          }
        }
      },
    }
  }
}
