const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/jyoti', (req, res) => {
    res.send('Hello World! this is jyoit')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})