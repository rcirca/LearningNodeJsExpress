exports.getWeatherData = function(){
    return {
        locations: [
            {
                name: 'Portland',
                forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
                weather: 'Partly Cloudy',
                temp: '54.1 F (12.3 C)',
            },
            {
                name: 'Compton',
                forecastUrl: 'http://www.wunderground.com/US/CA/Compton.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
                weather: 'Partly Cloudy',
                temp: '55.0 F (12.8 C)',
            },
            {
                name: 'Lynwood',
                forecastUrl: 'http://www.wunderground.com/US/CA/Lynwood.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
                weather: 'Light Rain',
                temp: '55.0 F (12.8 C)',
            },
        ],

    };
}