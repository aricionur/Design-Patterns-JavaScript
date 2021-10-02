import ini from "ini"

export const iniStrategy = {
  serialize: ini.stringify,
  deserialize: ini.parse,
}

export const jsonStrategy = {
  serialize: JSON.stringify,
  deserialize: JSON.parse,
}
