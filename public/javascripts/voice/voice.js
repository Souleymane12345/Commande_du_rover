$(function() {
    var SpeechRecognition = window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    var Content = '';
    recognition.continuous = true;   
    var socket = io.connect();
 
    $('#voice-start').on('click', function(e) {
        
        recognition.onresult = function(event) {
            let current = event.resultIndex;      
            let transcript = event.results[current][0].transcript;
            //console.log(transcript)
            ///Content += transcript;

           // console.log('ok '+''+Content);
            let words = transcript.split(" ");
            console.log(words);
            for (let i = 0; i < words.length; i++) {
                if (words[i] == 'gauche') {
                    socket.emit('staut_chassi', '0');
                }
                if (words[i] == 'droite') {
                    socket.emit('staut_chassi', '1');
                }
                if (words[i] == 'avance') {
                    socket.emit('staut_chassi', '2');
                }
                if (words[i] == 'arrête') {
                    socket.emit('staut_chassi', '3');
                }

                if (words[i] == 'allume') {
                    
                    navigator.getUserMedia({
                        video: true,
                        audio: true,
                    }, function (stream) {
                        document.getElementById('cadre').style.display = "block";
                        let video = document.querySelector('#live');
                        video.volume = 0
                    
                        video.srcObject = stream;
                        video.play();
                    }, function() {});
                }

                if (words[i] == 'éteins') {
                    navigator.getUserMedia({
                        video: true,
                        audio: true,
                    }, function (stream) {
                        document.getElementById('cadre').style.display = "none";
                        let video = document.querySelector('#live');
                        video.volume = 0
                    
                        //video.srcObject = stream;
                        //video.stop();
                    }, function() {});
                }
            }

        };
        if (Content.length) {
            Content += ' ';
        }
        recognition.start();

        });


})

        /** 
        recognition.onstart = function() { 
            alert('Voice recognition is ON.');
        }
    
        recognition.onspeechend = function() {
            alert('No activity.');
        }
    
        recognition.onerror = function(event) {
            if(event.error == 'no-speech') {
                alert('Try again.');  
            }
        }
        */
    
    /** 
        Textbox.on('input', function() {
        Content = $(this).val();
        });
        */
    