
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