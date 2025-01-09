const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Set up Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));

// Export for Vercel
module.exports = app;

// Only listen when running directly (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} 