const path = require('path');
const fs = require('fs');

module.exports.home = (req, res) => {
  const dataPath = path.join(__dirname, '../data/trips.json');
  const trips = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  res.render('index', {
    title: 'Travlr Getaways',
    trips: trips
  });
};
 
