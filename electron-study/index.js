let electron = require('electron')
let app = electron.app // 引用app
let BrowserWindow = electron.BrowserWindow // 窗口引用

let mainWindow = null // 声明要打开的主窗口

app.on("ready", () => {
	mainWindow = new BrowserWindow({ width: 300, height: 300 })
	mainWindow.loadFile('index.html') /* 加载html页面 */
	mainWindow.on('closed', () => {
		mainWindow = null
	})
})

