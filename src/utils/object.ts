export const selectKeys = <T>(keys: string[]) => (obj: object) => {
  return Object.keys(obj).reduce((acc, key) => {
    const val = (obj as any)[key]
    return {
      ...acc,
      ...(keys.includes(key) && { [key]: val }),
    }
  }, {}) as T
}

export const omitKeys = <T>(keys: string[]) => (obj: object) => {
  return Object.keys(obj).reduce((acc, key) => {
    const val = (obj as any)[key]
    return {
      ...acc,
      ...(!keys.includes(key) && { [key]: val }),
    }
  }, {}) as T
}
