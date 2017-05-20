const express = require('express')
const path = require('path')
const gzip = require('connect-gzip-static')
const app = express()

app.use(
  gzip(
    path.join(__dirname, '/public/build/')
  )
)

app.get(
  '*', (request, response) => {
    response.sendFile(
      path.join(__dirname, '/public/build/index.html')
    )
  }
)

app.listen(
  process.env.PORT || 8080, () => {
    return console.log('Server running on port ', process.env.PORT || 8080)
  }
)
