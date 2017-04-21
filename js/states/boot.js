let boot = function(game){
  console.log("%cStarting JAB", "color: white; background: purple; padding-right: 2px; padding-left: 2px;");
};

boot.prototype = {
  preload: function () {
    this.game.load.image("loading", "assets/loading.png");
  },

  create: function () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.setMinMax(400, 300, 800, 600);
    this.game.state.start("Preload");
  }
}