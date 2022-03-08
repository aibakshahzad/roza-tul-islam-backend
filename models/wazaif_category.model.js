const mongoose = require('mongoose');

const WazaifCategorySchema = new mongoose.Schema({
    title: { type: Number, required: true },
});

module.exports = mongoose.model("WazaifCategory", WazaifCategorySchema);