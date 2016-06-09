"use strict";
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ width: 1000, height: 800, frame: false });
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    mainWindow.on("keyDown", function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log(args);
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
