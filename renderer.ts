import electron = require("electron");

var app = electron.remote.app;

var isDragging = false;

document.getElementById("close-button").addEventListener("click", () => {
    app.quit();
})

document.getElementById("main-bar").addEventListener("mouseDown", () => {
    isDragging = true;
})

app.on("mouseMove", (event) => {
    console.log(event);
})

var onDevTools = true;

document.body.addEventListener("keydown", (event) => {
    if(event.keyCode == 123 /*DevTools*/){
        if(!onDevTools){
            (<any>electron.remote.getCurrentWindow()).openDevTools();
        }
        else{
            (<any>electron.remote.getCurrentWindow()).closeDevTools();
        }
        onDevTools = !onDevTools;
    }
})
