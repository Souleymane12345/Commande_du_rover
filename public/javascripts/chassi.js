$(function() {
    var socket = io.connect();

    $('#btn_left').click(function(){
        let tab = [];
        let speed = document.getElementById("ageOutputIdV").innerText;
        tab.push('255','-255',speed)
        socket.emit('staut_chassi', tab);
    });

    $('#btn_right').click(function(){
        let tab = [];
        let speed = document.getElementById("ageOutputIdV").innerText;
        tab.push('-255','255',speed)
        socket.emit('staut_chassi', tab);
    });
    
    $('#btn_up').click(function(){
        let tab = [];
        let speed = document.getElementById("ageOutputIdV").innerText;
        tab.push('255','255',speed)
        socket.emit('staut_chassi', tab);
    });

    $('#btn_buttom').click(function(){
        let tab = [];
        let speed = document.getElementById("ageOutputIdV").innerText;
        tab.push('-255','-255',speed)
        socket.emit('staut_chassi', tab);
    });

})

