# WallpaperEngineBetterSoundBarScript
 A script that makes a better looking sound visualizer!

![Bar](https://github.com/an-prata/WallpaperEngineBetterSoundBarScript/blob/main/Screenshots/Bar.png?raw=true)

 I use this script in my wallpaper here: https://steamcommunity.com/sharedfiles/filedetails/?id=2606548833

 To use the script yourself just import Texture.png, or any white 4x4 image, into Wallpaper Engine as an image asset. Select your new image asset and at the top right of the properties pane hit the settings button, then bind script. This will open an editor, just paste the content from BetterSoundBar.js into it. Your done!

 Instead of using a linear equation to adjust the length of the bars to your music, game, or other sounds, it uses 𝑦=m∛(𝑥+a)−m∛a, this equation gives a lines that's angle gets lower and lower, however starting very steep. This cuts out sounds like leaves crunching in a game, or the low volume echoes in music, and makes the sound bar more clear, which in my opinion look FAR better than just graphing everything linearly.

![Equation Graph](https://github.com/an-prata/WallpaperEngineBetterSoundBarScript/blob/main/Screenshots/Graph.png?raw=true)

Above is an image of the equation's graph using 450 for constant "m" and 60 for "a", these values can be adjusted to your liking in the script using variables "amp" and "addin" respectively.

This script is based off this one I found a while back, which just graphs its data linearly: https://pastebin.com/9yFFuChw
