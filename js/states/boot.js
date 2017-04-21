let boot = function(game){
  console.log("%cStarting JAB", "color: white; background: purple; padding-right: 2px; padding-left: 2px;");
};

boot.prototype = {
  preload: function () {
    this.game.load.image("loading", "assets/loading.png");
  },

  create: function () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.setScreenSize();
    this.game.state.start("Preload");
  }
}