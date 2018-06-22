window.onload = playMusic;
function getDateTime() {

    var currentDate = new Date();

    var day = currentDate.getDay();
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var date = currentDate.getDate();

    var month = currentDate.getMonth().toString();
    var monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    var year = currentDate.getFullYear();

    var fullDate = dayNames[day] + " " + monthNames[month] + " " + date + ", " + year;

    var hour = currentDate.getHours();
    if (hour<10) {
        hour = "0" + hour;
    }


    var minutes = currentDate.getMinutes();

    if (minutes<10) {
        minutes = "0" + minutes;
    }

    var time = hour + ":" + minutes;

    document.querySelector('.date').textContent = fullDate;
    document.querySelector('.time').textContent = time;

    setTimeout(getDateTime, 30000);

};




var playlist = [];
var playing =false;
function playAudio(){
  
    var song = document.getElementById("myAudio");
    if(playing){
        playing = false;
        song.pause();
        
    }else{
        playing =true;
        song.play();
    }
    

}

getDateTime();




