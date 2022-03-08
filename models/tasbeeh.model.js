const mongoose = require('mongoose');

const TasbeehSchema = new mongoose.Schema({
    tasbeeh_ar: { type: String, min: 2, max: 35, required: true },
    tasbeeh_en: { type: String, min: 2, max: 35, required: false },
    count: { type: Number, required: true },
    fazilat: { type: String, min: 8, required: false },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model("Tasbeeh", TasbeehSchema);