import Phaser from 'phaser';

var SceneMain = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function SceneMain ()
    {
       Phaser.Scene.call(this, { key: 'sceneMain', active: false });
    },
  
    preload()
    {
       this.load.image('greeting', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FChildrenTextBox.png?v=1574374247749');
    },
    
    create() 
    {
     this.greeting = this.add.sprite(400, 300, 'greeting').setOrigin(0.5, 0.5);
     this.input.once('pointerdown', function () {      // input.once is just used for demo purposes
            console.log('From SceneMain to Gamescene');
            this.scene.start('gameScene');       
        }, this);
    }
});


/* ES6 ??
export default class SceneMain extends Phaser.Scene {
  constructor()
  {                                    
    super('SceneMain');
  }
  
*/