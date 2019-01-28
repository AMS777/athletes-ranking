const mongoose = require('mongoose');

const sportFactory = require('../factories/sportFactory');

const Athlete = mongoose.model('athletes');

module.exports = app => {
  app.get('/api/athletes', async (req, res) => {
    const athletes = await Athlete.find();

    res.send(athletes);
  });

  app.post('/api/athletes', async (req, res) => {
    const athlete = sportFactory[req.body.sport](req.body);

    await athlete.save();

    res.send(athlete);
  });
};
