# game
---
##Planning
I am going to create a mario-style game where the player jumps up to avoid obstructions in their path.

##building
I have built the basic mechanics of the game. When the player hits the obstruction, the game ends. Now I am going to add the score. Next I am going add CSS to the game to make it feel more fun.

#debugging
I created a new function to track the score, however it wasn't working so I added the score functionality to jumpFunction instead.

The background image for the obstacle (block) was not working. So I tried it with the paro_AL_standing.svg file, the same file for the character, and that was working. I then looked up the syntax on W3schools and MDN and corrected the syntax by adding quote marks. I did the same for the character (even though it the image file rendered to the page without it). I wasn't sure if there was a problem with the file itself so I added two other files, one svg and one png, and it was still not working. Then I tested the images themselves by applying background image to the html selector. The images rendered as expected. Then I went on youtube to watch a tutorial on how to add background images. Mid-way through the youtube video, I realised that the block div might have only shown the transparent section of the image (the upper-most left-hand corner). I added the background-size property and set it to cover and finally, the image appeared!

When pushed to Github Pages, the character and the block are missing, even though they are working when tested locally. In the browser, I opened dev tools and I commented out the image file for the character and changed the background colour to black and the character block appeared. Then I noticed the images folder was not appearing under the sources tab. I checked the repo and I could see the images folder there. Then I tried refreshing the page.