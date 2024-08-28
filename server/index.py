import os
from moviepy.editor import VideoFileClip, AudioFileClip, concatenate_videoclips
from deep_translator import GoogleTranslator
from gtts import gTTS

def convert_video_to_audio_moviepy(video_file, output_ext="mp3"):
    audio_dir = 'Audio'
    if not os.path.exists(audio_dir):
        os.makedirs(audio_dir)
    
    filename, _ = os.path.splitext(os.path.basename(video_file))
    audio_path = os.path.join(audio_dir, f"{filename}.{output_ext}")
    
    clip = VideoFileClip(video_file)
    clip.audio.write_audiofile(audio_path)
    
    return audio_path

def convert_text_to_audio(text, lang='pa'):
    audio_dir = r'C:\Users\laxmi\Documents\Final_Year_Project\server\Trans_Videos'
    if not os.path.exists(audio_dir):
        os.makedirs(audio_dir)
    
    audio_file_path = os.path.join(audio_dir, 'translated_audio.mp3')
    
    tts = gTTS(text=text, lang=lang)
    tts.save(audio_file_path)
    
    return audio_file_path

def add_audio_to_video(video_file, audio_file, output_file):
    video_clip = VideoFileClip(video_file)
    audio_clip = AudioFileClip(audio_file)
    
    # Set the audio of the video to the new translated audio
    video_clip = video_clip.set_audio(audio_clip)
    
    # Write the result to a file
    video_clip.write_videofile(output_file, codec='libx264', audio_codec='aac')

if __name__ == "__main__":
    video_file_path = 'videos/nursery_kids.mp4'  # Replace with the actual path
    audio_file_path = convert_video_to_audio_moviepy(video_file_path)
    
    import assemblyai as aai
    aai.settings.api_key = "5ecbdfbeb2e24745bb83d4edf92b22c9"
    transcriber = aai.Transcriber()
    config = aai.TranscriptionConfig(speaker_labels=True)
    
    # Transcribe audio
    transcript = transcriber.transcribe(audio_file_path, config)
    
    # Translate the text to Hindi
    translator = GoogleTranslator(source='auto', target='hi')
    hindi_transcript = translator.translate(transcript.text)
    print(hindi_transcript)
    # Convert the translated text to audio
    translated_audio_file_path = convert_text_to_audio(hindi_transcript)
    
    # Define output path for the final video
    output_video_path = 'Trans_Videos/nursery_kids.mp4'  # Replace with desired output path
    
    # Add the translated audio to the video
    add_audio_to_video(video_file_path, translated_audio_file_path, output_video_path)
    
    print(f"\nFinal video with translated audio saved to: {output_video_path}")
