$(function() {
    var socket = io.connect();

    $('#btn_left').click(function(){
        let command = "";
        let speed = document.getElementById("ageOutputIdV").innerText;
        command = "{-"+speed+":"+speed+"}\n";
        socket.emit('staut_chassi', command);
    });

    $('#btn_right').click(function(){
        let command = "";
        let speed = document.getElementById("ageOutputIdV").innerText;
        command = "{"+speed+":"+"-"+speed+"}\n";
        socket.emit('staut_chassi', command);
    });
    
    $('#btn_up').click(function(){
        let command = "";
        let speed = document.getElementById("ageOutputIdV").innerText;
        command = "{"+speed+":"+speed+"}\n";
        socket.emit('staut_chassi', command);
    });

    $('#btn_buttom').click(function(){
        let command = "";
        let speed = document.getElementById("ageOutputIdV").innerText;
        command = "{-"+speed+":"+"-"+speed+"}\n";
        socket.emit('staut_chassi', command);
    });

    $('#btn_stop').click(function(){
        let command = "";
        command = "{"+0+":"+""+0+"}\n";
        socket.emit('staut_chassi', command);
    });

})
