import { IniConfig } from "./iniConfig"
import { JsonConfig } from "./jsonConfig"

async function main() {
  // const jsonConfig = new JsonConfig()
  // await jsonConfig.load("samples/conf.json")
  // jsonConfig.set("book", "JS Design Patterns")
  // jsonConfig.save("samples/conf_mod.json")

  const iniConfig = new IniConfig()
  await iniConfig.load("samples/conf.ini")
  iniConfig.set("bookname", "** Design Patterns JS **")
  await iniConfig.save("samples/conf_mod.ini")
}

main()
