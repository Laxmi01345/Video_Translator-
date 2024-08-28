import yt_dlp

def download_video(url, output_path='.'):
    ydl_opts = {
        'format': 'bestvideo+bestaudio/best',
        'outtmpl': f'{output_path}/%(title)s.%(ext)s',  # Output file naming
        'noplaylist': True,  # Download only the single video
    }
    
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            ydl.download([url])
            print(f"Video downloaded successfully to {output_path}")
        except Exception as e:
            print(f"An error occurred: {e}")

# Example usage
url = 'https://www.youtube.com/shorts/u7RESMDiMYQ'
output_path = 'C:/Users/laxmi/Documents/final_year_project/server/videos'  # Change this to your desired directory
download_video(url, output_path)

