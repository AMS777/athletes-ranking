const mongoose = require('mongoose');
const { Schema } = mongoose;

const footballSchema = new Schema({
  goals: { type: Number, default: 0 },
});

const Athlete = mongoose.model('athletes');

module.exports = Athlete_Football = Athlete.discriminator(
  'Football',
  footballSchema,
);
