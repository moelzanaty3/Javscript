var sum = require('./sum');
var assert = require('assert');

describe('sum', function () {
  it('should return 3 when the value 1+2', function () {
    assert.equal(sum(1, 2), 3);
  });
});