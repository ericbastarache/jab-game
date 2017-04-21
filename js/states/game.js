let jab = function (game) {

};

jab.prototype =  {
  create: function () {
    let gameOverButton = this.game.add.button(160, 100, "over", this.gameOver, this);
    let pauseButton = this.game.add.button(160, 200, "pause", this.pause, this);
  },

  gameOver: function () {
    this.game.state.start("GameOver", true, false);
  },

  pause: function () {
    this.game.state.start("Pause");
  }
}