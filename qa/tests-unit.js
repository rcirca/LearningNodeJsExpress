var lameFortune = require('../lib/lame-fortunes/lame-fortunes');
var expect = require('chai').expect;

suite('Lame fortunes', function () {
   test('getFortune() should return a fortune', function () {
       expect(typeof lameFortune.getLameFortune() === 'string');
   });
});