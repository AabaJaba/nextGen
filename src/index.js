const { app, BrowserWindow, dialog, ipcMain, ipcRenderer } = require('electron');
const path = require('path');
const fs = require('fs');
const { basename } = require('path');
const exec = require('child_process').exec;

const app_remote = require('electron').remote

// Electron Settings
if (require('electron-squirrel-startup')) {
  app.quit();
}
var mainWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true,
  });
  mainWindow.maximize()
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};
app.on('ready', createWindow);
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


var fileName
var filePath
// Own Code
ipcMain.on('button', (event, arg) => {
  dialog.showOpenDialog({properties: ['openFile']}).then(result => {
    filePath = result.filePaths[0];
    fileName = basename(filePath)
    fs.copyFile(filePath, fileName, (err) => {
        if (err) throw err;
    });
    split()
  });
})

function split() {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if(err){
      console.log("An error ocurred reading the file :" + err.message);
      return;
    }
    var segments = [];
    data.replace("\n", null)
    var length =  data.length
    for (let i= 0; i<length; i+= length/4){
      data1 = data.slice(i, i+(length/4))
      data1 = data1.trim()
      if (data1 != null){
        segments.push(data1)
      }
    }
    try { fs.writeFileSync('file1.txt', segments[0], 'utf-8'); }
    catch(e) { console.log('Failed to save the file !'); }
    try { fs.writeFileSync('file2.txt', segments[1], 'utf-8'); }
    catch(e) { console.log('Failed to save the file !'); }
    try { fs.writeFileSync('file3.txt', segments[2], 'utf-8'); }
    catch(e) { console.log('Failed to save the file !'); }
    try { fs.writeFileSync('file4.txt', segments[3], 'utf-8'); }
    catch(e) { console.log('Failed to save the file !'); }

  });
  fs.unlink(fileName, (err) =>{
    if (err){
      console.log(err)
      return
    }
  })
  execute('python3 encrypt_data.py', (output) => {console.log(output)});
  setTimeout(() => {mainWindow.webContents.send('split_done', fileName)}, 2000);
}

function execute(command, callback) {
  exec(command, (error, stdout, stderr) => { 
      callback(stdout);
  });
};

ipcMain.on('decryption', (event, arg) => {
  join()
})

function join(){
  var parts = []
  fs.readFile("decrypted_file1.txt", 'utf-8', function(err, data){
    parts.push(data)
    fs.readFile("decrypted_file2.txt", 'utf-8', function(err, data){
      parts.push(data)
      fs.readFile("decrypted_file3.txt", 'utf-8', function(err, data){
        parts.push(data)
        fs.readFile("decrypted_file4.txt", 'utf-8', function(err, data){
          parts.push(data)
          fs.writeFileSync('main.txt', parts.join(' '), 'utf-8')
          fs.unlink("decrypted_file1.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
          })
          fs.unlink("decrypted_file2.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
          })
          fs.unlink("decrypted_file3.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
          })
          fs.unlink("decrypted_file4.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
          })
          fs.unlink("f1.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
          })
          fs.unlink("f2.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
          })
          fs.unlink("f3.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
          })
          fs.unlink("f4.txt", (err) =>{
            if (err){
              console.log(err)
              return
            }
          })
        })
      })
    })
  })
}


