
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





