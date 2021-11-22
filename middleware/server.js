import zeromq from "zeromq"
import { ZmqMiddlewareMamager } from "./zmqMiddlewareManager"
import { jsonMiddleware } from "./jsonMiddleware"
import { zlibMiddleware } from "./zlibMiddleware"

async function main() {
  const socket = new zeromq.Reply()
  await socket.bind("tcp://127.0.0.1:5000")

  const zmqm = new ZmqMiddlewareMamager()
  zmqm.use(jsonMiddleware())
  zmqm.use(zlibMiddleware())
  zmqm.use({
    inbound: async message => {
      console.log("Received", message)
      if (message.action === "ping") await this.send({ action: "pong", echo: message.echo })
      return message
    },
  })

  console.log("Server started...")
}

main()
