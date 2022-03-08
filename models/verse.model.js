const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

let connection = mongoose.createConnection(process.env.MONGO_CONNECTION_URL);
autoIncrement.initialize(connection);

const VerseSchema = new mongoose.Schema({
  verse: { type: Number },
  ar: { type: String, required: true },
  ur: { type: String, required: true },
  en: { type: String, required: true }
});

VerseSchema.plugin(autoIncrement.plugin, {
  model: 'Verse',
  field: 'verse',
  startAt: 1,
  incrementBy: 1
});
module.exports = mongoose.model("Verse", VerseSchema);