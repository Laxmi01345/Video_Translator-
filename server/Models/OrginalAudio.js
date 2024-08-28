// Models/VideoStruct.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    audio_id: {
        type: String,
    
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    
});

const OrginalAudio = mongoose.model('OrginalAudio', postSchema);

export default OrginalAudio;
