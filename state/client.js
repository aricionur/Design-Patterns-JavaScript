import { FailsafeSocket } from "./failsafeSocket"

const failsafeSocket = new FailsafeSocket({ port: 5000 })

setInterval(() => failsafeSocket.send(process.memoryUsage()), 1000)
