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
