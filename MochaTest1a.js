const assert=require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
      it('returns a rooster call', () => {


      //Setup
      const expected = 'Cock-a-doodle-doo!';
      //Execute
      const actual = Rooster.announceDawn();
      //Verify
      assert.equal(actual, expected);
      });
  });

  describe('.timeAtDawn', () => {
    it('returns an argument as a string', () => {

      //Setup
      const inputNumber = 6;
      const expected = '6';

      //Execute
      const actual = Rooster.timeAtDawn(inputNumber);

      //Verify
      assert.strictEqual(actual, expected);
    })
  })
});