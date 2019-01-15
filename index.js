const request = require('request');

let city = 'boston';
let apiKey = '';
let weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(weatherApiUrl, function(error, response, body){
  if(error) {
    console.log('error:', error);
    console.log('response:', response);

  } else {
    console.log('body:', body);  	
  }
});
