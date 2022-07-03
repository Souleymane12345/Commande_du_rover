const { SerialPort } = require('serialport')



var portname1 = '/dev/ttyUSB0';
var serialport1 = new SerialPort({ path: portname1, baudRate: 9600 })

function chassi(io) {
    serialport1.on('open', function() {
        
    console.log('Serial Port ' + portname1 + ' est disponible.');
    });


    io.on("connection", (socket) =>  { 
        //console.log('Connexion socket  chassi : Ok')
        socket.on('staut_chassi', (staut_chassi) => {
            console.log("statut du staut_chassi est" + "" + staut_chassi);
            //console.log(staut_chassi);
            //socket.emit('boutton_led', 'Veuillez patienter !');
            serialport1.write(staut_chassi, (err) => {
                if (err) {
                    io.sockets.emit('staut_chassi', err.staut_chassi);
                    return console.log('Error: ', err.staut_chassi);
                }
            });
        });
    });
}
module.exports = chassi;