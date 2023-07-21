// create a web server
// 1. create a web server
// 2. read the file that contains the comments
// 3. create a route to handle comments

// 1. create a web server
const express = require('express')
const app = express()
const port = 3000


// 2. read the file that contains the comments
const fs = require('fs')
const comments = JSON.parse(fs.readFileSync('./comments.json', 'utf8'))

// 3. create a route to handle comments
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/comments', (req, res) => {
  res.send(comments)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})