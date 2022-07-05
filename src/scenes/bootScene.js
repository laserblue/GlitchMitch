// global Phaser, BootScene, MenuScene, GameScene, OptionsScene, CreditsScene, IntroScene

import Phaser from "phaser"

export class BootScene extends Phaser.Scene {     
   constructor() {
      super('BootScene'); // 'BootScene' or { key: 'BootScene', active: true } or config
   }
    
    preload()
    {
        var progress = this.add.graphics();

        
        this.load.on('progress', function (value) {

            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, 270, 800 * value, 60);

        });

        this.load.on('complete', function () {

            progress.destroy();

        });    
      
       
      this.load.image('splashScreen', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Flossy-page1-800px-NRCSOH07012_-_Ohio_(717402)(NRCS_Photo_Gallery).tif.jpg?v=1574372053041');
           //  It's essential that the key given here is the exact class name used in the JS file. It's case-sensitive.
        //  See the SceneB.js file and documentation for details.
//    this.load.sceneFile('ExternalScene', '/js/sceneMain.js'); //
    }
  
    create()
    {
                  
        this.splashScreen = this.add.sprite(400, 300, 'splashScreen').setScale(1.0, 1.2).setOrigin(0.5, 0.5);
    // set.Origin(0.5);
      
 
        
      //      var image = this.add.image(400, 300, 'splashScreen').setScale(1);
  
    //  Default text with no style settings
        let text10 = this.add.text(150, 0, 'Phaser 3', { fontFamily: 'Arial', fontSize: 128, color: '#00ff00' }).setAlpha(0.6);
        text10.setStroke('#000000', 6);

    //  Pass in a basic style object with the constructor
        this.add.text(200, 210, 'Splash Screen', { fontFamily: 'Arial', fontSize: 64, color: '#0000ff' });

    //  Or chain calls like this:
        this.add.text(30, 380, 'Phaser').setFontFamily('Arial').setFontSize(64).setColor('#00ff00').setBackgroundColor('#ffff00').setPadding(16).setAlpha(0.5);
      
        this.add.text(100, 560, 'Click or tap on the words directly above to see a new scene',  {fontFamily: 'Arial', fontSize: 24, color: '#00ffff' }).setStroke('#000000', 4);
      
        let nextScene = this.add.text(200, 500, 'NEXT SCENE >>>', {fontFamily: 'Arial', fontSize: 48, color: '#0000ff'}).setStroke ('0x0000ff',4);
        nextScene.setInteractive().on('pointerdown', function() {
          console.log('From BootScene to MenuScene');  
          this.scene.scene.start('MenuScene');
        });      
      }
}
// http://www.pearltrees.com/paulchanceygowan/mitchy-s-maize/id18236243