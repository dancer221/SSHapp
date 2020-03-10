const ssh2 = require('ssh2').Client;
const path = require('path');
const url = require('url');
const mysql2 = require('mysql2');
const {app, BrowserWindow} = require('electron');

var client = new ssh2();

let MainWindow;

function createWindow() {
  MainWindow = new BrowserWindow({
    width : 800,
    height : 500
  });

  MainWindow.loadURL(url.format({
    pathname : path.join(__dirname, 'index.html'),
    protocol : 'file:',
    slashes  : true
  }));

//  MainWindow.webContents.openDevTools();
  MainWindow.on('closed', ()=>{
    MainWindow = null;
  });
}

function getAbonCardFromDB(abon_num) {
  let AbbilsConnection = mysql2.createConnection({
    host  :   '91.219.32.6',
    user  :   'jora',
    database  :   'abbils',
    password  :   'NjkgeYf5Ep,trjd',
  });

  AbbilsConnection.connect(function(err){
    if (err) {
      return console.log(err.message);
    }
    else{
      return console.log('connect');
    }
  });



  AbbilsConnection.end(function(err){
    if (err) {
      return console.log(err.message);
    }
    else{
      return console.log('disconected');
    }
  });
}

getAbonCardFromDB();
app.on('ready', createWindow);

/*
  client.on('ready',function(){
  console.log('connected')
}).connect({
  host : '91.219.32.5',
  port : 22,
  username : 'sessiondrop',
  password :'lhjgyenm353355',

});
*/
