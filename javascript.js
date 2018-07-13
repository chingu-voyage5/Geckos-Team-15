

window.onload = function() {
    document.querySelector("body").classList.remove("fade-out");
};




//----------DATE AND TIME -------------------------------------

function getDateTime() {

    var currentDate = new Date();
    console.log(currentDate)
    


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

    if (hour < 10) {

        hour = "0" + hour;
    }

    var minutes = currentDate.getMinutes();

    if (minutes < 10) {

        minutes = "0" + minutes;
    }

    var time = hour + ":" + minutes;

    document.querySelector('.date').textContent = fullDate;
    document.querySelector('.time').textContent = time;

    setTimeout(getDateTime, 30000);

};

getDateTime();

//---------NEWS -------------------------------------

//key 393bdf4f125f4a6298675ec35996dccd


function getNews() {
   

    var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=393bdf4f125f4a6298675ec35996dccd';
    var req = new Request(url);
    
    fetch(req)
        .then((resp) => resp.json())
        .then(function (data) {
            var articles = data.articles;
            console.log(articles);

            var myLi = ``;

            for (var i = 0; i< articles.length; i++){
                
                var title = articles[i].title;
                var timePublished = articles[i].publishedAt;


                var APIDate = timePublished.split('T');
                var APIDateArr = APIDate[0].split('-');
                var APIMonth = Number(APIDateArr[1], 10) - 1;

                var abrevMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
                var newsDate = abrevMonths[APIMonth] + " " + APIDateArr[2] + ", " + APIDateArr[0]


                var source = articles[i].source.name;
                var articleLink = articles[i].url;
    

                myLi += '<li class="article"><div class="article-info"><a href="' + articleLink + 
                '"><ul class="article-info-list"><li class="article-title">' + title + 
                '</li><li><span class="article-source">' + source + 
                ' | </span><span class="article-time">'+ newsDate + 
                '</span></li></ul></a></div></li>'
            };
            
            document.querySelector(".news-results").innerHTML = myLi; 
        });
}

getNews();


var newsIcon = document.querySelector(".icon-svg142").addEventListener("click", displayNews);
function displayNews() {
    document.querySelector('.feature-news').style.display = "block";
    // document.querySelector('.feature-news').classList.add('.feature-news-visible');
}

var newsCloseBtn = document.querySelector(".news-close-btn").addEventListener("click", closeNews);
function closeNews() {
    document.querySelector('.feature-news').style.display = "none";
}


//---------MUSIC -------------------------------------

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
        span.className =  "fas fa-trash-alt";
        span.appendChild(txt);
        li.appendChild(span);
      
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
      };

      
var myNodelist = document.getElementsByClassName("task");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className =  "fas fa-trash-alt";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("fas fa-trash-alt");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


<<<<<<< HEAD
=======



>>>>>>> development
