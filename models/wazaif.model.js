const mongoose = require('mongoose');

const WazaifSchema = new mongoose.Schema({
    wazaif_ar: { type: String, min: 2, max: 35, required: true },
    count: { type: Number, required: true },
    fazilat: { type: String, min: 8, required: false },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'WazaifCategory' },
});

module.exports = mongoose.model("Wazaif", WazaifSchema);