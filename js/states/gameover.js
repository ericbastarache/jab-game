let gameOver = function (game) {};

gameOver.prototype = {
  create: function () {

  },

  playGame: function () {
    this.game.state.start("Game");
  }
};