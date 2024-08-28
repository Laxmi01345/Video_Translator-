// Models/VideoStruct.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    video_id: {
        type: String,
    
        unique: true
    },

    audio_url:{
        type: String,
        
        unique: true
    },
    video_url: {
        type: String,
        required: true,
        unique: true
    },
    caption:{
        type:String
    }
});

const VideoStruct = mongoose.model('VideoStruct', postSchema);

export default VideoStruct;
