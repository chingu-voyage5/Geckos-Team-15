

window.onload = function () {
    document.querySelector("body").classList.remove("fade-out");
};




//----------DATE AND TIME -------------------------------------

function getDateTime() {

    var currentDate = new Date();
    // console.log(currentDate)


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
            // console.log(articles);

            var myLi = ``;

            for (var i = 0; i < articles.length; i++) {

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
                    '"><ul class="article-info-list"><li><div class="article-source-bk"><span class="article-source">' + source +
                    ' | </span><span class="article-time">' + newsDate +
                    '</div></span></li><li class="article-title">' + title +
                    '</li></ul></a></div></li>'
            };

            document.querySelector(".news-results").innerHTML = myLi;
        });
}

getNews();


var newsIcon = document.querySelector(".icon-svg142").addEventListener("click", displayNews);
function displayNews() {
    document.querySelector('.feature-news').style.right = 0;
}

var newsCloseBtn = document.querySelector(".news-close-btn").addEventListener("click", closeNews);
function closeNews() {
    document.querySelector('.feature-news').style.right = '-30rem';
}


//---------MUSIC -------------------------------------

var musicIcon = document.querySelector(".icon-svg1322").addEventListener("click", displayMusic);
function displayMusic() {
    document.querySelector('.feature-music').style.right = 0;
    // document.querySelector('.feature-tasks-close-btn').style.position = 'fixed';
}

var musicCloseBtn = document.querySelector(".music-close-btn").addEventListener("click", closeMusic);
function closeMusic() {
    document.querySelector('.feature-music').style.right = '-30rem';
}

var playlist = [
    {
        name: "Clair de Lune",
        artist: "Claude Debussy",
        file_name: "Clair de Lune.mp3"
    },
    {
        name: "European Starling",
        artist: "Chad Crouch",
        file_name: "Chad_Crouch_-_European_Starling.mp3"
    },
    {
        name: "Osprey",
        artist: "Chad Crouch",
        file_name: "Chad_Crouch_-_Osprey.mp3"
    },
    {
        name: "Raven",
        artist: "Chad Crouch",
        file_name: "Chad_Crouch_-_Raven.mp3"
    },
    {
        name: "Western Tanager",
        artist: "Chad Crouch",
        file_name: "Chad_Crouch_-_Western_Tanager.mp3"
    },

];


var playing = false;
var currentSong = 0;
var song = document.getElementById(playlist[currentSong].file_name);
var musicClicked = false;
var title = playlist[currentSong].name;
var artist = playlist[currentSong].artist;


song.onended = function(){
    next();
}
updateTitle();
function playAudio() {

    updateTitle();
    if (playing) {

        playing = false;
        pauseMusic();
        

    } else {
        playing = true;
        playMusic(); 
        
    }


};

function next() {

    currentSong++;
    if (currentSong > 4) {
        currentSong = 0;
    }
    nextPreHelper();
};

function pre() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = 0;
    }
    nextPreHelper();
};


function pauseMusic() {
    song.pause();
};
function playMusic() {
    song.play();
};

function nextPreHelper() {
    pauseMusic();
    playing = false;
    song.currentTime = 0;
    song = document.getElementById(playlist[currentSong].file_name);
    title = playlist[currentSong].name;
    artist = playlist[currentSong].artist;
    playAudio();
};


function updateTitle() {
    document.getElementById("songTitle").innerHTML = title;
    document.getElementById("artist").innerHTML = artist;
};



//---------TASK LIST -------------------------------------

var taskIcon = document.querySelector(".icon-svg372").addEventListener("click", displayTasks);
function displayTasks() {
    document.querySelector('.feature-tasks').style.right = 0;
    // document.querySelector('.feature-tasks-close-btn').style.position = 'fixed';
}

var taskCloseBtn = document.querySelector(".task-close-btn").addEventListener("click", closeTasks);
function closeTasks() {
    document.querySelector('.feature-tasks').style.right = '-30rem';
}


function plus() {

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

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
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
    span.className = "fas fa-trash-alt";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("fas fa-trash-alt");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        // var div = this.parentElement;
        // div.style.display = "none";
        close.parentNode.removeChild(close);
    }
}




//---------WEATHER -------------------------------------

var weatherIcon = document.querySelector(".icon-svg602").addEventListener("click", displayWeather);
function displayWeather() {
    document.querySelector('.weather-panel').style.right = 0;
    // document.querySelector('.weather-close-btn').style.position = 'fixed';
}

var weatherCloseBtn = document.querySelector(".weather-close-btn").addEventListener("click", closeWeather);
function closeWeather() {
    document.querySelector('.weather-panel').style.right = '-30rem';
}



// var APPID='4147e888a6bdb065010896c60775dc6b';
var appid = '3a6414f1f3e45ed94cceb03c4ada1795';
var id = 3882428;

function getWeather() {

    var url = 'https://api.openweathermap.org/data/2.5/forecast?' + 'id=' + id + '&appid=' + appid;

    var req = new Request(url);
    console.log(url);

    fetch(req)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data);
            console.log(data.city.name);



        });
}

getWeather();


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation, errorFunction);
} 

function getLocation() {
    
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log(lat);
        console.log(long);
    });
}

getLocation();




