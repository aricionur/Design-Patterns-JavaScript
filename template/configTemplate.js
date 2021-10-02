import { promises } from "fs"
import objectPath from "object-path"

export class ConfigTemplate {
  async load(filePath) {
    console.log(`Deserializing from ${filePath}`)
    this.data = this._deserialize(await promises.readFile(filePath, "utf-8"))
    console.log("#", this.data)
  }

  async save(filePath) {
    console.log(`Serializing to ${filePath}`)
    await promises.writeFile(filePath, this._serialize(this.data))
  }

  get(path) {
    return objectPath.get(this.data, path)
  }

  set(path, value) {
    return objectPath.set(this.data, path, value)
  }

  _serialize() {
    throw new Error("_serialize() must be implemented.")
  }

  _deserialize() {
    throw new Error("_deserialize() must be implemented")
  }
}
