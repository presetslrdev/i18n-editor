const { app, BrowserWindow, globalShortcut, Menu, dialog } = require('electron');

// import path from 'path';
// import {format} from 'url';

function createWindow(){
  let window = new BrowserWindow({
    width: 1200,
    height: 600,
    center: true,
    title: 'Поиск текста в файле. Курсовая Гаврилов Р.С.',
    // icon: 'app/mainicon.png',
    webPreferences: {
      nodeIntegration: true
    }
  });

  window.loadFile('app/index.html');
}

app.whenReady().then(createWindow)
