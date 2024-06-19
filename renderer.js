const { ipcRenderer } = require('electron')

document.getElementById("submitFilePathButton").addEventListener("click", () => {
    const filePath = document.getElementById("filePathInput").value;
    ipcRenderer.send("file-path", filePath)
})

document.getElementById("testAddonButton").addEventListener("click", () => {
    ipcRenderer.invoke('generate-text').then(text => {
        const textArea = document.getElementById('addon-output');
        textArea.textContent = text;
    });
});