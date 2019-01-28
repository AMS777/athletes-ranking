const mongoose = require('mongoose');
const { Schema } = mongoose;

const athleticsSchema = new Schema({
  olimpicRecords: { type: Number, default: 0 },
});

const Athlete = mongoose.model('athletes');

module.exports = Athlete_Athletics = Athlete.discriminator(
  'Athletics',
  athleticsSchema,
);
