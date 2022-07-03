$(function() {
    document.querySelector('#stop').addEventListener('click', function (e) {
        navigator.getUserMedia({
            video: true,
            audio: true,
        }, function (stream) {
            document.getElementById('cadre').style.display = "none";
            let video = document.querySelector('#live');
            video.volume = 0
        
            video.srcObject = stream
            //video.stop();
        }, function() {})
    })


    document.querySelector('#start').addEventListener('click', function (e) {
        navigator.getUserMedia({
            video: true,
            audio: true,
        }, function (stream) {
            document.getElementById('cadre').style.display = "block";
            let video = document.querySelector('#live');
            video.volume = 0
        
            video.srcObject = stream
            video.play();
        }, function() {})
    })

})