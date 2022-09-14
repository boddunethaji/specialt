const express = require('express')
const app = express()
const port =process.env.PORT ||7777

app.get('/', (req, res) => {
  res.send('Hello World!.. This is from sp team - 7.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
