const { app, BrowserWindow, Menu } = require('electron/main');
const { mainMenu } = require("./menu");
const path = require('path');

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		// fullscreen: true,
		icon: path.join(__dirname, 'icon.png')
		// autoHideMenuBar: true
	})

	win.loadFile('index.html');
}

Menu.setApplicationMenu(mainMenu);

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})