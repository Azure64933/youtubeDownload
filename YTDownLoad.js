const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const multiparty = require('multiparty')

const main = require('./lib/main')
const app = express()

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main_HB',
    helpers: {
        section: function(name, options) {
            if (!this._sections) this._sections = {}
            this._sections[name] = options.fn(this)
            return null
        },
    },
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const port = process.env.PORT || 3000


app.get('/', main.home)

// handlers for browser-based form submission
app.post('/Loading', main.DownLoading);

app.get('/Loaded', main.DownLoaded)


app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}` +
        '; press Ctrl-C to terminate.')
})