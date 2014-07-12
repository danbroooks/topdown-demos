

// Load dependencies

var obj = require('obj');
var Polygon = require('graphics/Polygon');
var Actor = require('core/Actor');
var game = require('core/game');





// Constructor

var Constructor = function(options){

  this.shape = Polygon(options);

  game.controls.on('a').down(function(){
    console.log('a');
  }).up(function(){
    console.log('a up');
  });
}





// Declare object literal

var box = {};





// Declare object literal

box.update = function() {
  this.rotate(-0.05);
};





// Create definition

var Box = obj.define(Actor, Constructor, box);






// Export module

module.exports = Box;

