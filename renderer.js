"use strict";
var electron = require("electron");
var app = electron.remote.app;
var isDragging = false;
document.getElementById("close-button").addEventListener("click", function () {
    app.quit();
});
document.getElementById("main-bar").addEventListener("mouseDown", function () {
    isDragging = true;
});
app.on("mouseMove", function (event) {
    console.log(event);
});
var onDevTools = true;
document.body.addEventListener("keydown", function (event) {
    if (event.keyCode == 123) {
        if (!onDevTools) {
            electron.remote.getCurrentWindow().openDevTools();
        }
        else {
            electron.remote.getCurrentWindow().closeDevTools();
        }
        onDevTools = !onDevTools;
    }
});
