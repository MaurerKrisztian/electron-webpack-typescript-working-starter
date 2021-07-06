const electron = require("electron")
const {app, BrowserWindow} = electron;

app.on('ready', () => {
    console.log("app is ready")
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        width: 1200,
        height: 800
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
})
