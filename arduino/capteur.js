const { SerialPort } = require('serialport')

var portname = '/dev/ttyACM0';

var serialport1 = new SerialPort({ path: portname, baudRate: 9600 })

function capteur(io) {
    
    serialport1.on('open', () => {
        
        console.log('Serial Port ' + portname + ' est disponible.');
    });


    io.on("connection", (socket) =>  { 
        //console.log('Connexion socket capteur : Ok')
        
        serialport1.on('data', (data) => {
            let tab = data.toString().replace('\r','').split(',');
            //console.log("eeeeeeeeeeeeeeeeeeeeeeeeee")
           // let tab = "ooooo"
            socket.emit('capteur', tab);
        });
    });

}

module.exports = capteur;
