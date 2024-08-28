import express from 'express';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import VideoStruct from './Models/VideoStruct.js';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import { exec } from 'child_process';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));

mongoose.connect('mongodb://localhost:27017/Video_Translator').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uploadsDir = path.join(__dirname, 'uploads');
const audioDir = path.join(__dirname, 'Audio');

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static(uploadsDir));
app.use('/Audio', express.static(audioDir));  // Serve static audio files

app.post('/video', upload.single('videofile'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const uniqueId = uuidv4();
    const videoUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;

    // Define paths for audio extraction
    const videoPath = path.join(uploadsDir, req.file.filename);
    const audioPath = path.join(audioDir, `${uniqueId}.mp3`);

    // Call Python script to extract audio
    exec(`python Video_to_Audio.py "${videoPath}" "${audioPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error('Error extracting audio:', error);
            return res.status(500).json({ error: 'Error extracting audio' });
        }

        // Save video and audio info to the database
        const audioUrl = `http://localhost:${PORT}/Audio/${uniqueId}.mp3`;

        const video = new VideoStruct({
            video_id: uniqueId,
            video_url: videoUrl,
            audio_url: audioUrl,
            caption: ''
        });

        video.save()
            .then(() => res.status(200).json({ message: "Successfully saved and processing completed!" }))
            .catch((error) => {
                console.error('An error occurred:', error);
                res.status(500).json({ error: 'Internal server error' });
            });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
