var plucking = _.pluck([ {type: 'kittens', desc: 'cute'}, {type: 'puppies', desc: 'precious'}], 
 		function(pets){ return pets.type});


var lasting = _.last([1, 2, 3, 4]);


var firsting = _.first([1, 2, 3, 4]);



var randoming = _.random([1, 2, 3, 4]);
	


var Kid = function (options) {
  var options = options || {};
  this.description = options.description || 'silly'; 
  this.energy = options.energy || 'hyper'; 
  this.play = function () {
    this.energy = 'sleepy';
  }
  this.annoying = true; 
};