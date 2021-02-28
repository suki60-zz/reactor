const loadComponents = (components) => {
  const keys = Object.keys(components)

  keys.forEach(key => {
    window[key] = components[key]
  })
}

export default loadComponents
