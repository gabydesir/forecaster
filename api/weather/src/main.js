console.log('main.js is connected!');

/*
Here's an overview of the steps you'll follow to get your app to work...
STEPS
1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/
// let button = $('#submit');

    var cityName = $('#city')
    var currentTemp = $('#currentTemp')
    var weatherDes = $('#weather')
    var minTemp = $('#minTemp')
    var maxTemp = $('#maxTemp')
    // currentTemp.style.color = red

let button = document.getElementById('submit');
let inputValue = document.getElementById('input')

button.addEventListener('click',makeCall)

function onClick (){
  $('submit').on(inputValue);
}

// on click on the button, render data
function makeCall() {
  let userInput = inputValue.value;
  // let ur = 'http://api.openweathermap.org/data/2.5/weather?zip='
  let ar = 'http://api.openweathermap.org/data/2.5/weather?q={city name}'
  let apiKey = ',us&units=imperial&appid=9334216000d551381639538c02b919f3'
  let weather = ar + userInput + apiKey
  $.getJSON (weather, function (data){


     cityName.text(data.name);
     minTemp.text(data.main.temp_min);
     maxTemp.text(data.main.temp_max);
     weatherDes.text(data.weather[0].description);
     currentTemp.text(data.main.temp);

if(data.main.temp >  90 ){
  $('#currentTemp').css("background-color", "red")
}

if(data.main.temp <  40 ){
  $('#currentTemp').css("background-color", "blue")
}

  console.log(data)

    })
 }

  $('#reset').on('click',function(){
    location.reload()
  })








