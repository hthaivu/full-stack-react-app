const request = require('request-promise');

const API_KEY = '8feb873731555801ce58136083f1973b';

class Weather {
    static retrieveByCity (city, callback) {
        request({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true
        }).then(function (res) {
            callback(null, res);
        }).catch(function (err) {
            console.log(err);
            callback({ error: 'Could not reach OpenWeatherMap API.' }, null);
        })
    }
}

module.exports = Weather;