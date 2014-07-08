/* global describe, it */
// _.last
// _.first
// _.random


(function () {
  'use strict';
  describe('_pluck', function () {
    it('should return an array', function () {
      var plucking = _.pluck([ {type: 'kittens', desc: 'cute'}, {type: 'puppies', desc: 'precious'}], function(pets){ return pets.type} ]);
      (plucking).should.equal(['kittens','puppies'].and.be.an('array');
    });
  });
 


  describe('_last', function () {
    it('should be a number', function () {
      var lasting = _.last([1, 2, 3, 4]);
      (lasting).should.equal(4).and.be.a('number');
    });
  });



  describe('_first', function () {
    it('should be a number', function () {
      var firsting = _.first([1, 2, 3, 4]);
      (firsting).should.equal(1).and.be.a('number');
    });
  });


  describe('_random', function () {
    it('should be a number', function () {
      var randoming = _.random([1, 2, 3, 4]);
      expect(randoming).to.be.a('number');
    });
  });



  describe('Kid', function () {
    it('should take a description of a string', function () {
      var Madelyn = new Kid({ description: 'cranky'});
      (Madelyn.description).should.equal('cranky').and.be.a('string');
    });
 
    it('should be sleepy after she plays', function () {
      var Penelope = new Kid();
      Penelope.play();
      expect(Penelope.energy).to.equal('sleepy');
    });
 
    it('should be annoying no matter what', function () {
      var other_kids = new Kid({ annoying: true });
      expect(other_kids.annoying).to.equal(true);
    });
 
  });
 
})();

    