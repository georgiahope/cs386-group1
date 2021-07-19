const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/alertx');
});

router.get('/alertx', function(req, res) {
    res.render('home.ejs', { welcome: "Welcome to AlertX" });
});

router.get('/alertx/products', function(req, res) {
    res.render('products.ejs');
});

router.get('/alertx/about-us', function(req, res) {
    res.render('about-us.ejs');
});

module.exports = router;
