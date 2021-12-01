import os
import subprocess
from pytube import YouTube
from pytube import Playlist

# 預設下載後檔案位置為Downloads
def downloadYT(URL):
    music = YouTube(URL)
    #get_audio_only() 取得最高音質
    music.streams.get_audio_only().download('C:\\Users\\USER\\Downloads')

    

def YTdetail():
    yt = YouTube("https://www.youtube.com/watch?v=fTH7P6GVHus")

    vids= yt.streams.all()
    for i in range(len(vids)):
        print(i,'. ',vids[i])

def YTplayList():
    p = Playlist('https://www.youtube.com/playlist?list=PLMIe3Qp65VlXePKnGeXYCkJaRcvlH9UKV')
    for url in p.video_urls[:2]:
        print(url)
    for video in p.videos:
        video.streams.first().download()
        
downloadYT("https://www.youtube.com/watch?v=KSq5wxw9-9Q")

# YouTube("https://www.youtube.com/watch?v=fTH7P6GVHus").streams.filter(file_extension="mp4").first().download('C:\\Users\\USER\\Downloads')