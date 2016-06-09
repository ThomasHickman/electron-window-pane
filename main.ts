import electron = require('electron')

var app = electron.app
var BrowserWindow = electron.BrowserWindow
var mainWindow: Electron.BrowserWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 1000, height: 600, frame: false})
  mainWindow.loadURL("file://" + __dirname + "/index.html");

  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  })
  mainWindow.on("keyDown", (...args) => {
      console.log(args)
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
