

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


    var dayName = document.querySelectorAll('.weather-day')
    for (var i = 0; i <= 4; i++) {

        dayName[i].innerHTML = dayNames[day];

        if (day < 6) {
            day += 1;
        } else if (day === 6) {
            day = 0;
        }

    }

    var hour = currentDate.getHours();

    if (hour < 10) {

        hour = "0" + hour;
    }

    var minutes = currentDate.getMinutes();

    if (minutes < 10) {

        minutes = "0" + minutes;
    }

    var time = hour + ":" + minutes;

    //I think we can set this to hour instead of time, and parsing it later
    currentTime = time;

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
    store();

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

var lat = 34.01;
var long = -118.39;

// var lat, long;


// Set up conditional if browser does not offer geolocation
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(getLocation, errorFunction);
// } 

//note - this works but weather data loads slowly

navigator.geolocation.getCurrentPosition(function (position) {

    lat = position.coords.latitude;
    long = position.coords.longitude;


    getWeather(lat, long);
    getForecast(lat, long);

});

// getWeather();
// getForecast();


function getWeather() {
    // console.log(lat);
    // console.log(long);
    var url = 'https://api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&lon=' + long + '&appid=' + appid + '&units=imperial';
    


    var req = new Request(url);
    // console.log(url);

    fetch(req)
        .then((resp) => resp.json())
        .then(function (dataCurrent) {
            //  console.log(dataCurrent); 

            var city = dataCurrent.name;
            var currentTemp = dataCurrent.main.temp;
            var currentMax = dataCurrent.main.temp_max;
            var currentMin = dataCurrent.main.temp_min;

            var icon = dataCurrent.weather[0].id;
            var description = dataCurrent.weather[0].description;

            var weatherIcon = "wi-owm-" + icon;
            var imgUrl = "<i class='wi " + weatherIcon + "'></i>"

            // console.log(currentTemp);
            // console.log(currentMax);
            // console.log(currentMin);
            // console.log(weatherIcon);
            // console.log(description);

            var cityName = document.querySelectorAll('.city-name')

            for (var i=0; i<5; i++){
                cityName[i].innerHTML = city;
            }

            


            document.querySelector('.temp-current').innerHTML = Math.round(currentTemp) + "&#176;";
            
            // document.querySelector('.temp-high').innerHTML = 'H:' + Math.round(currentMax) + "&#176;";
            // document.querySelector('.temp-low').innerHTML = 'L:' + Math.round(currentMin) + "&#176;";
            
            document.querySelector('.weather-icon').innerHTML = imgUrl;
            document.querySelector('.weather-description').innerHTML = description;


        });
}


function getForecast() {
    var url = 'https://api.openweathermap.org/data/2.5/forecast?' + 'lat=' + lat + '&lon=' + long + '&appid=' + appid + '&units=imperial';

    var req = new Request(url);
    // console.log(url);

    fetch(req)
        .then((resp) => resp.json())
        .then(function (data) {
             //console.log(data);

            var city = data.city.name;

            getHighLowTemp(data);
            updateForecast();
            

        });
}


// getWeather();


var dailyHighs = [];
var dailyImg=[];
var dailyDesc=[];
    
var dailyLows = [];

var maxlist=[];
var minlist=[];

