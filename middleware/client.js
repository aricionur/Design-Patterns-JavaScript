import zeromq from "zeromq"
import { ZmqMiddlewareMamager } from "./zmqMiddlewareManager"
import { jsonMiddleware } from "./jsonMiddleware"
import { zlibMiddleware } from "./zlibMiddleware"

async function main() {
  const socket = zeromq.Request()
  await socket.connect("tcp://127.0.0.1:5000")

  const zmqm = new ZmqMiddlewareMamager(socket)
  zmqm.use(jsonMiddleware)
  zmqm.use(zlibMiddleware)
  zmqm.use({
    inbound(message) {
      console.log("Echoed back:", message)
      return message
    },
  })

  setInterval(() => zmqm.send({ action: "ping", echo: Date.now() }).catch(err => console.log(err)))
}

main()
