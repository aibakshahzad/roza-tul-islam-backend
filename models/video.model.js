const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    title: { type: String, min: 3, max: 50, required: true },
    description: { type: String, min: 15, max: 250, required: true },
    videoId: { type: String, required: true },
  });