function getHighLowTemp(data) {

    
    // var tempmax=[];
    // var tempmin=[];
    
    // console.log(data);
    // //console.log(data.list.length);
    // for(var i = data.list.length-1; i>=0; i--){
    //     //console.log(data.list[i].main.temp_max);
    //     tempmax.push(data.list[i].main.temp_max);
    //     tempmin.push(data.list[i].main.temp_min);        
    // };
    // maxlist = reverse(tempmax, true, data);
    // minlist = reverse(tempmin, false, data);
    

    //  console.log(maxlist); 
    //  console.log(minlist);

    





















    
    // to find the high and low, shift through the list and 
    // and search for the max and min temps for that day, then display data.
    //cycle through each day of the forecast 


        var maxMinlength = data.list.length-1;
    var remainder = maxMinlength%8;
    var whole = maxMinlength - remainder;
    console.log(data);
    for (var j = 0; j < whole; j+= 8) {
        console.log(j);
        //holds values of the 8 iterations
        var maxList = [];
        var descList = [];
        var imgList = []; 
        
        var minList = [];
        

        //cycle through
        for (var i = 0; i <= remainder; i++) {

            var loop = i + j;

            console.log(loop);
            
            //will hold the max temp for this iteration
            var maxNum = data.list[loop].main.temp_max;
            maxList.push(maxNum);
 
            var description = data.list[loop].weather[0].description;
            descList.push(description);

            var image = data.list[loop].weather[0].id;
            imgList.push(image);
  
 

            //will hold the min temp for this iteration
            var minNum = data.list[loop].main.temp_min;
            minList.push(minNum);
            
        }
        // console.log('hight');
        //  console.log(maxList);
        //  console.log('low');
        //  console.log(minList);
    
        //hold highest temperature among  8 entries
        var tempHigh = Math.max(...maxList);

        //what is the index of the hightemp in the maxList
        var index = maxList.indexOf(tempHigh);
        // console.log(index);
        
        //what is the image associated with the highest temp
        var imgHigh = imgList[index];
        // console.log(imgHigh);

        //what is the descritpion associated with the highest temp
        var descHigh = descList[index];
        // console.log(descHigh);

        // console.log(tempHigh);
        dailyHighs.push(tempHigh);
        dailyImg.push(imgHigh);
        dailyDesc.push(descHigh);


        //need to reset the var for next loop so they are not included in next batch?
        maxList=[];
        descList = [];
        imgList = [];


        //hold lowest temperature among  8 entries
        var tempLow = Math.min(...minList);
        //console.log(tempLow);
        dailyLows.push(tempLow);
        minList=[];
    }

     
     console.log(dailyHighs); 
    console.log(dailyImg);
    console.log(dailyDesc);
    //capture the daily highs that will show on screen
     console.log(dailyLows[0]);
    
}
// function reverse(HL, eitherOr, data){
//     var holder = [];
//     var HighLowByDay =[];
//     var maxMinlength = HL.length-1;
//     var remainder = maxMinlength%8;
//     var loop = maxMinlength - remainder;
//     var imgList = []; 
//     var descList = [];
//     var index;
    
    
//         for(var i = 0; i<loop; i+=8){  
//            for(j = 0; j<8+i; j++){
//                holder.push(HL[j]); 
               
//                 image = data.list[j].weather[0].id;
//                 imgList.push(image);
//            };

//            if(eitherOr){

//                var tempHL = Math.max(...holder);
//                 index = holder.indexOf(tempHL);
                
//            }else{

//                var tempHL= Math.min(...holder);
//                index = holder.indexOf(tempHL);

//             }
//             console.log(index);
//             if( index==0){
//                 var description = data.list[index].weather[0].description;
//                 descList.push(description);
                
//                 var image = data.list[index].weather[0].id;
//                 imgList.push(image);
//                  }
//            if(index<=maxMinlength && index>0){
//             var description = data.list[index-1].weather[0].description;
//             descList.push(description);
            
//             var image = data.list[index-1].weather[0].id;
//             imgList.push(image);
//              }
             
             
//            HighLowByDay.push(tempHL);
//             dailyDesc.push(descList);
//             dailyImg.push(imgList);
//            //console.log(imgList[0]);
//             //console.log(descList);
//             //console.log(dailyImg[0][0]);
//             imgList=[];
//             descList=[];
            
           
//         };
   
         
//     return HighLowByDay; 
// };

function updateForecast() {

    var iconUI = document.querySelectorAll('.weather-icon-forecast');
    var descUI = document.querySelectorAll('.weather-description-forecast');
    var highUI = document.querySelectorAll('.temp-high-forecast');
    var lowUI = document.querySelectorAll('.temp-low-forecast');

    
    
    //document.querySelector('.temp-high-forecast').innerHTML = Math.round(maxlist[0]) + "&#176;";
    for (var i = 3; i>= 0; i--) {
       
        console.log(maxlist[i]);
        // var weatherIcon = "wi-owm-" + icon;
        // var imgUrl = "<i class='wi " + weatherIcon + "'></i>"
         iconUI[i].innerHTML = "<i class='wi " + "wi-owm-" + dailyImg[i] + "'></i>";
        highUI[i].innerHTML = 'H: ' + Math.round(dailyHighs[i]) + "&#176;";
        
        lowUI[i].innerHTML = 'L:' + Math.round(dailyLows[i]) + "&#176;";

       
        
        //adding 1 so we get the forecast for tomorrow first
        descUI[i].innerHTML = dailyDesc[i];
        
    }
}
    



