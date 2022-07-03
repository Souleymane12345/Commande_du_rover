const { SerialPort } = require('serialport')



var portname2 = '/dev/ttyACM0';
var serialport2 = new SerialPort({ path: portname2, baudRate: 9600 })

function bras(io) {
    serialport2.on('open', function() {
        
    console.log('Serial Port ' + portname2 + ' est disponible.');
    });


    io.on("connection", (socket) =>  { 
       // console.log('Connexion socket  chassi : Ok')
        socket.on('staut_bras', (dic) => {
            console.log("statut de la led");
            console.log(dic);
            //socket.emit('boutton_led', 'Veuillez patienter !');
            serialport2.write(dic, (err) => {
                if (err) {
                    io.sockets.emit('staut_bras', err.dic);
                    return console.log('Error: ', err.dic);
                }
            });
        });
    });
}
module.exports = bras;