let mainMenu = function (game) {

};

mainMenu.prototype = {
  create: function () {
    let title = this.game.add.sprite(160, 160, "title");
    title.anchor.setTo(0.5, 0.5);
    let playButton = this.game.add.button(160, 320, "play", this.playGame, this);
    playButton.anchor.setTo(0.5, 0.5);
  },

  playGame: function () {
    this.game.state.start("Game");
  }
}