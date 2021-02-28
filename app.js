import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const app = express()
const port = 4000

app.use(express.static('dist'))
app.use(bodyParser.json())

app.get('/*', (req, res) => {
  const component = req.path.replace(/\/|\?/gi, '')
  const props = req.body

  import(`./components/${component}`).then(module => {
    const Component = module.default
    return res.send(ReactDOMServer.renderToString(<Component {...props} />))
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
