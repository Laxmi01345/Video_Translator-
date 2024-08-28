import requests
import time
import assemblyai as aai
from deep_translator import GoogleTranslator

# Set API key
aai.settings.api_key = "5ecbdfbeb2e24745bb83d4edf92b22c9"

# Define the audio file path (local path in this case)
audio_file_path = "Audio/98178701-49c3-4513-8924-ad3d654086be.mp3"

# Upload the audio file to AssemblyAI
def upload_audio(file_path):
    headers = {
        'authorization': aai.settings.api_key
    }
    
    with open(file_path, 'rb') as f:
        response = requests.post('https://api.assemblyai.com/v2/upload', headers=headers, files={'file': f})
    
    if response.status_code == 200:
        return response.json()['upload_url']
    else:
        raise Exception('Failed to upload audio')

audio_url = upload_audio(audio_file_path)

# Create a transcriber instance
transcriber = aai.Transcriber()
config = aai.TranscriptionConfig(speaker_labels=True)

# Start the transcription process
transcript_id = transcriber.transcribe(audio_url, config=config)['id']

# Wait for transcription to complete
while True:
    status = transcriber.get_transcription(transcript_id)['status']
    if status == 'completed':
        break
    elif status == 'failed':
        raise Exception('Transcription failed')
    time.sleep(5)  # Wait before checking the status again

# Get the completed transcript
transcript_data = transcriber.get_transcription(transcript_id)
transcript_text = transcript_data['text']

# Translate the text to Hindi
translator = GoogleTranslator(source='auto', target='hi')
hindi_transcript = translator.translate(transcript_text)
print(hindi_transcript)
