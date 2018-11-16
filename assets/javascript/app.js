$(document).ready(function() { 
    var searchTerm;
    var startYear;
    var endYear;
    var queryUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "?begin_date=" + startYear + "?end_date=" + endYear + "&api-key=91d13c1dbc894543a852c3d545b6d325"
    
    
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function(response) {
        console.log(response);
        $("#search").on("click", function() {
           searchTerm = $("#searchTerm");
           startYear = $("#startYear");
           endYear = $("#endYear");
    
            for (i=0; i < response.docs.length; i++) {
                $("#topArticles").append(response.docs[i].headline.main + "<br>" + response.docs[i].byline.main + "<br>" + response.docs[i].snippet + "<br> URL: " + response.docs[i].web_url)
            }
        })
    });
    
    });
    
    
    //URL = response.docs[i].web_url Summary = response.docs[i].snippet title = response.docs[i].headline.main date = response.docs[i].pubDate author = respsonse.docs[i].byline.main