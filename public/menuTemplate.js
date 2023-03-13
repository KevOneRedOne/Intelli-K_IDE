const { app, Menu, dialog } = require('electron');
const isMac = process.platform === 'darwin'
const fs = require("fs");

const IDEtemplate = [
    // { role: 'appMenu' }
    ...(isMac ? [{
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideOthers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    }] : []),
    {
        label: 'File',
        submenu: [
          {
            label: 'New File',
            accelerator: 'CmdOrCtrl+N',
            click: () => {
              // Code pour créer un nouveau fichier
            },
          },
          {
            label: 'Open File',
            accelerator: 'CmdOrCtrl+O',
            click: () => {
                // construct the select file dialog
                dialog.showOpenDialog({
                    properties: ['openFile']
                })
                    .then(function (fileObj) {
                    // the fileObj has two props
                    if (!fileObj.canceled) {
                        mainWindow.webContents.send('FILE_OPEN', fileObj.filePaths);
                    }
                })
                    // should always handle the error yourself, later Electron release might crash if you don't
                    .catch(function (err) {
                    console.error(err);
                });
            },
          },
          {
            label: 'Open Folder',
            accelerator: 'CmdOrCtrl+O',
            click: () => {
                // construct the select file dialog
                dialog.showOpenDialog({
                    properties: ['openDirectory']
                }) // the fileObj has two props
                    .then(function (fileObj) {
                    if (!fileObj.canceled) {
                        mainWindow.webContents.send('FILE_OPEN', fileObj.filePaths);
                    }
                });
            },
          },
          {
            label: 'Save File',
            accelerator: 'CmdOrCtrl+S',
            click: () => {
              // Code pour enregistrer un fichier
            },
          },
          {
            label: 'Save File As',
            accelerator: 'CmdOrCtrl+Shift+S',
            click: () => {
              // Code pour enregistrer un fichier sous un autre nom
            },
          },
          { type: 'separator' },
          {
            label: 'Close File',
            accelerator: 'CmdOrCtrl+W',
            click: () => {
              // Code pour fermer un fichier
            },
          },
          {
            label: 'Quit',
            accelerator: 'CmdOrCtrl+Q',
            click: () => {
              app.quit();
            },
          },
        ],
    },
    // { role: 'editMenu' }
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            ...(isMac ? [
                { role: 'pasteAndMatchStyle' },
                { role: 'delete' },
                { role: 'selectAll' },
                { type: 'separator' },
                {
                    label: 'Speech',
                    submenu: [
                        { role: 'startSpeaking' },
                        { role: 'stopSpeaking' }
                    ]
                }
            ] : [
                { role: 'delete' },
                { type: 'separator' },
                { role: 'selectAll' }
            ])
        ]
    },
    // { role: 'viewMenu' }
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    // { role: 'windowMenu' }
    {
        label: 'Window',
        submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            ...(isMac ? [
                { type: 'separator' },
                { role: 'front' },
                { type: 'separator' },
                { role: 'window' }
            ] : [
                { role: 'close' }
            ])
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click: async () => {
                    const { shell } = require('electron');
                    await shell.openExternal('https://electronjs.org');
                }
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(IDEtemplate);
Menu.setApplicationMenu(menu);

