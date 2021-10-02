const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const multiparty = require('multiparty')

const main = require('./lib/main')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const port = process.env.PORT || 3000


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/layouts/HomePage.html');
    console.log("開啟HTML")
});

// handlers for browser-based form submission
app.post('/Loading', main.DownLoading);

app.get('/Loaded', function(req, res) {
    console.log("Loaded")
    res.sendFile(__dirname + '/views/Downloaded.html');
});


app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}` +
        '; press Ctrl-C to terminate.')
})