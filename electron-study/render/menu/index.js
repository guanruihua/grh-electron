/*
 * @Author: ruihuag 
 * @Date: 2021-06-26 16:30:55 
 * @Last Modified by: ruihuag
 * @Last Modified time: 2021-06-26 17:55:10
 * @Description 自定义 菜单
 */
const { Menu, BrowserWindow } = require('electron');
// const { BrowserWindow } = require('electron/main');

let template = [
	{
		label: 'AAA',
		submenu: [
			{
				label: 'A1',
				accelerator: 'ctrl + n',/* 自定义快捷键 */
				click: () => {
					let win = new BrowserWindow({
						width: 100,
						height: 100,
						webPreferences: {
							nodeIntegration: true,
						}
					})
					win.loadFile('../yellow.html')
					win.on('close', () => {
						win = null;
					})
				}
			},
			{ label: 'A2' },
		]
	},
	{
		label: 'BBB',
		submenu: [
			{ label: 'B1' },
			{ label: 'B2' },
		]
	},

]

let m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m);