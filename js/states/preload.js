let preload = function (game) {

};

preload.prototype = {
  preload: function () {
    let loadingBar = this.add.sprite(160, 240, "loading");
    loadingBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(loadingBar);
    this.game.load.spritesheet("breakout", "assets/breakout_sprites.png");
    // this.game.load.image("title", "assets/title.png");
    // this.game.load.image("play", "assets/play.png");
    // this.gamel.load.image("gameover", "assets/gameover.png");
  },

  create: function () {
    this.game.state.start("MainMenu");
  }
}