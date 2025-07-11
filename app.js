const express = require('express');
const path = require('path');
const hbs = require('hbs');
const indexRouter = require('./app_server/routes/index');

const app = express();

// Set views and view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Register partials
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/', indexRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Travlr app is running at http://localhost:${PORT}`);
});
