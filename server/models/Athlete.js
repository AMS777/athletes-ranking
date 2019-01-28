const mongoose = require('mongoose');
const { Schema } = mongoose;

const athleteSchema = new Schema(
  {
    name: { type: String, required: true },
    sport: { type: String, required: true },
    prestigePoints: { type: Number, default: 0 },
  },
  { discriminatorKey: 'sport' },
);

mongoose.model('athletes', athleteSchema);
