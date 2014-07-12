
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


