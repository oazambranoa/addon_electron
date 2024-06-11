const { ipcRenderer } = require('electron')

document.getElementById("testAddonButton").addEventListener("click", () => {
    ipcRenderer.invoke('generate-text').then(text => {
        const textArea = document.getElementById('addon-output');
        textArea.textContent = text;
    });
});