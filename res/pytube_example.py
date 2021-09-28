# -*- coding: utf-8 -*-
"""
Created on Wed Sep  1 02:25:24 2021

@author: USER
"""

from pytube import YouTube


def search():
    music = YouTube("https://www.youtube.com/watch?v=fTH7P6GVHus")
    music.streams.first().download()


search()