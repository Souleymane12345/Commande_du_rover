$(function() {
    var socket = io.connect();
    $('#send').click(function(){
        let dic = {pince: '', 
                rotule:'', 
                poignet:'',
                coude:'',
                epaule:'',
                base:''};

        let pi = document.getElementById("ageOutputId").innerText;
        let ro = document.getElementById("ageOutputIdR").innerText;
        let po = document.getElementById("ageOutputIdP").innerText;
        let co = document.getElementById("ageOutputIdC").innerText;
        let ep = document.getElementById("ageOutputIdE").innerText;
        let ba = document.getElementById("ageOutputIdB").innerText;
        
        dic["pince"] = pi;
        dic["rotule"] = ro;
        dic["poignet"] = po;
        dic["coude"] = co;
        dic["epaule"] = ep;
        dic["base"] = ba;

        // alert("pi:"+pi+"ro:"+ro+"po:"+po+"co:"+co+"ep"+ep+"ba"+ba)
        console.log(dic)
        socket.emit('staut_bras',dic );
    });

})