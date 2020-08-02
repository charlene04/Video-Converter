#VIDEO DURATION CONVERTER

This is a Video duration converter built using Nodejs and fluent-ffmpeg.

=====================================================================================
=====================================================================================
#===========================REQUIREMENT============================================
1. You have to have NodeJs installed on your machine.
2. Download `ffmpeg` from the official website (https://ffmpeg.org) and add it to your system variables.







================================SETUP=============================================
1. Clone the repo to your local machine.
2. Navigate into the project folder using command prompt or terminal
3. Rum `npm install` to install required packages.
4. Add videos to be manipulated into the `tmp` directory within the project folder.
5. run `node index.js --current=NameOfVideo --duration=Number --new=ConvertedVideo`. For example: `node index.js --current=aviola.mp4 --duration=25 --new=newAviola.mp4`
6. Duration is the time you want to convert to, and it reads in seconds. The converted file can take any video format(mp4, avi)
7. The converted file will be in the `converts` directory within the project folder.
8. The conversion is successful if the prompts exits without any errors.



IMPORTANT!!!
Designed for videos without audio tracks.