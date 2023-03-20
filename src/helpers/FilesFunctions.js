const { app, dialog } = require('electron');
const fs = require('fs');
const mainWindow = require("../../public/electron.js");

exports.createNewFile = ({content}) => {
  if(!content){
    content = "Ecrit ton code ici";
  }
  dialog.showSaveDialog({
    properties: ['createFile'],
    filters: [
      { name: 'Fichiers texte', extensions: ['txt'] },
      { name: 'Fichiers Markdown', extensions: ['md', 'markdown'] },
      { name: 'Fichiers HTML', extensions: ['html', 'html'] },
      { name: 'Fichiers CSS', extensions: ['css', 'css'] },
      { name: 'Fichiers JavaScript', extensions: ['js', 'js'] },
      { name: 'Fichiers JSON', extensions: ['json', 'json'] },
      { name: 'Tous les fichiers', extensions: ['*'] }
    ],
  }).then(fileObj => {
    if (!fileObj.canceled) {
      const filePath = fileObj.filePath;
      
      fs.writeFile(filePath, "Ecrit ton code ici", err => {
        if (err) {
          console.error(err);
          throw err;
        }
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            throw err;
          }
          console.log(data);
          if (mainWindow && mainWindow.webContents) {
            mainWindow.webContents.send('FILE_OPEN', filePath);
          }
        });
      });
    }
  }).catch(err => {
    console.error(err);
    // Show error message to user
    dialog.showErrorBox('Erreur lors de la création du fichier', err.message);
  });
};

exports.OpenFile = () => {
  dialog.showOpenDialog({
    properties: ['openFile']
  })
  .then(fileObj => {
    if (!fileObj.canceled && fileObj.filePaths.length > 0) {
      const filePath = fileObj.filePaths[0];
      // Read the file
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          throw err;
        }
        // Send a message to the renderer process to open the file
        if (mainWindow && mainWindow.webContents) {
          mainWindow.webContents.send('FILE_OPEN', filePath, data);
        }
      });
    }
  })
  .catch(err => {
    console.error(err);
    // Show an error dialog to the user
    dialog.showErrorBox('Erreur lors de l\'ouverture du fichier', err.message);
  });
};

exports.OpenFolder = () => {
  dialog.showOpenDialog({
    properties: ['openDirectory']
  })
  .then(folderObj => {
    if (!folderObj.canceled && folderObj.filePaths.length > 0) {
      const folderPath = folderObj.filePaths[0];
      // Read the folder contents
      fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error(err);
          throw err;
        }
        // Send a message to the renderer process to open the folder
        if (mainWindow && mainWindow.webContents) {
          mainWindow.webContents.send('FOLDER_OPEN', folderPath, files);
        }
      });
    }
  })
  .catch(err => {
    console.error(err);
    // Show an error dialog to the user
    dialog.showErrorBox('Erreur lors de l\'ouverture du dossier', err.message);
  });
};

exports.SaveFile = (content, defaultPath, filters) => {
  dialog.showSaveDialog({
    // defaultPath: defaultPath,
    // filters: filters
  })
  .then(fileObj => {
    if (!fileObj.canceled) {
      const filePath = fileObj.filePath;
      fs.writeFile(filePath, content, 'utf-8', err => {
        if (err) {
          console.error(err);
          throw err;
        }
        // Send a message to the renderer process to open the saved file
        if (mainWindow && mainWindow.webContents) {
          mainWindow.webContents.send('FILE_SAVED', filePath);
        }
      });
    }
  })
  .catch(err => {
    console.error(err);
    // Show an error dialog to the user
    dialog.showErrorBox('Erreur lors de la sauvegarde du fichier', err.message);
  });
};

exports.SaveAsFile = (content, defaultPath, filters) => {
};

exports.CloseFile = () => {
  if (mainWindow && mainWindow.webContents) {
    mainWindow.webContents.send('FILE_CLOSED');
  }
};

exports.CloseFolder = () => {
  if (mainWindow && mainWindow.webContents) {
    mainWindow.webContents.send('FOLDER_CLOSED');
  }
};

exports.Quit = () => {
  app.quit();
};

//TODO: Send content to monaco editor
