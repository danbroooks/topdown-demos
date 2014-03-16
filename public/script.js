
game.onAfterInit(function(){
  DOM.make('div#fps.watch');
  DOM.make('div#time.watch');
  var watch = DOM.get('.watch');
  watch.css('color', '#FFFFFF');
});

game.watch = function(){
  DOM.get('#fps').html(game.fps());
  DOM.get('#time').html(game.timeElapsed());
};

setInterval(game.watch, 50);