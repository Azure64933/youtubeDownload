# -*- coding: utf-8 -*-
"""
Created on Wed Sep  1 02:25:24 2021

@author: USER
"""
# importing the requests library
import requests

url = 'https://www.w3schools.com/python/demopage.php'

x = requests.post(url)

#print the response text (the content of the requested file):

print(x.text)



# from pytube import YouTube
# # 預設下載後檔案位置為Downloads
# def downloadYT():
#     music = YouTube("https://www.youtube.com/watch?v=fTH7P6GVHus")
#     music.streams.first().download('C:\\Users\\USER\\Downloads')


# downloadYT()
