const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

app.allowRendererProcessReuse = false; // Añade esta línea

const addon = require("./libs/addon")

ipcMain.handle('generate-text', async (event) => {
    return addon.generateText();
});

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
            nodeIntegrationInWorker: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})