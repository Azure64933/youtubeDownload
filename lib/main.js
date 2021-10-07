exports.api = {}


exports.home = (req, res) => res.render('HomePage')

exports.DownLoading = (req, res) => {
    console.log('URL (from visible form field): ' + req.body.URL)
    res.redirect(303, '/Loaded')
}
exports.DownLoaded = (req, res) => res.render('Loaded')


exports.notFound = (req, res) => res.render('404')