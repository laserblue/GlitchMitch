import {Scene} from 'phaser'

class Scene1 extends Scene {
  constructor() {
    super("bootScene");
  }
  preload() {
    
  }
  create() {
    this.add.text(20, 20, "Loading game ...");
    this.scene.start("MenuScene");
  }
}

export default Scene1;