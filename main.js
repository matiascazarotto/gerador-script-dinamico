const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.loadFile('index.html');
}

ipcMain.handle('save-script', async (event, scriptContent) => {
    const { canceled, filePath } = await dialog.showSaveDialog({
        defaultPath: 'script.sql',
        filters: [
            { name: 'SQL Scripts', extensions: ['sql'] }
        ]
    });

    if (canceled) return; 
    if (filePath) {
        fs.writeFileSync(filePath, scriptContent);
    }
});

app.whenReady().then(() => {
    app.setAppUserModelId('Gerador_Script_Update');
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
