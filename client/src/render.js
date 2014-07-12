
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


