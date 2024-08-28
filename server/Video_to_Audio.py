import sys
import os
from moviepy.editor import VideoFileClip

def convert_video_to_audio(video_file, output_file):
    if not os.path.exists(os.path.dirname(output_file)):
        os.makedirs(os.path.dirname(output_file))
    
    clip = VideoFileClip(video_file)
    clip.audio.write_audiofile(output_file)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python extract_audio.py <video_file> <output_file>")
        sys.exit(1)
    
    video_file_path = sys.argv[1]
    audio_file_path = sys.argv[2]
    
    convert_video_to_audio(video_file_path, audio_file_path)
    print(f"Audio extracted and saved to: {audio_file_path}")
