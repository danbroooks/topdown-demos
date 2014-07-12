
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