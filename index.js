const express = require('express')
const path = require('path')

const app = express()

app.use(
  express.static(
    path.join(__dirname, '/public/')
  )
)

app.get('*', function (req, res) {
  res.sendFile(
    path.join(__dirname, '/public/index.html')
  )
})

app.listen(8080, () => console.log('Running server on 8080.'))
