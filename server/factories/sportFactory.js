const mongoose = require('mongoose');

module.exports = sportStrategies = {
  '': () => null,
  'Muay Thai': ({ name, sport, prestigePoints, kos }) => {
    const Athlete = require('../models/Athlete_MuayThai');
    return new Athlete({ name, sport, prestigePoints, kos });
  },
  Athletics: ({ name, sport, prestigePoints, olimpicRecords }) => {
    const Athlete = require('../models/Athlete_Athletics');
    return new Athlete({ name, sport, prestigePoints, olimpicRecords });
  },
  Football: ({ name, sport, prestigePoints, goals }) => {
    const Athlete = require('../models/Athlete_Football');
    return new Athlete({ name, sport, prestigePoints, goals });
  },
};
