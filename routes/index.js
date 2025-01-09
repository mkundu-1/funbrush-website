const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('index', {
        title: 'FunBrush - The Future of Oral Care',
        isHome: true
    });
});

// About page route
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About - FunBrush',
        isAbout: true
    });
});

// Export the router (this was the issue)
module.exports = router;
