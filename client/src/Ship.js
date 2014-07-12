

// Load dependencies

var obj = require('obj');
var Polygon = require('graphics/Polygon');
var Actor = require('core/Actor');
var game = require('core/game');





// Constructor

var Constructor = function(options){

  var self = this;

  self.shape = Polygon([
    [10, 20],
    [30, 20],
    [20, 50]
  ]);

  self.forward = false;
  self.thrust = 0;
  self.left = false;
  self.right = false;

  game.controls.on('w').down(function(){
    self.forward = true;
  }).up(function(){
    self.forward = false;
  });

  game.controls.on('a').down(function(){
    self.left = true;
  }).up(function(){
    self.left = false;
  });

  game.controls.on('d').down(function(){
    self.right = true;
  }).up(function(){
    self.right = false;
  });
}





// Declare object literal

var ship = {};





// Declare object literal

ship.update = function() {

  if (this.left) {
    this.rotate(-0.08);
  }

  if (this.right) {
    this.rotate(0.08);
  }

  if (this.forward) {
    if (this.thrust <= 20) {
      this.thrust += 1;
    }
  }

  if (this.thrust > 0) {

    this.thrust -= 0.4;
    
    var x = Math.sin(-this.shape.angle)*this.thrust,
        y = Math.cos(this.shape.angle)*this.thrust;

    this.shape.move(x, y);

  } else {
    this.thrust = 0;
  }

};





// Create definition

var Ship = obj.define(Actor, Constructor, ship);






// Export module

module.exports = Ship;

