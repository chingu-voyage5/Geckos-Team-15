
window.onload = function() {
    document.querySelector("body").classList.remove("fade-out");
};




//----------DATE AND TIME -------------

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

    // console.log(month);
    // console.log(date);
    // console.log(year);
    // console.log(time);


                // var todayDate = function (month, date, year, time) {
                //     this.month = month;
                //     this.date = date;
                //     this.year = year;
                //     this.time = time;
                //}

                // var todayDate = {
                //     this.month = month;
                //     this.date = date;
                //     this.year = year;
                //     this.time = time;
                //}
            

    document.querySelector('.date').textContent = fullDate;
    document.querySelector('.time').textContent = time;

    setTimeout(getDateTime, 30000);

};

getDateTime();


//---------NEWS ---------

//key 393bdf4f125f4a6298675ec35996dccd

var newsIcon = document.querySelector(".icon-icon-55-document-text")
newsIcon.addEventListener("click", getNews);

function getNews() {
    document.querySelector('.feature-news').style.display = "block";
    // document.querySelector('.feature-news').classList.add('.feature-news-visible');

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

                // convertDate();

                var source = articles[i].source.name;
                var articleLink = articles[i].url;
    
                // console.log(title);
                // console.log(timePublished);
                // console.log(source);


                myLi += '<li class="article"><div class="article-info"><a href="' + articleLink + 
                '"><ul class="article-info-list"><li class="article-title">' + title + 
                '</li><li><span class="article-source">' + source + 
                ' | </span><span class="article-time">'+ timePublished + 
                '</span></li></ul></a></div></li>'
            };
            

            document.querySelector(".news-results").innerHTML = myLi;

            
        });

}

function displayNews() {

}

// getNews();

// function convertDate() {

//     Mon Jul 02 2018 11:04:04 GMT-0700 (PDT)  in JS
//     2018-07-02T17:40:46Z  from API



// };


// return {
    //     month: month,
    //     date: date,
    //     year: year,
    //     time: time,
// }










// var addListItem = function (obj) {
//     var html, newHtml, element;  class element from html

    
    
//     element = DOMstrings.incomeContainer;
//     html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
    

//     replace the placeholder text with actual data

//     newHtml = html.replace('%id%', obj.id);
//     newHtml = newHtml.replace('%description%', obj.description);
//     newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

//     insert the html into the dom
//     document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
// };
