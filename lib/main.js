var fs = require('fs');
exports.api = {}

exports.home = (req, res) => res.send();


exports.notFound = (req, res) => res.render('404')