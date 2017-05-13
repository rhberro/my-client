const express = require('express')
const path = require('path')

const app = express()

app.use(
  (request, response, next) => {
    const validHeaders = request.headers['accept-encoding'].indexOf('gzip') > -1
    if (!validHeaders) return next()

    const validFile = /(\.js|\.css)$/.test(request.url)
    if (!validFile) return next()

    request.url = request.url + '.gz'
    response.setHeader('Content-Encoding', 'gzip')

    return next()
  }
)

app.use(
  express.static(
    path.join(__dirname, '/public/build/')
  )
)

app.get(
  '*', (req, res) => {
    res.sendFile(
      path.join(__dirname, '/public/build/index.html')
    )
  }
)

app.listen(
  process.env.PORT || 8080, () => {
    return console.log('Server running on port ', process.env.PORT || 8080)
  }
)
