
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

