import { createPostStatusCmd } from "./createPostStatusCmd"
import { statusUpdateService } from "./statusUpdateService"
import { Invoker } from "./invoker"

const invoker = new Invoker()
const command = createPostStatusCmd(statusUpdateService, "HI!")

invoker.run(command)
invoker.undo()
invoker.delay(command, 3 * 1000)
invoker.runRemotely(command)
