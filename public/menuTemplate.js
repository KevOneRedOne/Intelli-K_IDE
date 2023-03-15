const { app, Menu, dialog } = require('electron');
const isMac = process.platform === 'darwin';
const mainWindow = require("./electron.js");
const FilesFunctions = require('../src/helpers/FilesFunctions.js');

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
            click: FilesFunctions.createNewFile,
          },
          { type: 'separator' },
          {
            label: 'Open File',
            accelerator: 'CmdOrCtrl+O',
            click: FilesFunctions.OpenFile,
          },
          {
            label: 'Open Folder',
            accelerator: 'CmdOrCtrl+K',
            click: FilesFunctions.OpenFolder,
          },
          {
            label: 'Save File',
            accelerator: 'CmdOrCtrl+S',
            click: FilesFunctions.SaveFile,
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
            click: FilesFunctions.CloseFile,
          },
          {
            label: 'Close Folder',
            accelerator: 'CmdOrCtrl+Shift+W',
            click: FilesFunctions.CloseFolder,
          },
          {
            label: 'Quit',
            click: FilesFunctions.Quit,
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
    // { role: 'viewMenu' },
    {
        label: 'Selection'
    },
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
    // { role: 'windowMenu' },
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
    {label:'Run'},
    {label:'Git'},
    {label:'Terminal'},
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

