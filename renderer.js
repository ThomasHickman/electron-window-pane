"use strict";
var electron = require("electron");
var app = electron.remote.app;
document.getElementById("close-button").addEventListener("click", function () {
    app.quit();
});
document.body.addEventListener("keydown", function (event) {
    if (event.keyCode == 123) {
        electron.BrowserWindow.webContents.openDevTools();
    }
});
