jQuery(function() {
// On form submit grab the city from the input box and send to the write data function
$("#button").on("click",function(e){
  e.preventDefault();
  var city = $("#input").val();
  writeData(city);
})


// Takes in the day from the form and sends it off to open weather data.
function writeData(city)
{
  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=imperial&7&APPID=a66f3e4a44d08030372b2690bc228aab`, 
    success: function(result){
        // Assign the data variable to an array that we will loop over.
        var data = result.list;
        console.log(result);
        // Clear out any previous data.
        $("#weatherGoesHere").html("");
        // Put in the city name
        $("#cityGoesHere").text(result.city.name);
      
      
        // Loop over our array to get access to each day.
        data.forEach(function(day){
          // Get the icon url for this day
          var iconUrl = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
          
          // Get what the day actually is
          var date = new Date(day.dt*1000);
          var dateDay = date.getDay();
          dateDay = digitToDay(dateDay);
          
          
          // Put the days info into our page.
          $("#weatherGoesHere").append(`
            <div class="weather col-md-3">
            <div class="whiteBox">
              <h3 class="dateDay">${dateDay}</h3>
              <h3>Max: ${day.temp.max}</h3>
              <h3>Min: ${day.temp.min}</h3>
              <h4>${day.weather[0].description}</h4>
              <img class="weatherImg" src="${iconUrl}">
            </div>
            </div>
          `)
        })
    }});
}

// Javascript dates :( 
function digitToDay(number){
  var weekday=new Array(7);
  weekday[1]="Monday";
  weekday[2]="Tuesday";
  weekday[3]="Wednesday";
  weekday[4]="Thursday";
  weekday[5]="Friday";
  weekday[6]="Saturday";
  weekday[0]="Sunday";
  
  return weekday[number];
}
});