from TTS.utils.synthesizer import Synthesizer

def synthesize_speech(text, model_path, config_path, output_path):
    synthesizer = Synthesizer(
        tts_checkpoint=model_path,
        tts_config=config_path
    )
    # Generate speech
    speech = synthesizer.tts(text)
    # Save audio file
    with open(output_path, 'wb') as f:
        f.write(speech)
    print(f"Audio saved to {output_path}")

if __name__ == "__main__":
    text = "Hello, how are you today?"
    model_path = "path/to/your/model.pth"  # Replace with your model path
    config_path = "path/to/your/config.json"  # Replace with your config file path
    output_path = "output_audio.wav"
    synthesize_speech(text, model_path, config_path, output_path)
