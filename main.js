const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

app.allowRendererProcessReuse = false; // Añade esta línea

const addon = require("./libs/h5/h5addon")

var files_path = [];

// files_path.push("C:/Users/JPablo/Documents/RAW DATA/M00/DOSS_20231003T000002_000000Z.h5")
// C:/Users/JPablo/Documents/RAW DATA/M00/DOSS_20231003T000000_000000Z.h5

ipcMain.on("file-path", (event, path) => {
    files_path = [path]
});

BandsFBE = [
    {
        start: 781.25, 
        end: 937.50
    }
]

ParamsPSD = {
    Nfft: 16384, 
    Overl: 0.5,
    MaxSec: 10.0
}



ipcMain.handle('generate-text', async (event) => {
    return addon.processH5(files_path, ParamsPSD, BandsFBE).psd_channels_out[0].length;
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