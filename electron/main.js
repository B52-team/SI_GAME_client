const {app, BrowserWindow, ipcMain} = require('electron')
const path = require ('path');
const url = require ('url');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../public/index.html'),
        protocol: 'file:',
        slashes: true
    });
    
    mainWindow.loadURL(startUrl);
    mainWindow.webContents.openDevTools();
    mainWindow.webContents.on('devtools-opened', () => {
        setImmediate(() => {
            // do whatever you want to do after dev tool completely opened here
            mainWindow.focus();
        });
    });
}

app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})