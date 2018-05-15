var assert = require('assert');
var func = require('./func');
var origFunc = require('./origFunc');
var randomStr = require('./randomStr');
var STRING_FOR_EQUALITY = randomStr();

describe('Check func behaivor', function () {
  it('Test on equality', function () {
    for (var i = 0; i < 100; i++) {
      var aIndex = STRING_FOR_EQUALITY[getRandomInt(0, 50)];
      var bIndex = STRING_FOR_EQUALITY[getRandomInt(0, 50)];
      console.log('Test case #%s: aIndex: %s, bIndex: %s', i, aIndex, bIndex);
      var args = [STRING_FOR_EQUALITY, aIndex, bIndex];
      assert.equal(func.apply(this, args), origFunc.apply(this, args));
    }
    console.log('Equal string was: %s', STRING_FOR_EQUALITY);
  });


  it('should return -1 on false values', function () {
    assert.equal(func('', 'b', 'c'), -1);
    assert.equal(func(null, 'b', 'c'), -1);
    assert.equal(func(void(0), 'b', 'c'), -1);
    assert.equal(func(0, 'b', 'c'), -1);
  });
});



/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
