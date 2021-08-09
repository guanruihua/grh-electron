let electron = require('electron')
let app = electron.app // 引用app
let BrowserWindow = electron.BrowserWindow // 窗口引用

let mainWindow = null // 声明要打开的主窗口

app.on("ready", () => {

	mainWindow = new BrowserWindow({
		width: 1300,
		height: 1300,
		webPreferences: {
			nodeIntegration: true,/* 允许渲染进程使用require */
			contextIsolation: false,
			enableRemoteModule: true,/* 允许使用remote模块 */
		},
	})
	/* 打开调试模式 */
	// mainWindow.webContents.openDevTools();
	/* 加载 自定义 menu */
	require('./render/menu/index.js')
	mainWindow.loadFile('index.html') /* 加载html页面 */

	/* 嵌套一个子网页到页面中 BrowserBiew */
	// let BrowserView = electron.BrowserView
	// let view = new BrowserView()
	// mainWindow.setBrowserView(view)
	// view.setBounds({ x: 0, y: 120, width: 1000, height: 680 })
	// view.webContents.loadURL('https://gitee.com/grh-gitee')

	/* window.open BrowserWindow */



	mainWindow.on('closed', () => {
		mainWindow = null
	})
})

