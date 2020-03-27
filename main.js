const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
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

ipcMain.on('title:bar', function(event, button) {
  let currentWindow = BrowserWindow.getFocusedWindow()
  
  switch (button) {
    case 'close':
      currentWindow.close()
      break
    
    case 'max':
      currentWindow.maximize()
      break

    case 'restore':
      currentWindow.unmaximize()
      break
      
    case 'min':
      currentWindow.minimize()
      break    
  }

})
