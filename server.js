const express = require('express')
const app = express()
const port = 8080
const path = require('path');
app.get('/', function(req, res){ res.sendFile(path.join(__dirname + '/templates/index.html'))
})
app.use('/js', express.static(path.join(__dirname,'js')))
app.use('/css', express.static(path.join(__dirname,'css')))
app.listen(port, () => console.log('Example app listening on port' + port+ '!'))
