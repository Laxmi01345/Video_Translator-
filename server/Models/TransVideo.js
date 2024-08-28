// Models/TranslatedVideo.js
import mongoose from 'mongoose';

const translatedVideoSchema = new mongoose.Schema({
    original_video_id: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the OriginalVideo collection
        ref: 'OriginalVideo',
        required: true
    },
    translated_video_url: {
        type: String,
        required: true,
        unique: true
    },
    translated_audio_url: {
        type: String,
        required: true,
        unique: true
    },
    translated_caption: {
        type: String,
        default: ""
    }
});

const TranslatedVideo = mongoose.model('TranslatedVideo', translatedVideoSchema);

export default TranslatedVideo;
