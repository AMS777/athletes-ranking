const mongoose = require('mongoose');
const { Schema } = mongoose;

const muayThaiSchema = new Schema({
  kos: { type: Number, default: 0 },
});

const Athlete = mongoose.model('athletes');

module.exports = Athlete_MuayThai = Athlete.discriminator(
  'Muay Thai',
  muayThaiSchema,
);
