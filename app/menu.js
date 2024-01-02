const { Menu, BrowserWindow } = require('electron/main');

// use this for the mac only stuff in the future
// const usingMac = process.platform === 'darwin'

const template = [
	// add play/pause button to taskbar
	// also add patch notes and credits in here somewhere
	// also if possible build these automatically???
	{
		label: 'File',
		submenu: [
			{
				label: 'New Blank Song',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Import Song...',
				click: () => {

				}
			},
			{
				label: 'Export Song...',
				click: () => {}
			},
			{
				label: 'Copy Song Url',
				click: () => {}
			},
			{
				label: '... Shorten Song Url',
				click: () => {}
			},
			{
				label: 'View in Song Player',
				click: () => {}
			},
			{
				label: 'Copy HTML Embed Code',
				click: () => {}
			},
			{
				label: 'Recover Recent Song...',
				click: () => {}
			}
		]
	},
	{
		label: 'Edit',
		submenu: [
			{
				label: 'Undo',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Redo',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Copy Pattern',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Paste Pattern Notes',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Insert Bar',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Delete Selected Bars',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Insert Channel',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Delete Selected Channels',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Select Channel',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Select All',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Duplicate Reused patterns',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Move Notes Up',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Move Notes Down',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Move All Notes Sideways...',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Generate Euclidean Rhythm...',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Change Beats Per Bar...',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Change Song Length...',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Channel Settings...',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Limiter Settings...',
				click: () => {
					//thefunction
				}
			},
			{
				label: 'Add Custom Samples...',
				click: () => {
					//thefunction
				}
			},
		]
	},
	{
		label: 'Preferences',
		submenu: [
			{
				label: 'placeholder',
				click: () => {
					//thefunction
				}
			}
		]
	},
	{
		label: 'View',
		submenu: [
			{ role: 'reload' },
			{ role: 'forceReload' },
			{ role: 'togglefullscreen' },
			// { role: 'about' },
			// move these two somewhere else
			// {
			// 	label: 'Patch Notes',
			// 	click: () => {
			// 		const newWindow = new BrowserWindow({icon: './app_icon.png'});
			// 		newWindow.loadFile('patch_notes.html');
			// 	}
			// },
			// {
			// 	label: 'Credits',
			// 	click: () => {
			// 		const newWindow = new BrowserWindow({icon: './app_icon.png'});
			// 		newWindow.loadFile('credits.html');
			// 	}
			// },
			{ role: 'quit' }
		]
	},
]

module.exports.mainMenu = Menu.buildFromTemplate(template);
// customize the context menu in the future