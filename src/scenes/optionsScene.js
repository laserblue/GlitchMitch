// global Phaser, BootScene, MenuScene, GameScene, OptionsScene, CreditsScene, IntroScene

import Phaser from "phaser"

export class OptionsScene extends Phaser.Scene {     
   constructor() {
      super('OptionsScene');
   }

    preload()
    {
        this.load.image('vavilov', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2F800px-Maize_diversity_in_Vavilovs_office_(3421259242).jpg?v=1574372062843');
            
    }

    create() {
//        this.optionsScene = this.add.image(400, 300, 'optionsscene');
        this.vavilov = this.add.sprite(400, 300, 'vavilov').setOrigin(0.5, 0.5);   
      
        this.add.text(310, 10, 'Options', { fontFamily: 'Arial', fontSize: 72, color: '#ffff00' });

        this.add.text(300, 100, 'toggle music', { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' }).setStroke('0x0000ff', 6).setAlpha(0.3);
        this.add.text(300, 190, 'toggle sound', { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' }).setStroke('0x0000ff', 6).setAlpha(0.3);
          
      /* inoperational toggling - working on it
      function(fn)
    {
        first.once('stop', function (sound)
        {
            text.setText('Stopped');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }, this);
 
        first.stop();
    },
 */
 /* // Currently music stops when scene changes.
 // work is being done to learn how to add a class with global state variables based on a GameDev Academy Tutorial (https://phasertutorials.com/creating-a-phaser-3-template-part-3/)
 var music = this.sound.add('key');
music.on('stop', listener);
music.play();
music.stop();
      */
      /*
       this.sound.on('stopall', listener).
      */
      
                      
        var txt30 = this.add.text(300, 440, 'Main Menu', { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' }).setStroke('0x0000ff', 6);
        txt30.setInteractive().on('pointerdown', function () { 
            this.scene.start('MenuScene');
        }, this);// ??? differs from this.scene.scene.start('menuScene'); });
      
/*      var txt40 = this.add.text(300, 500, 'Next >>', { fontFamily: 'Arial', fontSize: 64, color: '#ffff00' }).setStroke('0x0000ff', 8);
        txt40.setInteractive().on('pointerdown', function () { 
            this.scene.start('sceneMain');
        }, this);// ??? differs from this.scene.scene.start('menuScene'); });
*/      
/*      Click on image to see new scene and experimenting with escaping new line
        this.add.text(100, 200, 'toggle music\ntoggle sound\nreturn to menu', { fontFamily: 'Arial', fontSize: 64, color: '#ffffff' });
        this.input.once('pointerdown', function () {
            console.log('From Options Scene to GameScene');
            this.scene.start('sceneMain');
        }, this);// note the addition of 'this'
*/
    }
    update() {}
}
