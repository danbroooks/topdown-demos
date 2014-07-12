
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