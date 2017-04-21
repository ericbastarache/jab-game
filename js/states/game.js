let jab = function (game) {

};

jab.prototype =  {
  create: function () {
    let gameOverButton = this.game.add.button(160, 100, "over", this.gameOver, this);
  },

  gameOver: function () {
    this.game.state.start("GameOver", true, false);
  }
}