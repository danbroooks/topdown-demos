require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Pl9DfL":[function(require,module,exports){

var obj = require('obj');
var game = require('core/game');
var Polygon = require('graphics/Polygon');

var box = {};

var Constructor = function(options){

  this.shape = Polygon(options);

}

box.move = function(x, y) {
  // console.log(x, y);
};

box.rotate = function(r) {
  // console.log(r);
};

box.render = function(gfx) {
  gfx.render(this.shape);
};





// Create definition

var Box = obj.define(Object, Constructor, box);






// Export module

module.exports = Box;


},{}],"Box":[function(require,module,exports){
module.exports=require('Pl9DfL');
},{}],"IoK9oi":[function(require,module,exports){

// Load dependencies

var fn = require('fn');
var game = require('core/game');


game.render = function(delta, gfx){

//   var i = game.tick;
//   var s = Math.sin(i / 10) * 10;
//   var c = Math.cos(i / 10) * 10;

//   gfx.text('hello', { x: ( s*10 ) + 200, y: ( (c/2)*10 ) + 200 });

//   if (i % 300 === 0) {
// //     game.shapes[0].move(s, c/2);
//     game.shapes[0].render(gfx);

// //     game.shapes[1].move(-s/2, -c);
// //     game.shapes[1].rotate(0.01);
//     game.shapes[1].render(gfx);

//   }

};

game.update = function(gfx){

};



},{}],"render":[function(require,module,exports){
module.exports=require('IoK9oi');
},{}],"7Jmxv/":[function(require,module,exports){

var game = require('core/game');
var Point = require('graphics/Point');
var Vector = require('graphics/Vector');
var Collision = require('graphics/Collision');


function PrintResult(name, pass) {
  console.log(name + ': ' + (pass?'pass':'fail'));
}

function CollisionTest(){
  var pass = true;

  var a1 = Point(0, 0);
  var a2 = Point(10, 10);
  var vectorA = Vector(a1, a2);

  var b1 = Point(10, 0);
  var b2 = Point(0, 10);
  var vectorB = Vector(b1, b2);

  var c = Collision(vectorA, vectorB);
  var intersection = c.getIntersectionPoint();

  if (pass && intersection.x != 5) {
    pass = false;
  }

  if (pass && intersection.y != 5) {
    pass = false;
  }

  PrintResult('CollisionTest', pass);
};

game.beforeInit = function(config){

  config.addPrimaryCanvas('foreground');
  config.addCanvas('background');

  config.addPrimaryCamera('main');
  config.addCamera('secondary');

};


game.afterInit = function(gfx){

  gfx.bindCameraToCanvas('main', 'foreground');
  gfx.bindCameraToCanvas('secondary', 'background');

  CollisionTest();


}
},{}],"script":[function(require,module,exports){
module.exports=require('7Jmxv/');
},{}]},{},["7Jmxv/","IoK9oi"])