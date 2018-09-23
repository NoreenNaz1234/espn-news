$.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=espn&apiKey=8d4fe143bb6d43aaace9a8c5a32136a1",
    success: function(data) {
        console.log(data);
        for (i = 0; i < 7; i++) {
            document.querySelector(".news-story").innerHTML +=
                `
             <div>
                <h1> ${data.articles[i].title} </h1>
              
                <p> ${data.articles[i].description}</p>
            </div class="head-line">
            <span class="news-image" style="background-image: url(${data.articles[i].urlToImage});"></span>
            <div class="border-set"></div>
    
        </div>`
        }

    }
})



