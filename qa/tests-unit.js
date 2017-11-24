var lameFortune = require('../lib/lame-fortunes/lame-fortunes')
var fakeWeather = require('../lib/fake-weather/fake-weather');
var chai = require('chai');

var assert = chai.assert;

suite('Lame fortunes', function () {
   test('getFortune() should return a fortune', function () {
       assert.strictEqual(typeof lameFortune.getLameFortune(), 'string', "return type is a string");
   });
});

suite('Fake Weather', function () {
   test('getWeather() should return an object with an array', function () {
      var weather = fakeWeather.getWeatherData();
      assert.isArray(weather.locations);
   });

   test('getWeather() locations should not be empty', function () {
      var weather = fakeWeather.getWeatherData();
      assert.isAbove(weather.locations.length,0);
   });
});