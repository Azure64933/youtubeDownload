exports.api = {}

exports.DownLoading = (req, res) => {
    console.log('URL (from visible form field): ' + req.body.URL)
    res.redirect(303, '/Loaded')
}
exports.DownLoaded = (req, res) => res.render('YT music has downloaded!!!')


exports.notFound = (req, res) => res.render('404')