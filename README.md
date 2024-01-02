# AbyssBox

AbyssBox is an online tool for sketching and sharing instrumental music.
You can find it [here](https://ultraabox.github.io).
This mod is a modification of Ultrabox, which is a modification of Goldbox, which itself is a modification of JummBox, which inturn is a modification of the [original BeepBox](https://beepbox.co).

The goal of AbyssBox is not quite as simple as Ultrabox's...
What I want to do is get better at coding, so what I'm doing is this! My very own simple little project!

All song data is packaged into the URL at the top of your browser. When you make
changes to the song, the URL is updated to reflect your changes. When you are
satisfied with your song, just copy and paste the URL to save and share your
song!

AbyssBox, UltraBox, as well as GoldBox, Jummbox, and Beepbox which it's based on, are free projects. If you ever feel so inclined, please support the original creator, [John Nesky](http://www.johnnesky.com/), via
[PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=QZJTX9GRYEV9N&currency_code=USD)!
JummBox is developed by [Jummbus](http://www.twitter.com/jummbus).

## Compiling
The source code is available under the MIT license.
The compilation procedure is identical to the repository for BeepBox. I will include the excerpt on compiling from that page's readme below for convenience:

(Though clearly whoever wrote this before me doesn't understand how to do instructions...)

So, if this is your first time compiling the source code, then here's the rundown.

# Step 1.) Setup!

Before we compile we need two things:
Node.js, which can be found here: (https://nodejs.org/en), The reccomended version is suggested as it's what I used to compile AbyssBox,

You'll also need npm, which can be found here: (https://www.npmjs.com/get-npm)
Though if you want to do it simple, you can always go straight to the github page for it: (https://github.com/npm/documentation)

You'll also need git, which can be found here: (https://gitforwindows.org/)

If you've installed Git and Node.Js and you extracted the zip file for the source code of npm (if that's what you did), Then it's time for the next step!

# Step 2.) Running the commands!

Once all of the previous step has been completed, you need to open Git Bash. Which is one of the apps you installed when you got Git. Once you've opened up Git Bash, you'll need to use these commands:

```
cd [[File location]] // I'll need to explain this, if you don't know how commands work. Then you'll need to know that the cd command allows you to change the directory of where the commands happen. As an example, you'll be able to see that above the $ there is an orange ~, if you put cd downloads, the text will then change to ~/downloads. That is your command director. After that if your beepbox mod is inside of the downloads folder, you just run 'cd' again but this time change it to the name of the folder that contains the beepbox source code. Though it's worth noting that if your source code is inside another folder that you're command directory is not in, the commands simply will not work. So make sure that the directory leads to where the source code is exactly!
```
once your command directory leads to your source code, then it's suggested but not required to make a dupe of your mod.
```git clone https://github.com/ultraabox/ultrabox_typescript```
Especially if you're making big changes, if you make a big change to the code but it doesn't work. You'll need a failsafe for when that eventuallity comes, if you didn't clone your code, then it's possible that your broken code isn't going to be easily removed by any means!

Now it's time to install npm properly! Use these commands:
```
npm install
npm run build
```

A note for UltraBox/AbyssBox: You may also have to install these additional dependencies if they are not picked up automatically.

```
npm install select2
npm install @types/select2
npm install @types/jquery
```

## Code

The code is divided into several folders. This architecture is identical to BeepBox's.

The [synth/](synth) folder has just the code you need to be able to play AbyssBox
songs out loud, and you could use this code in your own projects, like a web
game. After compiling the synth code, open website/synth_example.html to see a
demo using it. To rebuild just the synth code, run:

```
npm run build-synth
```

The [editor/](editor) folder has additional code to display the online song
editor interface. After compiling the editor code, open website/index.html to
see the editor interface. To rebuild just the editor code, run:

```
npm run build-editor
```

The [player/](player) folder has a miniature song player interface for embedding
on other sites. To rebuild just the player code, run:

```
npm run build-player
```

The [website/](website) folder contains index.html files to view the interfaces.
The build process outputs JavaScript files into this folder.

## Dependencies

Most of the dependencies are listed in [package.json](package.json), although
I'd like to note that UltraBox also has an indirect, optional dependency on
[lamejs](https://www.npmjs.com/package/lamejs) via
[jsdelivr](https://www.jsdelivr.com/) for exporting .mp3 files. If the user
attempts to export an .mp3 file, JummBox will direct the browser to download
that dependency on demand.

## App Version

### Run without packaging (for debugging)
If you'd like to run the app version without packaging, first compile ultrabox normally as explained above, and then run the following:
```
cd app
npm install electron
```

and then put the required editor and player files in the "app" folder. To start the program, run:
```
npm run start
```

### Packaging (for distribution)
In order to package the program, first install electron as explained above, and then run the following:
```
npm install electron-packager
npm run package
```