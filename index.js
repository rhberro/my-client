const express = require('express')
const path = require('path')
const app = express()

app.use(
  express.static(
    path.join(__dirname, '/public/build/')
  )
)

app.get(
  '*', (req, res) => {
    const index = path.join(__dirname, '/public/build/index.html')
    res.sendFile(index)
  }
)

app.listen(
  process.env.PORT || 8080, error => {
    if (error) return console.error(error)
    return console.log('Server running on port ', process.env.PORT || 8080)
  }
)
