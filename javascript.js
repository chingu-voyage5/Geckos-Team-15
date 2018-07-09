
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

getDateTime();




var playlist = [
    {
      name: "Clair de Lune",
      file_name: "Clair de Lune.mp3"
    },
    {
      name: "Chad Crouch - European Starling",
      file_name: "Chad_Crouch_-_European_Starling.mp3"
    },
    {
        name: "Chad Crouch - Osprey",
        file_name: "Chad_Crouch_-_Osprey.mp3"
      },
      {
          name: "Chad Crouch - Raven",
          file_name: "Chad_Crouch_-_Raven.mp3"
        },
        {
            name: "Chad Crouch - Western Tanager",
            file_name: "Chad_Crouch_-_Western_Tanager.mp3"
          },
        
  ];


var playing =false;
var currentSong=0;
var song = document.getElementById(playlist[currentSong].file_name);
var musicClicked = false;
var title = playlist[currentSong].name;

function playAudio(){
    
    updateTitle();
    if(playing){

        playing = false;
        pauseMusic();
        
    }else{
        playing =true;
        playMusic();
    }
    

};

function next(){
    
    currentSong++;
    if(currentSong >4){
        currentSong = 0;
    }
    nextPreHelper();
}; 

function pre(){
    currentSong--;
    if(currentSong < 0){
        currentSong = 0;
    } 
    nextPreHelper();
};


function pauseMusic(){
    song.pause();
};
function playMusic(){
    song.play();
};
function nextPreHelper(){
    pauseMusic();
    playing = false;
    song.currentTime = 0;
    song = document.getElementById(playlist[currentSong].file_name);
    title = playlist[currentSong].name;
    playAudio();
};

function slideMusic(){
    if(musicClicked){
     musicClicked= false; 
    document.getElementById("player").style.display ="block";
    }else{
        musicClicked = true;
        document.getElementById("player").style.display= "none";
    }
};

function updateTitle(){
    document.getElementById("songTitle").innerHTML = title;
};

function plus(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("userInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("userInput").value = "";
    
    var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "fas fa-trash-alt";
  span.appendChild(txt);
  li.appendChild(span);
}

function complete(){
    var x = document.getElementById("taskList");
    if(x.style.display === "None"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}