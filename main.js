jQuery(function(){

// URL for data retrieval
    
  function getMyweather(query)

  $ajax({
url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=${"text"}&units=imperial&cnt=7&APPID=a66f3e4a44d08030372b2690bc228aab' ,
success: function successHandler(weather) {
console.log(weather);

//        $("#placeholder").html("<div class='row'>");

//       // Loop through our array of gifs and put them on the site
//       weather.data.forEach(function(day){
//         $("#placeholder .row").append(`<div class="gif col-md-4"><img src="${PLACE FROM CONSOLE DATAgif.images.fixed_height.url}"></div>`);
//       })

      
//   }});
// }


// $("#button").on("click",function(){
//   var text =$("#search").val();
//   getMyWeather(text);
// };



//     Jake's example:

//     function getMyWeather(query)
// {
//   $.ajax({
//     url: `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`,
//     success: function successHandler(weather) {
      // console.log(weather)
//        $("#placeholder").html("<div class='row'>");

//       // Loop through our array of gifs and put them on the site
//       weather.data.forEach(function(day){
//         $("#placeholder .row").append(`<div class="gif col-md-4"><img src="${PLACE FROM CONSOLE DATAgif.images.fixed_height.url}"></div>`);
//       })

      
//   }});
// }


// $("#button").on("click",function(){
//   var text =$("#search").val();
//   getMyWeather(text);
// })