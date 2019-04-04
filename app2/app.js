const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => {
    console.log('hej') ;
    res.send('Hello World!')})
app.get('/test', (req, res) => {console.log('hahah') ; res.send('Whaaatup')})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
