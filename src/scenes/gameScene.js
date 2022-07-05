// global Phaser, BootScene, MenuScene, OptionsScene, CreditsScene, GameScene, IntroScene

import Phaser from "phaser"

export class GameScene extends Phaser.Scene {     
   constructor() {
      super('GameScene');
   }
    preload()
    {

// Music and Sound Effects from Freesound https://freesound.org/ and Incompetech: Royalty-Free Music https://incompetech.com/music/
// https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FTruth_of_the_Legend.ogg?v=1574372196389  // intended opening/intro music for cutscene (https://www.youtube.com/watch?v=oRJa-h9JvoQ) - You MUST contact the artist if you wish to use the music on any kind of project outside of YouTube.
// https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FCool_Rock.ogg?v=1574372248623 // for working scene 
// https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2F18976__bebeto__loop005-alternative.wav?v=1574372376532      
// https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2F24046__bebeto__loop029.wav?v=1574372389873 // stamping music
// https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Firon_man.ogg?v=1574372265355  // iron man
// goldrunner remix for 'pause game' scene (https://www.remix64.com/track/scyphe/goldrunner-maccie-pimp-me-up-remix/) Human Race #4 - following tractor and planter on a gravel road on a rainy night, windshield wipers running, hazards lights flashing, stadium drummer ghost on back of planter
// https://youtu.be/QEdPe1SxitI      
// The Banting and Best Swede Pea Orchestra Intermission https://phaser.io/examples/v3/view/audio/web-audio/play-audio-from-child-scene
      
/*
 Licenses/Royalties required
 The Rose - Bette Midler
https://youtu.be/zxSTzSEiZ2c


Just the two of us (slowed)
White rose graphic
https://youtu.be/7J-f8XPsHxE

Just the two of us
Grover Washington Jr.
Winelight
https://youtu.be/Njwasr1OOuc

Mylene Farmer - Dessine-Moi un Mouton 
https://youtu.be/n7BImFx2N3g

Now we are free
https://youtu.be/ppXYF-CURVw
https://youtu.be/Owg-NaUoHHo

      */
     // Music - want to make musicOn a global variable possibly within a class see GameDev Academy Tutorial (https://phasertutorials.com/creating-a-phaser-3-template-part-3/)
      // Music - Currently stops when scene ends. (If music.stop(); removed, music starts up anytime scene starts and does not stop when scene changed so can have multiple versions running at same time all out of sync)
       this.load.audio('theme', [
        'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Firon_man.ogg?v=1574372265355'
       ]);
       this.load.image('gamescene', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2F566px-Relief_with_Maize_Goddess_(Chicomec%C3%B3atl).jpg?v=1597938902355');//Maize Goddess Chicomecoatl 
       this.load.image('quest', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FScreenshot%202019-06-03%20at%2011.32.58%20AM.png?v=1574375060643');

      // Images that could be used for a timed slide show using alpha and timer loop     
//        this.load.image('greeting', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FChildrenTextBox.png?v=1574374247749'); //Aranix and Midori in a path/aisle of the cornfield
//       this.load.image('greeting', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FExteriorBldg2.png?v=1574373863351'); //building exterior with cars, Midori and Aranix 
//       this.load.image('greeting', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FTwoRanges.png?v=1574373854848'); // two ranges, comment out to see array tilemap 
//       this.load.image('greeting', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FWorkCounter.PNG?v=1574373316758'); //workroom (scale problems)

     }

    create()
    {
        const music = this.sound.add('theme');
        music.play();
  
      // this.gameScene = this.add.image(400, 300, 'gamescene');
       // this.gamescene.setScale(0.3,0.4);
        this.gameScene = this.add.sprite(400, 300, 'gamescene').setScale(1.1, 1.1).setOrigin(0.5, 0.5);
        this.quest = this.add.sprite(400, 400, 'quest').setScale(0.8, 0.8).setOrigin(0.5, 0.5).setAlpha(0.5);
        this.add.text(10, 15, 'Introduction and Early Morning Walk Cutscene Scene', { fontFamily: 'Arial', fontSize: 24, color: '#ffff00' });
 
        const nextScene = this.add.text(200, 500, 'NEXT SCENE >>>', {fontFamily: 'Arial', fontSize: 48, color: '#0000ff'}).setStroke ('0x0000ff',4);
        nextScene.setInteractive().on('pointerdown', function() {
          music.stop();
          console.log('From GameScene to IntroScene');  
          this.scene.scene.start('IntroScene');
        });  
    } // might need a comma if update is active
/*
    update(time, delta)
    {
      controls.update(delta);
    }
*/
}

 // /*