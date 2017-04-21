let pause = function (game) {};

pause.prototype = {
  create: function () {

  },

  unPause: function () {
    this.game.state.start("Game");
  }
};