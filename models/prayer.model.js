const mongoose = require('mongoose');

const PrayerSchema = new mongoose.Schema({
    fajr: { type: Boolean, min: 3, max: 35, required: true },
    duhar: { type: Boolean, min: 5, max: 40, required: true },
    asr: { type: Boolean, min: 8, max: 25, required: true },
    magrib: { type: Boolean, min: 8, max: 25, required: true },
    esha: { type: Boolean, min: 8, max: 25, required: true },
    date: { type: Date }, 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  });
