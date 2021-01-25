const express = require('express')
const app = express()
const path = require('path')
app.use('/', express.static(path.join(__dirname, 'public')))
const port = process.env.PORT || 3339
app.listen(port)
console.log(`Server running on http://localhost:${port}`)