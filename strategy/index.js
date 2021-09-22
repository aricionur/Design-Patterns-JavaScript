import { Config } from "./config"
import { iniStrategy, jsonStrategy } from "./strategies"

async function main() {
  //   const iniConfig = new Config(iniStrategy)
  //   await iniConfig.load("samples/conf.ini")
  //   iniConfig.set("book.nodejs", "designPattens")
  //   await iniConfig.save("samples/conf_mod.ini")

  const iniConfig = new Config(iniStrategy)
  await iniConfig.load("samples/conf.ini")
  iniConfig.set("booknodejs", "design patterns")
  await iniConfig.save("samples/conf_mod.ini")

  //   const jsonConfig = new Config(jsonStrategy)
  //   await jsonConfig.load("samples/conf.json")
  //   jsonConfig.set("book.nodejs", "design patterns")
  //   await jsonConfig.save("samples/conf_mod.json")
}

main()
