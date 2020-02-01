$(document).ready(function() {
    $("#getWeatherForecast").click(function(){
        $("#forecast-container").show();
        $("#city").empty();
        var city = $("#city").val();
        var key = 'd12bb65a84aedaec65cea8dea381e38d';
        console.log(key)
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q='+ city + '&units=imperial&appid=' + key,
            method: 'GET'
            }).then( function(data){
                console.log(data)
                var name = data.name
                var temp = data.main.temp
                var humidity = data.main.humidity
                var wind = data.wind.speed
                var weathers = data.weather
                var weatherL = weathers.slice()
                console.log(temp)
                $("#city-name").append(name);
                $("#temp").append(temp);
                $("#humidity").append(humidity);
                $("#wind").append(wind);
                    weatherL.forEach(function(weather){
                    
                        var icon = weather.icon
                        var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
                     console.log(icon)
                     $('#showWeatherForcast').append('<img id="clouds" src=' + iconUrl +'>')
                     
                     
                     
                    });
                    });
                   
                });
                
});
