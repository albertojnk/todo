// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  return mainWindow
}

app.allowRendererProcessReuse = true
app.on('ready', function () {
  let mainWindow = createMainWindow()

  mainWindow.loadFile('./dist/todo/index.html')
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
