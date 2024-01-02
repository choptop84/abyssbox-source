# UltraBox

UltraBox is an online tool for sketching and sharing instrumental music.
You can find it [here](https://ultraabox.github.io).
It is a modification of Goldbox, which itself is a modification of JummBox, which inturn is a modification of the [original BeepBox](https://beepbox.co).

The goal of UltraBox is to combine every single beepbox mod into one. Feel free to contribute!


All song data is packaged into the URL at the top of your browser. When you make
changes to the song, the URL is updated to reflect your changes. When you are
satisfied with your song, just copy and paste the URL to save and share your
song!

UltraBox, as well as GoldBox, Jummbox, and Beepbox which it's based on, are free projects. If you ever feel so inclined, please support the original creator, [John Nesky](http://www.johnnesky.com/), via
[PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=QZJTX9GRYEV9N&currency_code=USD)!
JummBox is developed by [Jummbus](http://www.twitter.com/jummbus).

## Compiling

The compilation procedure is identical to the repository for BeepBox. I will include the excerpt on compiling from that page's readme below for convenience:

The source code is available under the MIT license. The code is written in
[TypeScript](https://www.typescriptlang.org/), which requires
[node & npm](https://www.npmjs.com/get-npm), so install those first. Then to
build this project, open a command line and run:

```
git clone https://github.com/ultraabox/ultrabox_typescript
cd ultrabox_typescript
npm install
npm run build
```

A note for UltraBox: You may also have to install these additional dependencies if they are not picked up automatically.

```
npm install select2
npm install @types/select2
npm install @types/jquery
```

## Code

The code is divided into several folders. This architecture is identical to BeepBox's.

The [synth/](synth) folder has just the code you need to be able to play UltraBox
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