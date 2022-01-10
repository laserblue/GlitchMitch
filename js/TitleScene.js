import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({key: 'TitleScene'});
  }
  preload () {
    this.load.image('background_load', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FWorkCounter.PNG?v=1574373316758');
  }
  create () {
    let background = this.add.sprite(0, 0, 'background_load');
    background.setOrigin(0,0);
  }
  
}
// export default TitleScene;