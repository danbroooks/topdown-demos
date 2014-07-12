require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Pl9DfL":[function(require,module,exports){


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


},{}],"Box":[function(require,module,exports){
module.exports=require('Pl9DfL');
},{}],"IoK9oi":[function(require,module,exports){

// Load dependencies

var fn = require('fn');
var game = require('core/game');

var Point = require('graphics/Point');
var Box = require('Box');


var b = Box([
  Point(200, 200),
  Point(200, 300),
  Point(400, 300),
  Point(400, 200)
]);

b.teleport(600,200);


game.render = function(delta, gfx){

  var i = game.tick;
  var s = Math.sin(i / 10) * 5;
  var c = Math.cos(i / 10) * 5;

  gfx.clear();

  gfx.cling();

  gfx.text('hello', { x: ( s*10 ) + 200, y: ( (c/2)*10 ) + 200 });

  b.render(gfx);
  b.update();

  gfx.draw([
    Point(20, 20),
    Point(20, 40),
    Point(40, 40),
    Point(40, 20)
  ]);

  // gfx.canvasStack.selected.camera.move(Point(s, c/2));

};

game.update = function(gfx){

};



},{"Box":"Pl9DfL"}],"render":[function(require,module,exports){
module.exports=require('IoK9oi');
},{}],"7Jmxv/":[function(require,module,exports){

var game = require('core/game');
var Point = require('graphics/Point');
var Camera = require('graphics/Camera');
var Vector = require('graphics/Vector');
var Polygon = require('graphics/Polygon');
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

function StaticCollisionTest(){
  var pass = true;

  var a = Point(30, 30);

  var test1 = Collision.areaContainsPoint([
    Point(20, 20),
    Point(20, 40),
    Point(40, 40),
    Point(40, 20)
  ], a);

  var test2 = Collision.areaContainsPoint(Polygon([
    Point(20, 20),
    Point(20, 40),
    Point(40, 40),
    Point(40, 20)
  ]), a);

  if (!test1 || !test2) {
    pass = false;
  }

  PrintResult('StaticCollisionTest', pass);
};

function CameraTest(gfx) {
  var pass = true;

  // console.log(gfx.canvasStack.selected.camera);

  PrintResult('CameraTest', pass);
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
  StaticCollisionTest();
  // CameraTest(gfx);
}
},{}],"script":[function(require,module,exports){
module.exports=require('7Jmxv/');
},{}]},{},["7Jmxv/","IoK9oi"])