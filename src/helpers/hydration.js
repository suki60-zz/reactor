import React from 'react'
import ReactDOM from 'react-dom'
import ready from 'src/helpers/ready'
import loadComponents from 'src/helpers/loadComponents'

const hydrate = (components) => {
  loadComponents(components)

  const elements = document.getElementsByClassName('reactor')

  Array.from(elements).forEach((element) => {
    const component = JSON.parse(element.dataset.component)
    const Component = window[component.type]
    const { props } = component

    ReactDOM.hydrate(<Component {...props} />, element)
  })
}

const hydration = (components) => {
  ready(hydrate(components))
}

export default hydration
