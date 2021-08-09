/*
 * @Author: ruihuag 
 * @Date: 2021-06-26 21:54:43 
 * @Last Modified by: ruihuag
 * @Last Modified time: 2021-06-26 23:50:13
 * @Desc 使用默认浏览器打开链接
 */



const { shell } = require('electron')

let ahref = document.querySelector('#ahref')

ahref.onclick = function (e) {
	e.preventDefault();
	let href = this.getAttribute('href')
	console.log(href)
	shell.openExternal(href)
}


let mybnbtn = document.querySelector('#mybtn')
mybnbtn.onclick = function (e) {
	e.preventDefault();
	// window.open('https://github.com/');
	window.open('./popup_page.html');
}

/* 传递数据给子窗口 */
window.addEventListener('message', (msg) => {
	let mytext = document.querySelector('#mytext')
	mytext.innerHTML = JSON.stringify(msg.data)
})