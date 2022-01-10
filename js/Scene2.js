class Scene2 extends Phaser.Scene {
  constructor() {
    super("splashScreen");
  }
  create() {
    this.add.text(20, 20, "Showing Splash Screen", {font: "25px Arial", fill: "green"});
  }
}