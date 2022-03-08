const mongoose = require('mongoose');

const KalmaSchema = new mongoose.Schema({
    title: { type: String, required: true },
    kalma_ar: { type: String, required: true },
    kalma_ur: { type: String, required: true },
    kalma_en: { type: String, required: true },
    audio_link: { type: String, required: true },
});

module.exports = mongoose.model("Kalma", KalmaSchema);