const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    des: { type: String, required: true },
    imgUrl: { type: String, required: true },
    videoUrl: { type: String, required: true },
    views: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    likes: { type: [String], default: [] },
    dislikes: { type: [String], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('Video', VideoSchema);