// document.addEventListener('DOMContentLoaded', function() {
//  var checkPageButton = document.getElementById('checkPage');
//  checkPageButton.addEventListener('click', function() {
var myApiCode = 'a4a08bf85a1842c58043ed9f49a688bd'
var myUrl = 'https://newsapi.org/v1/articles?source=the-economist&sortBy=top&apiKey=a4a08bf85a1842c58043ed9f49a688bd'

$.ajax({
    method: "GET",
    url: myUrl,
    success: function(data) {
      console.log('data', data);
      var obj = data.articles;
      $('#Title').append(obj[0].title);
      // $('#Title').append(obj[1].title);
      // $('#Title').append(obj[9].title);





      console.log('article', data.articles)
        console.log('bedtime',data.articles[0]);
          console.log('title', data.articles[0].title);



      // var obj =
      // for(var i = 0; i < articles.length; i++)
    }
  });
