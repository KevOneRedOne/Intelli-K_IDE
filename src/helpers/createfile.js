const { dialog } = require('electron');
const fs = require('fs');
const mainWindow = require("../../public/electron.js");

const createNewFile = (path) => {
    dialog.showSaveDialog({
      properties: ['createFile'],
      filters: [
        { name: 'Fichiers texte', extensions: ['txt'] },
        { name: 'Fichiers Markdown', extensions: ['md', 'markdown'] },
        { name: 'Tous les fichiers', extensions: ['*'] }
      ],
      defaultPath: path
    }).then(fileObj => {
      if (!fileObj.canceled) {
        const filePath = fileObj.filePath;
  
        // Écrire du contenu dans le fichier
        fs.writeFile(filePath, "Hello World", err => {
          if (err) {
            console.error(err);
            return;
          }
  
          // Lire le contenu du fichier
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
  
            // Envoyer le chemin du fichier à la fenêtre principale
            console.log(data);
            mainWindow.webContents.send('FILE_OPEN', filePath);
          });
        });
      }
    }).catch(err => {
      console.error(err);
    });
};

module.exports = createNewFile;

// creer des props pour personnaliser : le path, le nom du fichier, l'extension, le contenu du fichier
// envoyer ce fichier dans monacoeditor
