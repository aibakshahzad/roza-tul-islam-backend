const mongoose = require('mongoose');

const DuaSchema = new mongoose.Schema({
    title: { type: String, min: 2, max: 35, required: true },
    dua_ar: { type: Number, required: true },
    dua_ur: { type: String, min: 8, required: true },
});

module.exports = mongoose.model("Dua", DuaSchema);