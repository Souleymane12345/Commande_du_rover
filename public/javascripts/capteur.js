
$(function() {
    var socket = io.connect();
    cap(200);
    function cap (a){
        if(a < 100){
            alert("10");
            document.getElementById("radarColomun").style.backgroundColor = "vert";
        } else if ( a > 50 && a <= 100){
            alert("ogjhfds")
            document.getElementById("radarColomun1").style.backgroundColor = "orange";
        }
        else{
            document.getElementById("radarColomun2").style.backgroundColor = "red";
        }
    }

    //alert('okkkkkkkkkksfhgggggggs')
    /** 
    socket.on('capteur', (data) => {
        let cap0 = parseInt(data[0])
        let cap1 = parseInt(data[1])
        let cap2 = parseInt(data[2])
        cap(cap0);
        cap(cap0);
        cap(cap0);
    });


    function cap (a){
        if(a > 100){
            alert("10");
            document.getElementById("radarColomun").style.backgroundColor = "vert";
        } else if ( a > 50 && a <= 100){
            alert("ogjhfds")
            document.getElementById("radarColomun1").style.backgroundColor = "orange";
        }
        else{
            document.getElementById("radarColomun2").style.backgroundColor = "red";
        }
    }
    */
})

