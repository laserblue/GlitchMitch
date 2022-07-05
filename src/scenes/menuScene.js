// global Phaser, BootScene, MenuScene, GameScene, OptionsScene, CreditsScene, IntroScene

import Phaser from "phaser"

export class MenuScene extends Phaser.Scene {     
   constructor() {
      super('MenuScene');
   }

    preload()
    {
        this.load.image('fieldpic', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2F800px-Corn_Field.JPG?v=1574372099635');
   //     this.load.sceneFile('sceneMain', 'js/SceneMain.js');
    }
  
    create() 
    {
    //    this.fieldpic = this.add.image(400, 300, 'fieldpic');
        this.fieldpic = this.add.sprite(400, 300, 'fieldpic').setOrigin(0.5, 0.5)
        this.add.text(150, 0, 'Mitchy\'s Maize', { fontFamily: 'Arial', fontSize: 84, color: '#ffff00' }).setStroke('0x0000ff', 4);
        const txt1 = this.add.text(300, 280, 'Start Game', { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' }).setStroke('0x0000ff', 4);
        const txt2 = this.add.text(300, 340, 'Options', { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' }).setStroke('0x0000ff', 4);
        const txt3 = this.add.text(300, 400, 'Level Selection (under construction)', { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' }).setStroke('0x0000ff', 4);
        const txt4 = this.add.text(300, 460, 'Credits', { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' }).setStroke('0x0000ff', 4);
        const txt5 = this.add.text(300, 520, 'Exit', { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' }).setStroke('0x0000ff', 4);

// Make interactive text (bad example of DRY!!)
        txt1.setInteractive().on('pointerdown', function() {
            //Let's start another scene with start
            this.scene.scene.start('GameScene');
        });
      
        txt2.setInteractive().on('pointerdown', function() {
            //Let's start another scene with start
            this.scene.scene.start('OptionsScene');
        });
      
        txt4.setInteractive().on('pointerdown', function() {
            //Let's start another scene with start
            this.scene.scene.start('CreditsScene');
        });
      
        txt5.setInteractive().on('pointerdown', function() {
            //destroy game object https://phaser.io/examples/v3/view/game-config/game-destroy-with-multi-scenes
            this.scene.sys.game.destroy(true); // seems to work, https://newdocs.phaser.io/docs/3.55.2/Phaser.Game#destroy
        });     
    }
    update() {}
}