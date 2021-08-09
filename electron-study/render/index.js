/*
 * @Author: ruihuag 
 * @Date: 2021-06-26 16:26:34 
 * @Last Modified by: ruihuag
 * @Last Modified time: 2021-06-26 22:21:22
 * @Description 	通过按钮创建新的窗口
 */

const btn = this.document.querySelector("#btn")
const BrowserWindow = require('electron').remote.BrowserWindow

window.onload = function () {
	btn.onclick = () => {
		newWin = new BrowserWindow({
			width: 500,
			height: 500,
			webPreferences: {
				nodeIntegration: true,/* 允许渲染进程使用require */
				contextIsolation: false,
				enableRemoteModule: true,/* 允许使用remote模块 */
			},
		})






		/* 打开调试模式 */
		// newWin.webContents.openDevTools();

		newWin.loadFile('./render/yellow.html')
		newWin.on('close', () => {
			newWin = null
		})
	}
}

const { remote } = require('electron')
const rightTemplate = [
	{ label: '粘贴', accelerator: 'ctrl + c' },
	{ label: '复制', accelerator: 'ctrl + v' },
]
let m = remote.Menu.buildFromTemplate(rightTemplate);

window.addEventListener('contextmenu', function (e) {
	e.preventDefault();
	m.popup({
		window: remote.getCurrentWindow(),
	});
})


