require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"p/6zQ7":[function(require,module,exports){


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


},{}],"Ship":[function(require,module,exports){
module.exports=require('p/6zQ7');
},{}],"IoK9oi":[function(require,module,exports){

// Load dependencies

var fn = require('fn');
var game = require('core/game');

var Ship = require('Ship');


var s = Ship();

s.teleport(600,200);


game.render = function(delta, gfx){

  gfx.clear();
  gfx.cling();

  s.render(gfx);
  s.update();

};

game.update = function(gfx){

};



},{"Ship":"p/6zQ7"}],"render":[function(require,module,exports){
module.exports=require('IoK9oi');
},{}],"7Jmxv/":[function(require,module,exports){

var game = require('core/game');

game.beforeInit = function(config){

  config.addPrimaryCanvas('foreground');
  config.addCanvas('background');

  config.addPrimaryCamera('main');
  config.addCamera('secondary');

};


game.afterInit = function(gfx){

  gfx.bindCameraToCanvas('main', 'foreground');
  gfx.bindCameraToCanvas('secondary', 'background');

}
},{}],"script":[function(require,module,exports){
module.exports=require('7Jmxv/');
},{}]},{},["7Jmxv/","IoK9oi"])