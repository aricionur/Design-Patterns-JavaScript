import ini from "ini"

export const iniStrategy = {
  serialize: ini.parse,
  deserialize: ini.stringify,
}

export const jsonStrategy = {
  serialize: JSON.stringify,
  deserialize: JSON.parse,
}
