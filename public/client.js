// import SwipePlugin from 'phaser3-swipe-plugin'
/* global Phaser, BootScene, MenuScene, OptionsScene, SceneMain, GameScene, FSMScene, GameOverScene, CreditsScene */

// Current Task: add a second layer to the tile map for row stakes
// Task: Load a CSV map instead of an image in the Game scene
// getting closer - can load a map based on an array (problem was that a keyword was changed so official examples and pro examples using old keyword didn't work)


// Backburner Task: Get an external scene file loading using filenames in index.html head (note use of //global scenename.js for linter lines at top of files in calm-potassium)
// e.g at top of game.js which defines config,  /* global Phaser, splashScene, loaderScene, LayScene, hatchScene */
//
// How to kill the game after credits roll once or twice
//
//Done: task: get vertical scroller working in Credits scene (uses bitmap text)* this bitmap text may be copyrighted and arrangements may need to be made to use it in production version or replaced. This is educational use at the moment.
// still minor formatting problems with vertical scroller to work out for production credits such as centering, font size, and line length.

// The following code might be for ES6 and might not work without Babel transpiling. Babel has not been installed for this project and according to the package.json, node v. 8.x is being used. Upgrade to node 10.x
// import {SceneMain} from './js/SceneMain.js';
// let sceneMain = new SceneMain();
// this.game.scene.add('SceneMain', sceneMain);


/* Problem

   I have 8 scenes defined in client.js that run ok.
   BootScene, MenuScene, OptionsScene, SceneMain, GameScene, FSMScene, GameOverScene, CreditsScene
   I want to eventually run all of them as separate external files from a scenes folder
   I am trying to get the external file js/SceneMain.js to replace SceneMain in client.js
   I don't have Babel installed for transpiling es6 to es5 
   
   Fixing this with ES5 involves:
       commenting out the SceneMain scene defined in this file (client.js) 
       
       putting <script src="js/SceneMain.js" </script> in the head of index.html // is the PATH correct? e.g. "./js/SceneMain.js"
       
       making sure the Express routing is correct in server.js 
       
   
   
https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/  
https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scenemanager/  
https://phaser.io/phaser3/devlog/119
https://phaser.io/phaser3/devlog/121
http://labs.phaser.io/index.html?dir=scenes/&q=
https://medium.com/@jerra.haynes/a-real-persons-guide-to-phaser-3-or-how-i-learned-to-stop-worrying-and-love-the-gun-part-1-9cc6361f377c
*/
// NO ES6 so need to put file names in header of index.html
//import {TitleScene} from './js/TitleScene'; // result is white screen
//import TitleScene from './js/TitleScene'; // result is white screen
//var titleScene = new TitleScene();// result is white screen
//let titleScene = new TitleScene();// result is white screen
//this.game.scene.add('TitleScene', titleScene);// titleScene not defined




// Mark Kelly's fsm code has been put into its own scene (FSMScene) but the StateMachine class and State class are defined here at the start of the code
// The StateMachine class is for the sprite animations not game states. Game states are done using scenes
class StateMachine {
  constructor(initialState, possibleStates, stateArgs=[]) {
    this.initialState = initialState;
    this.possibleStates = possibleStates;
    this.stateArgs = stateArgs;
    this.state = null;

    // State instances get access to the state machine via this.stateMachine.
    for (const state of Object.values(this.possibleStates)) {
      state.stateMachine = this;
    }
  }

  step() {
    // On the first step, the state is null and we need to initialize the first state.
    if (this.state === null) {
      this.state = this.initialState;
      this.possibleStates[this.state].enter(...this.stateArgs);
    }

    // Run the current state's execute
    this.possibleStates[this.state].execute(...this.stateArgs);
  }

  transition(newState, ...enterArgs) {
    this.state = newState;
    this.possibleStates[this.state].enter(...this.stateArgs, ...enterArgs);
  }
}
// */
// /*
class State {
  enter() {

  }

  execute() {

  }
}
// */


// Each scene class is defined in this one file but I want to eventually make each scene a separate external file in the js folder
// The scenes are BootScene, MenuScene, OptionsScene, GameScene, FSMScene, GameOverScene, CreditsScene
// FSMScene is an example of a scene that would be called by GameScene in the finished product

//class BootScene extends Phaser.Scene {
var BootScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function BootScene ()
    {
      Phaser.Scene.call(this, { key: 'bootScene', active: false });
    },
    
    preload ()
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
    },
  
    create ()
    {
                  
        this.splashScreen = this.add.sprite(400, 300, 'splashScreen').setScale(1.0, 1.2).setOrigin(0.5, 0.5);
    // set.Origin(0.5);
      
 
        
      //      var image = this.add.image(400, 300, 'splashScreen').setScale(1);
  
    //  Default text with no style settings
        var text10 = this.add.text(150, 0, 'Phaser 3', { fontFamily: 'Arial', fontSize: 128, color: '#00ff00' }).setAlpha(0.6);
        text10.setStroke('#000000', 6);

    //  Pass in a basic style object with the constructor
        this.add.text(200, 210, 'Splash Screen', { fontFamily: 'Arial', fontSize: 64, color: '#0000ff' });

    //  Or chain calls like this:
        this.add.text(30, 380, 'Phaser').setFontFamily('Arial').setFontSize(64).setColor('#00ff00').setBackgroundColor('#ffff00').setPadding(16).setAlpha(0.5);
      
        this.add.text(100, 560, 'Click or tap on the words directly above to see a new scene',  {fontFamily: 'Arial', fontSize: 24, color: '#00ffff' }).setStroke('#000000', 4);
      
        var nextScene = this.add.text(200, 500, 'NEXT SCENE >>>', {fontFamily: 'Arial', fontSize: 48, color: '#0000ff'}).setStroke ('0x0000ff',4);
        nextScene.setInteractive().on('pointerdown', function() {
          console.log('From BootScene to MenuScene');  
          this.scene.scene.start('menuScene');
        });      
      }
});

var MenuScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function MenuScene () // function MenuScene (config)
    {
      Phaser.Scene.call(this, { key: 'menuScene', active: false });
    },

    preload: function ()
    {
        this.load.image('fieldpic', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2F800px-Corn_Field.JPG?v=1574372099635');
   //     this.load.sceneFile('sceneMain', 'js/SceneMain.js');
    }, // this comma seems to be needed for the code to work but does not appear in the Phaser 3 examples

  
    create: function () 
    {
    //    this.fieldpic = this.add.image(400, 300, 'fieldpic');
        this.fieldpic = this.add.sprite(400, 300, 'fieldpic').setOrigin(0.5, 0.5)
        this.add.text(150, 0, 'Mitchy\'s Maize', { fontFamily: 'Arial', fontSize: 84, color: '#ffff00' }).setStroke('0x0000ff', 4);
        var txt1 = this.add.text(300, 270, 'Start Game', { fontFamily: 'Arial', fontSize: 64, color: '#ffffff' }).setStroke('0x0000ff', 4);
        var txt2 = this.add.text(300, 370, 'Options', { fontFamily: 'Arial', fontSize: 64, color: '#ffffff' }).setStroke('0x0000ff', 4);
        var txt3 = this.add.text(300, 470, 'Credits', { fontFamily: 'Arial', fontSize: 64, color: '#ffffff' }).setStroke('0x0000ff', 4);

// Make interactive text (bad example of DRY!!)
        txt1.setInteractive().on('pointerdown', function() {
            //Let's start another scene with start
            this.scene.scene.start('gameScene');
        });
      
        txt2.setInteractive().on('pointerdown', function() {
            //Let's start another scene with start
            this.scene.scene.start('optionsScene');
        });
      
        txt3.setInteractive().on('pointerdown', function() {
            //Let's start another scene with start
            this.scene.scene.start('creditsScene');
        });     
    }
});


// I want to load this scene class and eventually all the others as an external file  
var OptionsScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function OptionsScene ()
    {
      Phaser.Scene.call(this, { key: 'optionsScene', active: false });
    },
    preload ()
    {
        this.load.image('vavilov', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2F800px-Maize_diversity_in_Vavilovs_office_(3421259242).jpg?v=1574372062843');
            
    },

    create ()
    {
//        this.optionsScene = this.add.image(400, 300, 'optionsscene');
        this.optionsScene = this.add.sprite(400, 300, 'vavilov').setOrigin(0.5, 0.5);   
      
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
            this.scene.start('menuScene');
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
});

var SceneMain = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function SceneMain ()
    {
      Phaser.Scene.call(this, { key: 'sceneMain', active: false });
    },
    preload()
    {
//      this.load.tilemapCSV("map", "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Ffieldtilled.csv?v=1583797600994"); // tilled field 
//      this.load.image("tiles", "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Fplowed_soil.png?v=1574373407043"); // plowed soil       

      // load csv map (not working but I had it working once)     
       this.load.image("tiles", "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FFieldSoil.png?v=1574372043813"); // modified tileset
       this.load.image("flags", "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Ftags.png?v=1574702648218");
       this.load.image("redTag", "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FRedTag.png?v=1574373422414");
       this.load.image("rowStake", "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FModified.png?v=1574373876704");
      
      //       this.scene.load.tilemapCSV("map", "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Ffield.csv?v=1583797586940");        
//       this.load.tilemapCSV("map", "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Ffield.csv?v=1583797586940");  // CSV                      
       
       this.load.spritesheet('tractorWest', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FTSTWest2.png?v=1574373448745', {
         frameWidth: 100,
         frameHeight: 75,
       });
       this.load.spritesheet('tractor', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FTSTEast.png?v=1574373457971', {
         frameWidth: 100,
         frameHeight: 75,
       });
              
      this.load.image('greeting', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FThreeStakes.png?v=1574373846656'); // 3 stakes path marking

 },   // this comma seems to be needed for the code to work but does not appear in the Phaser 3 examples

    create()
    { 
 //     this.add.text(10, 5, 'Testing... Testing...', { fontFamily: 'Arial', fontSize: 12, color: '#ffff00' }); // blocked by tile map
        
      // Load a map from a 2D array of the Field Soil tile indices (7 rows x 6 columns)
      var level = [
        [ 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
        [ 38, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 23, 23, 23, 23, 1, 1, 1, 2, 38],
        [ 38, 3, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 5, 38],
        [ 38, 3, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 5, 38],
        [ 38, 3, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 5, 38],
        [ 38, 3, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 5, 38],
        [ 38, 21, 26, 26, 18, 18, 18, 18, 26, 26, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 15, 12, 13, 22, 38],
        [ 38, 21, 20, 20, 17, 17, 17, 17, 20, 0, 1, 2, 3, 4, 5, 20, 20, 20, 9, 10, 11, 14, 16, 22, 38],
        [ 38, 21, 20, 20, 17, 17, 17, 17, 20, 6, 7, 8, 9, 10, 11, 20, 20, 20, 20, 20, 20, 20, 20, 22, 38],
        [ 38, 21, 20, 20, 17, 17, 17, 17, 20, 12, 13, 14, 15, 16, 17, 20, 15, 12, 13, 20, 20, 20, 20, 22, 38],
        [ 38, 21, 20, 20, 17, 17, 17, 17, 20, 18, 19, 20, 21, 22, 23, 20, 16, 11, 14, 20, 20, 20, 20, 22, 38],
        [ 38, 21, 41, 25, 19, 19, 19, 19, 25, 24, 25, 26, 27, 28, 29, 25, 25, 25, 25, 20, 20, 20, 41, 22, 38],
        [ 38, 21, 26, 26, 18, 18, 18, 18, 26, 30, 31, 32, 33, 34, 35, 26, 26, 26, 26, 20, 20, 20, 20, 22, 38],
        [ 38, 21, 20, 20, 17, 17, 17, 17, 20, 36, 37, 38, 39, 40, 41, 20, 20, 20, 20, 20, 20, 20, 20, 22, 38],
        [ 38, 21, 20, 20, 17, 17, 17, 17, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 22, 38],
        [ 38, 21, 41, 25, 19, 19, 19, 19, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 41, 22, 38],
        [ 38, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 24, 24, 24, 24, 24, 24, 24, 24, 8, 38],       
        [ 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38]
     ];

  // When loading from an array, make sure to specify the tileWidth and tileHeight
       var map = this.make.tilemap({ data: level, tileWidth: 32, tileHeight: 32 });
       var tiles = map.addTilesetImage("tiles");

      //  //  To use multiple tilesets in a single layer, pass them in an array like this:
//    map.createLayer('Tile Layer 1', [ groundTiles, itemTiles, platformTiles ]);
      
      /* 
      // include additional tiles or make new tileset
      var flags = mao.add.TilesetImage("flags");
      var redTag = map.add.TilesetImage("redTag");
      var rowStake = map.add.TilesetImage("rowStake");
 */     

       var layer = map.createStaticLayer(0, tiles, 0, 0);

      //       layer.setScale(2);
      // layer1.setAlpha(0.5);
// Map size
//    layer.width = 400;
      

       this.tractor = this.physics.add.sprite(650, 370, 'tractor', 0).setCollideWorldBounds(true);
       this.tractorWest = this.physics.add.sprite(220, 370, 'tractorWest', 0).setCollideWorldBounds(true);
      
//       var layer2 = map.createBlankLayer(1, tiles, 0, 0); // blocks out text
//       var layer2 = map.createBlankLayer('layer2', tiles); // blocks out text below
//      layer2.fill(41, 41, 41, 41, 41);
//      layer2.randomize(0, 0, 25, 13, [ 44, 45, 46, 47, 48 ]);
 
  // in update
 //   map.putTileAt(15, pointerTileX, pointerTileY); 
//       map.putTilesAt([ 104, 105, 106, 107 ], pointerTileX, pointerTileY);
 
      // You can also place a 2D array of tiles at a location
 //               map.putTilesAt([
 //                   [ 49, 50 ],
 //                   [ 51, 52 ]
 //               ], pointerTileX, pointerTileY);     
 
 
//      var worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);
//        var tile = map.getTileAtWorldXY(worldPoint.x, worldPoint.y);      
      //      var tile = map.getTileAtWorldXY(worldPoint.x, worldPoint.y);
      // This will replace all instances of the selected tile with a stake (tile id = 41).
//        map.replaceByIndex(tile.index, 41);    
 // You can also replace within a specific region (tileX, tileY, width, height):
        // map.replaceByIndex(tile.index, 41, 5, 5, 15, 15); 
      
      
      
//       var layer2 = map.createStaticLayer("layer2", tiles, 0, 0);
 
      
      
      
      /*
      //   Code to show csv map (not working)
//        console.log(this.cache.tilemap.entries)
//        var map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });
        var map = this.scene.add.tilemap('map');
//        this.map = this.scene.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });
        var tileset = map.addTilesetImage('tiles');
        var layer = map.createStaticLayer("layer1", tileset, 0, 0); // layer index, tileset, x, y
*/
//        layer.skipCull = true;

 //       this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

 //       this.tiles = this.add.image(400, 300, 'tiles'); // NOTE: behind greeting screen image???
//        this.greeting = this.add.sprite(400, 300, 'greeting').setScale(0.98, 0.94).setOrigin(0.5, 0.5); // comment out to see array tilemap in upper left corner and tileset image at center
 
      ///*    // implement text wrapping for 2 and 6, if possible
        this.add.text(90, 15, 'External Scene (Scene Main)', { fontFamily: 'Arial', fontSize: 48, color: '#ffff00' });
        this.add.text(90, 70, 'Goal: Create tile maps', { fontFamily: 'Arial', fontSize: 32, color: '#ffffff' });
        this.add.text(120, 110, '1. Empty field', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 130, '2. Marked field with stakes and lines plus animated marking with tractor and marking', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(140, 150, 'implement sprite', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 170, '3. Unplanted marked ranges plus tractor and 4-row maize planter animated sprite', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 190, '4. Planted and growing ranges', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 210, '5. Research station building exterior (initially, no parked employee cars)', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 230, '6. Large world (+120 rows, +18 ranges plus gravel roads, laneway, main site', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(140, 250, '16.1 hectares/40 acres)', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 270, '7. Intro Gravel Road Walking early morning sunsight cutscene', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
      
        var nextScene = this.add.text(200, 500, 'NEXT SCENE >>>', {fontFamily: 'Arial', fontSize: 48, color: '#0000ff'}).setStroke ('0x0000ff',4);
        nextScene.setInteractive().on('pointerdown', function() {
          console.log('From SceneMain to FSMScene');  
            this.scene.scene.start('fsmScene');
        });    // */         
    }
});

//class GameScene extends Phaser.Scene {
var GameScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GameScene()
    {
      Phaser.Scene.call(this, { key: 'gameScene', active: false });
    },
    preload()
    {

// https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FTruth_of_the_Legend.ogg?v=1574372196389  // intended opening/intro music for cutscene
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

// Images that could be used for a timed slide show using alpha and timer loop     
//        this.load.image('greeting', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FChildrenTextBox.png?v=1574374247749'); //Aranix and Midori in a path/aisle of the cornfield
//       this.load.image('greeting', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FExteriorBldg2.png?v=1574373863351'); //building exterior with cars, Midori and Aranix 
//       this.load.image('greeting', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FTwoRanges.png?v=1574373854848'); // two ranges, comment out to see array tilemap 
//       this.load.image('greeting', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FWorkCounter.PNG?v=1574373316758'); //workroom (scale problems)

     },

    create()
    {
        var music = this.sound.add('theme');
        music.play();
  
      // this.gameScene = this.add.image(400, 300, 'gamescene');
       // this.gamescene.setScale(0.3,0.4);
        this.gameScene = this.add.sprite(400, 300, 'gamescene').setScale(1.1, 1.1).setOrigin(0.5, 0.5);
      
        this.add.text(10, 15, 'Introduction Scene', { fontFamily: 'Arial', fontSize: 48, color: '#ffff00' });
 
        var nextScene = this.add.text(200, 500, 'NEXT SCENE >>>', {fontFamily: 'Arial', fontSize: 48, color: '#0000ff'}).setStroke ('0x0000ff',4);
        nextScene.setInteractive().on('pointerdown', function() {
          music.stop();
          console.log('From GameScene to SceneMain');  
          this.scene.scene.start('sceneMain');
        });  
    } // might need a comma if update is active
/*
    update(time, delta)
    {
      controls.update(delta);
    }
*/
});

 // /*
var FSMScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function FSMScene ()
    {
       Phaser.Scene.call(this, { key: 'fsmScene', active: false });
    },

 // */
// /*
     init() // Is this webfont actually loading ?????
     {
         //  Inject our CSS
         var element = document.createElement('style');

         document.head.appendChild(element);

         var sheet = element.sheet;

         var styles = '@font-face { font-family: "troika"; src: url("assets/fonts/ttf/troika.otf") format("opentype"); }\n';

         sheet.insertRule(styles, 0);

         styles = '@font-face { font-family: "Caroni"; src: url("assets/fonts/ttf/caroni.otf") format("opentype"); }';

         sheet.insertRule(styles, 0);
      
     },     
   // */
   
    preload() 
    {
      // I want to figure out how to first show nameplates above or below sprites using a container and then change to syncing text and sprites
      // I would prefer not to use webfonts so need to also learn how to use bitmap, retro or css text
      // load webfont for nameplate text -- find other ways to get/use text like bitmap text, retro, css etc. 
//          this.load.image("bg", "https://cdn.glitch.me/dad6f70b-d7f8-4b6b-812a-427943582a20/Overworld.png?v=1640024874959"); // shack image overworld 

      /*         this.load.tilemapCSV('map', "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Ffield.csv?v=1583797586940"); // field.csv 
         this.load.image('tiles', "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Fplowed_soil.png?v=1574373407043"); // plowed soil       
*/
            
          this.load.spritesheet('author', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Frpg_sprite_walk.png?v=1574371146332', {
            frameWidth: 24,
            frameHeight: 32,
          });
          this.load.spritesheet('hero', 'https://cdn.glitch.com/59aa1c5f-c16d-41a1-bfd2-09072e84a538%2Fhero.png?1551136698770', {
            frameWidth: 32,
            frameHeight: 32
          });
//         this.load.image('bg', 'https://cdn.glitch.com/59aa1c5f-c16d-41a1-bfd2-09072e84a538%2Fbg.png?1551136995353');
         this.load.image('bg', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FTwoRanges.png?v=1574373854848'); // two ranges, comment out to see array tilemap   
       
      // add ball from Phaser 3 example Container/Sprite with text
      // https://github.com/photonstorm/phaser3-examples/blob/master/public/assets/demoscene/ball.png
         this.load.image('ball', 'https://cdn.glitch.com/0b1bad74-37f5-487d-b0f1-7d6bac92f07f%2Fball.png?v=1575235181076'); // from github Phaser 3 public/assets folder

      // Web Font Loader script (using Plugin???)
         this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    },
    
    
  
  
    create()
    {

      // Custom Webfont - Phaser 3 example: http://labs.phaser.io/edit.html?src=src/game%20objects%5Ctext%5Cstatic%5Ccustom%20webfont.js  
          var add = this.add;
          var input = this.input;
          var test1;
          var text2;
          var text3;
          var text4;
 //     var test2;
//      this.impact.world.setBounds();
/*   
      //   Code to show csv map (not working)
//        console.log(this.cache.tilemap.entries)
//        var map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });
          var tileset = map.addTilesetImage('tiles');
          var layer = map.createStaticLayer(0, tileset, 0, 0); // layer index, tileset, x, y
*/      
         
          this.keys = this.input.keyboard.createCursorKeys();
        
 //       this.physics.world.bounds.width = map.widthInPixels;
  //      this.physics.world.bounds.height = map.heightInPixels;
 //       this.player.setCollideWorldBounds(true);
      
      // Static background (replace with a csv map with an interactive NEXT button and a red kill scene square for sprites to collide with to call gameover scene)
          this.add.image(0, 0, 'bg').setOrigin(0); 
/*
     // Load a map from a 2D array of the plowed soil tile indices
          var bglevel = [
            [ 6, 7, 7, 7, 7, 7, 7, 7, 8],
            [ 9, 15, 15, 15, 15, 15, 15, 15, 11],
            [ 9, 15, 15, 15, 15, 15, 15, 15, 11],
            [ 9, 15, 15, 15, 15, 15, 15, 15, 11],
            [ 9, 15, 15, 15, 15, 15, 15, 15, 11],
            [ 12, 13, 13, 13, 13, 13, 13, 13, 14]
          ];

  // When loading from an array, make sure to specify the tileWidth and tileHeight
          var bgmap = this.make.tilemap({ data: bglevel, tileWidth: 16, tileHeight: 16 });
          var bgtiles = bgmap.addTilesetImage("bgtiles");
          var bglayer = bgmap.createStaticLayer("bglayer", bgtiles, 0, 0);
  */    
      // create a container for ball with nameplate to be applied later to author sprites      
          var container0 = this.add.container(150, 100);

          var ball = this.add.image(0, 0, 'ball');
//      ball.alpha = 0.8;
          var text = this.add.text(0, 0, 'Use Arrow keys to move').setFontFamily('Comic Sans MS').setColor('#ffff00').setFontSize(20);
          text.setOrigin(0.5, 0.5);
//      text.alpha = 0.5;
          container0.add(ball);
          container0.add(text);
          container0.setScale(1);
 
// tween container0 with ball horizontallyfrom start position to x + 500 and yoyo
          this.tweens.add({
            targets: container0,
            x: container0.x + 500,
            ease: 'Power1',
            duration: 10000,
            delay: 500,
            yoyo: true,
            repeat: -1
          });
      

    
     // Animation definition for Shull sprite in container1 - works in this program location and sequence, but try to move to anim states list asap
          this.anims.create({
            key: 'Shulldown',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', {start: 0, end: 3}),
          });  
  

      // The hero character (Shull - red shirt)
          var container1 = this.add.container(125, 160);
//      this.hero = this.physics.add.sprite(200, 150, 'hero', 0);
          var hero = this.add.sprite(0, 0, 'hero').play('Shulldown');
          var text = this.add.text(0, 0, 'Shull');
          text.font = "Arial";
          text.setColor('#0000ff');
          text.setFontSize(16); 
          text.setOrigin(0.5, -0.7); // over head name plate (0.5), 1.5) (under foot name plate (0.5, -0.4) 
          container1.add(hero);
          container1.add(text);
          container1.setScale(1);   
     
 // /*     
   // moves container 1 but does not change animation inside
          container1.setSize(32, 64);
          this.physics.world.enable(container1);
          container1.body.setVelocity(0, 50).setBounce(1, 1).setCollideWorldBounds(true);
 // */
 // /* 
   // animation of McClintock sprite in container2 
          this.anims.create({
            key: 'McClintockdown',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('author', {start: 0, end: 7})
//          flipX: true // This probably won't work but need to figure out how to run conditions on nested sprite in container
          }); 
     
         // there is a large margin on the left. Find out what the cause is ?!?!?!
          test1 = this.add.text(100, 10, 'Phaser 3.21.0', { fontSize: 24, color: '#ff0000' }).setOrigin(0.5);
          text2 = this.add.text(180, 40, 'Research Station Building Interior', { fontSize: 16, color: '#ffff00' }).setOrigin(0.5);         
          text3 = this.add.text(540, 200, '<-- You can move this sprite with arrow keys', { fontSize: 18, color: '#ff0000' }).setOrigin(0.5);
          this.make.text({
              x: 400,
              y: 300,
              text: 'Goal: Load a csv tile map',
 //             text: 'DONE - Goal: load finite state machine starter code as a named game scene with text-labeled containers',(not fully encapsulated yet as the classes are defined outside of the FSM Scene)
              origin: { x: 0.5, y: 0.5 },
              style: {
                  font: 'bold 25px Arial',
                  fill: 'white',
                  wordWrap: { width: 800 }
              }
          });
            
          this.make.text({
              x: 400,
              y: 350,
              text: 'Goal: Add an object to touch to change scene to Game Over scene\nGoal: add code to change scene when sprite enters door of hut\nGoal: Figure out how to control sprites in labeled containers\nGoal: Could zones be used with this image to block walking into tree stumps and cliffs or is using a CSV map better since it is a goal anyway?',
              origin: { x: 0.5, y: 0.5 },
              style: {
                  font: 'bold 12px Arial',
                  fill: 'white',
                  wordWrap: { width: 800 }
              }
          });
      
          this.make.text({
              x: 400,
              y: 460,
              text: 'Sprite animations based on very slight modifications to Mark Kelly\'s phaser-fsm-example project on Glitch (https://www.mkelly.me/blog/phaser-finite-state-machine/)',
  //     ',
              origin: { x: 0.5, y: 0.5 },
              style: {
                  font: 'bold 25px Arial',
                  fill: 'white',
                  wordWrap: { width: 800 }
              }
          });
      
//      text4 = this.add.text(200, 500, 'with text labeled containers with sprite animations based on slight modifications to Mark Kelly\'s phaser-fsm-example project on Glitch (https://www.mkelly.me/blog/phaser-finite-state-machine/)', { fontSize: 16, color: '#ff0000' }).setOrigin(0.5);
  //      test2 = this.add.text(250, 220, 'Phaser 3.21.0', { fontSize: 12, color: '#000000' }).setOrigin(0.5);
      // or chain calls 
      // this.add.text(100, 400, 'Phaser').setFontFamily('Arial').setFontSize(64).setColor('#ffff00');
      
          var nextScene = this.add.text(200, 520, 'NEXT SCENE >>>', {fontFamily: 'Arial', fontSize: 48, color: '#0000ff'}).setStroke ('0x0000ff',4);
          nextScene.setInteractive().on('pointerdown', function () {
            this.scene.scene.start('gameOverScene');
           });         
      // Create a nameplate for a sprite
          var container2 = this.add.container(350, 200);
          var genericBreederSprite = this.add.sprite(0, 0, 'author').play('McClintockdown');
          var text = this.add.text(0, -15, 'McClintock');
          text.font = "Arial";
          text.setColor('#000000');
          text.setFontSize(16);
          text.setOrigin(0.5, -1.7);
          container2.add(genericBreederSprite);
          container2.add(text);
          container2.setScale(1.0); 
 
      
      // moves container 2 but does not change animation inside
          container2.setSize(32, 64);
          this.physics.world.enable(container2);
          container2.body.setVelocity(0, 20).setBounce(1, 1).setCollideWorldBounds(true);
  /*    
          this.input.once('pointerdown', function () {
              console.log('From fsmScene to GameOverScene');
              this.scene.start('gameOverScene');
          }, this);
  */
 /////////////////////////////////////////////////////////////////////////////////////////     
// This code was used in the-great-conversation-bots project which is why reference is made to Melville and author. Trying to change author to player has been problematic and involved changing the code in many lines but it didn't work.      
      // Player clone of 'author' sprite to the left of McClintock container (on McClintock's right). 
          this.author = this.physics.add.sprite(287, 200, 'author', 0).setCollideWorldBounds(true); // add collision boundaries on background image for trees,hedges, cliffs, etc.
      // control this sprite as player if this.hero and no other this.hero assignment
// this.hero makes 'unnamed-author-clone' at (300,200) the player
// this.author removes player control from unnamed-author-clone
      
  //      this.hero.direction = 'left'; //
//      this.author.direction = 'up'; // changes image of player sprite 'author' to hero sprite

      // no name NPC clone with author image (on McClintock's left) (east of McClintock (NESW clockwise) or on screen right side)
          this.hero = this.physics.add.sprite(390, 270, 'author', 0); // 
// player control is granted to whichever sprite is this.hero with no other sprite as this.hero.
// this.hero transfers player control to no name sprite 
  // animation for 'dash' and sword-swings uses 'hero' spritesheet since I don't have equivalents for author/RPG-walk-sprite
      
      
//      this.impact.add.image(100, 100, 'ball').setActiveCollision().setVelocity(300, 200).setBounce(1);    
//      this.author.setBounce(1,1)
//      this.author.setCollideWorldBounds(true);
      
 //   sets direction of player sprite (connected to arrow keys)
          this.author.direction = 'down' // sets player (controlled with arrow keys) sprite with image (author) to 'down' image
 // if change above to this.hero.direction = 'down' player idle image is hero image 'down'
    
  // I need to fully understand the FSM code
//     this.hero = this.container2.body; // I want to make container 2 the player.
//    },
    
// });     
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // The state machine managing the player sprite with arrow key control
        this.stateMachine = new StateMachine('idle', {
          idle: new IdleState(),
          move: new MoveState(),
          swing: new SwingState(), 
          dash: new DashState(),
        }, [this, this.author]);// changing to }, [this, this.container2]); results in black screen
      // changing to this.hero gives player control to sprite to Melville's left (right side of screen)
      // this, this.container2.body might work - screen ok but no player control either no name author sprite
      
// the FSM was set up to use 'hero' as variable name
// }, [this, this.hero]) // gives player control to unnamed cloned sprite in upper left.
//  }, [this, this.author]); // gives player control to unnamed author sprite to left of McClintock named sprite
// Challenge 1 : transfer player control to container2 that contains McClintock named sprite
// Challenge 2: sync frames of sprite in container to input. e.g. if 'left' key down, move container left AND run left move frames in container
      
      
//  I changed player image from 'hero' to 'author' image/sprite (this is causing a lot of confusion because named object? same as key of 'hero' image)
//       
 // changing line above to }, [this, this.author]); transfer player controls to unnamed author clone sprite and changes former player sprite image to hero image     
 // need to give container2 a body ?? and physics ??? 
// only 1 sprite will be a player sprite - the author-agent sprites will be NPCs
      
      // Animation definitions
        this.anims.create({
          key: 'walk-down',
          frameRate: 8,
          repeat: -1,
          frames: this.anims.generateFrameNumbers('author', {start: 0, end: 7}),
        });
        this.anims.create({
          key: 'walk-right',
          frameRate: 8,
          repeat: -1,
          frames: this.anims.generateFrameNumbers('author', {start: 24, end: 31}),
        });
        this.anims.create({
          key: 'walk-up',
          frameRate: 8,
          repeat: -1,
          frames: this.anims.generateFrameNumbers('author', {start: 8, end: 15}),
        });
        this.anims.create({
          key: 'walk-left',
          frameRate: 8,
          repeat: -1,
          frames: this.anims.generateFrameNumbers('author', {start: 16, end: 23}),
        });
      
      // NOTE: Sword animations for red shirted 'hero' spritesheet do not repeat
        this.anims.create({
          key: 'swing-down',
          frameRate: 8,
          repeat: 0,
          frames: this.anims.generateFrameNumbers('hero', {start: 16, end: 19}),
        });
        this.anims.create({
          key: 'swing-up',
          frameRate: 8,
          repeat: 0,
          frames: this.anims.generateFrameNumbers('hero', {start: 20, end: 23}),
        });
        this.anims.create({
          key: 'swing-right',
          frameRate: 8,
          repeat: 0,
          frames: this.anims.generateFrameNumbers('hero', {start: 24, end: 27}),
        });
        this.anims.create({
          key: 'swing-left',
          frameRate: 8,
          repeat: 0,
          frames: this.anims.generateFrameNumbers('hero', {start: 28, end: 31}),
        });
    },   
    update() 
    {
        this.stateMachine.step();
//      this.physics.world.wrap(this.author);
    }

});
// should these states be placed below config, within the FSM scene, or super or sub classed ????? 
class IdleState extends State {
  enter(scene, author) {
    author.setVelocity(0);
    author.anims.play(`walk-${author.direction}`);
    author.anims.stop();
  }
  
  execute(scene, author) {
    const {left, right, up, down, space, shift} = scene.keys;
    
    // Transition to swing if pressing space (eventually change this to a numbering machine stamping animation)
    if (space.isDown) {
      this.stateMachine.transition('swing');
      return;
    }
    
    // Transition to dash if pressing shift (eventually delete as not to be used for this game)
    if (shift.isDown) {
      this.stateMachine.transition('dash');
      return;
    }
    
    // Transition to move if pressing a movement key
    if (left.isDown || right.isDown || up.isDown || down.isDown) {
      this.stateMachine.transition('move');
      return;
    }
  }
}

class MoveState extends State {
  execute(scene, author) {   //changed from author to container 2
    const {left, right, up, down, space, shift} = scene.keys;
    
    // Transition to swing if pressing space
    if (space.isDown) {
      this.stateMachine.transition('swing');
      return;
    }
    
    // Transition to dash if pressing shift
    if (shift.isDown) {
      this.stateMachine.transition('dash');
      return;
    }
    
    // Transition to idle if not pressing movement keys
    if (!(left.isDown || right.isDown || up.isDown || down.isDown)) {
      this.stateMachine.transition('idle');
      return;
    }
    
    author.body.setVelocity(0);
    if (up.isDown) {
      author.setVelocityY(-100);
      author.direction = 'up';
    } else if (down.isDown) {
      author.setVelocityY(100); // set to author.setVelocityY(100) to move player sprite down
//      author.setVelocityY(100);
  // I changed this to container.setVelocityY(100) to control movement of a container
      author.direction = 'down';
    }
    if (left.isDown) {
      author.setVelocityX(-100);
      author.direction = 'left';
    } else if (right.isDown) {
      author.setVelocityX(100);
      author.direction = 'right';
    }
    
    author.anims.play(`walk-${author.direction}`, true);
  }
}

class SwingState extends State {
  enter(scene, hero) {    
    hero.setVelocity(0);
    hero.anims.play(`swing-${hero.direction}`);
    hero.once('animationcomplete', () => {
      this.stateMachine.transition('idle');
    });
  }
}

class DashState extends State {
  enter(scene, hero) {
    hero.setVelocity(0);
    hero.anims.play(`swing-${hero.direction}`);
    switch (hero.direction) {
      case 'up':
        hero.setVelocityY(-300);
        break;
      case 'down':
        hero.setVelocityY(300);
        break;
      case 'left':
        hero.setVelocityX(-300);
        break;
      case 'right':
        hero.setVelocityX(300);
        break;
    }
    
    // Wait a third of a second and then go back to idle
    scene.time.delayedCall(300, () => {
      this.stateMachine.transition('idle');
    });
  }
}


var GameOverScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GameOverScene ()
    {
      Phaser.Scene.call(this, { key: 'gameOverScene', active: false });
    },
    preload ()
    {
        this.load.image('gameover', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2F800px-Maisstoppelveld_in_de_sneeuw.JPG?v=1574372070995');
            
    },

    create ()
    {                
        this.GameOverScene = this.add.sprite(400, 300, 'gameover').setOrigin(0.5, 0.5);
        this.add.text(20, 20, 'Game Over Scene', { fontFamily: 'Arial', fontSize: 64, color: '#ffff00' });
  
        var playAgainText = this.add.text(200, 160, 'Play Again', {fontFamily: 'Arial', fontSize: 64, color: '#0000ff'}).setStroke ('0x0000ff', 4);
      // this code is not working. very puzzling ?? I put a bracket after pointer down!!!! 
        playAgainText.setInteractive().on('pointerdown', function() { 
            this.scene.scene.start('gameScene');
        });
    
        
        var mainMenuText = this.add.text(200, 320, 'Main Menu', {fontFamily: 'Arial', fontSize: 64, color: '#0000ff'}).setStroke ('0x0000ff', 4);
        mainMenuText.setInteractive().on('pointerdown', function () {
          this.scene.scene.start('menuScene');
        });
                                      
    
        var exitText = this.add.text(200, 460, 'Roll Credits and Exit', {fontFamily: 'Arial', fontSize: 64, color: '#0000ff'}).setStroke ('0x0000ff',4);
        exitText.setInteractive().on('pointerdown', function () {
          this.scene.scene.start('creditsScene');
        });
    }        
});
var CreditsScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:
    function CreditsScene ()
    {
       Phaser.Scene.call(this, { key: 'creditsScene', active: false });
    },

    preload ()
    {
        this.load.image('credits', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2F800px-%C3%89p%C3%B4ne_-_r%C3%A9colte_du_ma%C3%AFs01.jpg?v=1574372081770');
        this.load.bitmapFont('desyrel', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Fdesyrel.png?v=1587662275121', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Fdesyrel.xml?v=1587662868526');

    },
    
    create ()
    {
       this.creditsbackground = this.add.sprite(400, 300, 'credits').setOrigin(0.5, 0.5);

  //      this.add.bitmapText(200,200, 'desyrel', 'bitmap text\n on the screen');    

        var text1 = this.add.text(40, 10, 'Scrolling Credits Screen', { fontFamily: 'Arial', fontSize: 64, color: '#ffff00' });
        text1.setStroke('#00ff00', 16);
        text1.setShadow(2, 2, "#333333", 2, true, true);

     
        var txt10 = this.add.text(80, 100, 'click these words to return to Splash screen', { fontFamily: 'Arial', fontSize: 32, color: 'LawnGreen'}).setStroke('0x0000ff', 4);
        txt10.setInteractive().on('pointerdown', function() {
            //Let's start another scene with start
            this.scene.scene.start('bootScene');
        });
  
 /*       
       // this.add.text(30, 450, 'click to change screen to Splash screen scene', "Shadow Both", { fontFamily: 'Arial', fontSize: 32, color: '#000000'});
      //  this.text.setStroke('#de77ae', 32);
       
   //     var text3 = this.add.text(20, 410, "Click image to change screen to Splash screen scene", { fontFamily: "Arial Black", fontSize: 28, color: "#c51b7d" });
   //     text3.setStroke('#de77ae', 16);
        //  Apply the shadow to the Stroke and the Fill (this is the default)
   //     text3.setShadow(2, 2, "#333333", 2, true, true);
*/      
        var txt20 = this.make.text({ x: 300, y: 500, text: 'Main Menu',
            origin: { x: 0.5, y: 0.5 },
            style: { 
                font: 'bold 32px Helvetica',
                strokeThickness: 6,
                fill: 'blue',
                wordWrap: { width: 500 }
            }
        });      
                  
        txt20.setInteractive().on('pointerdown', function () { 
            this.scene.start('menuScene'); // as menu option, will be programmed to return to menu screen
        }, this);
      // The ending scene of the script of "Field of Dreams" is used here for educational purposes to test the scrolling text
        var content = ["", 
                       "", 
                       "", 
                       "", 
                       "CATCHER",
          "Hi, I just wanted to thank you",
          "folks for putting up the field",
          "and letting us play here.",
          "I'm John Kinsella.", 
          "They shake his hand.",
          "",             
                         "RAY",
          "I'm Ray. My wife Annie. And this",
          "is my daughter, Karin.",
          "",
                         "(TO KARIN)",
          "Karin, this is...",
          "He almost says 'My father.'",
          "",
                         "RAY",
           "",
                         "KARIN",
           "",
                         "JOHN",
          "Ray and Annie are beaming.",
          "Annie takes Karin's hand.",
          "",
                         "ANNIE",
          "We're going to let you two talk.",
          "I have to go look after our guests.",
          "Someone's gotta start collecting",
          "admission if we're going to keep",
          "this place.",
          "(to the Catcher)",
          "Very nice meeting you.",
          "",
                         "JOHN",
          "M' am.",
           "",
                        "ANNIE",
          "hoists Karin up and totes her", 
          "toward the tourists waiting",
          "in front of the house.",
           "",
              "RAY AND JOHN",
         "watch them for a while, then",
         "start to stroll across the field.",
         "",  
         "",  
         "",
         "",
         "Mitchy's Maize",
         "Production Coordinator",
         "Quasar Xeltentat", 
         "Second Life Avatar",
         "",
         "Background Images",
          "Webpage Background Image",
          "https://commons.m.wikimedia.org/wiki/File:Maize_Maze_at_Metton_-_geograph.org.uk_-_24223.jpg",
          "Author: Nick Pounder", 
          "Maize Maze at Metton",
          "CC BY-SA 2.0",
                       "",
          "Splash Screen",
          "File:NRCSOH07012 - Ohio (717402)",
          "(NRCS Photo Gallery).jpg",
          "Photo by Scott Bauer",
          "Photo courtesy of USDA Natural Resources Conservation Service. / Public Domain",
          "",
          "Main Menu Screen",
          "https://commons.m.wikimedia.org/wiki/File:Corn_Field.JPG",
          "Chandipur, Sundorganj, Gaibandha",
          "Author: Khairuzzaman",                      
        "",
        "Options Menu Screen",
        "https://commons.m.wikimedia.org/wiki/File:Maize_diversity_in_Vavilovs_office_(3421259242).jpg",
        "Author: Luigi Guarino from Suva, Fiji",
        "",
        "Game Over Screen",
        "https://commons.m.wikimedia.org/wiki/File:Maisstoppelveld_in_de_sneeuw.JPG",
         "",
        "Credits Screen",
        "https://commons.m.wikimedia.org/wiki/File:%C3%89p%C3%B4ne_-_r%C3%A9colte_du_ma%C3%AFs01.jpg",     
         "Author: Spedona",
         "GNU Free Documentation License, Version 1.2",
         "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
         "",              "",
        "Music",
        "Truth of the Legend by Kevin MacLeod (incompetech.com)",
        "Licensed under Creative Commons: By Attribution 4.0 License",
        "http://creativecommons.org/licenses/by/4.0/",         
        "",
         "",              
        "Sound Effects",
          "",             
         "Tilesets",
          "Soil and Corn tileset(very slightly",
          "modified) - creator Daniel Eddeland.",
           "https://opengameart.org/content/lpc-farming-tilesets-magic-animations-and-ui-elements",
         "",
         "Sprites",
          "",
          "",
         "Tile Maps",
         "",
         "Lead Programmer",
         "Coders",
         "Paul Gowan",
         "",
         "", 
         "",
         "",
         "",                                    
                       "RAY",
          "You catch a good game.",
"",
                         "JOHN",
          "Thank you. It's so beautiful here.",
          "Its like - well for me, it's like",
          "a dream come true.",
          "Ray cannot speak. He nods.",
"",
                         "JOHN",
          "Can I ask you something?",
          "Again, Ray nods.",
"",
                         "JOHN",
          "Is this heaven?",
          "Ray smiles and shakes his head",
          "no.",
"",
                         "RAY",
          "It's Iowa.",
          "",
                         "JOHN",
          "Iowa. I could've sworn this was",
          "heaven.",
          "",
                          "RAY",           
          "stops and looks intently at John.",
          "He asks this question as if he",
          "were asking the secret of life.",
          "Maybe he is.",
          "",
                         "RAY",
          "Is there a heaven?",
"",
                         "JOHN",             
          "takes time to answer that.",
          "He looks up at the night sky",
          "and searches it.",
"",
                         "JOHN",
          "Oh, yeah...",
          "Then he looks square into Ray's",
          "eyes.",
"",
                         "JOHN",
          "Heaven's where dreams come true.",
             "",        
                        "RAY",
          "looks toward the house and sees",
          "his wife and daughter on the",
          "veranda, a moon bright as butter",
          "silvering the night above them.",
          "He smiles.",
          "He finally understands.",
          "He turns back to John and nods.",
"",
                         "RAY",
          "Then maybe this is heaven.",
"",
                         "JOHN",
          "smiles wisely in return.",
"",
                         "JOHN",
          "Well...good night, Ray.",
"",
                         "RAY",
          "Good night.",
"",
                         "MASTER",
"",
          "John starts to walk off toward",
          "the door in the outfield fence.",
"",
                         "RAY",
          "Hey!",
          "John turns back. Ray is holding",
          "a ball.",
"",
                         "RAY",
          "You wanna have a catch?",
          "John closes his eyes for a second,",
          "and when he opens them; there is",
          "the hint of moisture. Does he",
          "know Ray is his son?",
"",
                         "JOHN",
          "I'd like that.",
"",
          "Ray tosses him the ball, picks up",
          "a glove lying there, and puts it",
          "on.",
"",
          "They throw the ball back and",
          "forth.",
"",
          "And as we pull up higher and",
          "higher we see a father and son",
          "bathed by white floodlights and",
          "car headlights... on the silent,",
          "satiny green of a baseball",
          "diamond at the edge of a",
          "cornfield.",
"",
                         "FADE OUT",
"",
                         "THE END",
"",
"",
"",
    "Field of Dreams",
"",
"Writers : Phil Alden Robinson",
"Genres :  Drama  Family  Fantasy",
"",
                       "",
                       "",
                       "",
                       "",
                       ""
        ];
   //     this.add.image(400, 300, 'credits').setOrigin(0.5, 0.5);
    
        scroller = this.add.dynamicBitmapText(20, 100, 'desyrel', content, 48);

        scroller.setSize(800, 1024);
     
    },
    
    update (time, delta) 
    {
      // speed of scroll * delta (0.8 is quite fast, 0.08 a little too slow, this also might be device specific)
            scroller.scrollY += 0.2 * delta;
      // scroller.scrollY > length of scroll or alotted time to scroll
            if (scroller.scrollY > 21000)
            {
                scroller.scrollY = 0;
            }
    
    }

});

// mobile SG3, w:1024, height: 768
let config = {
  type: Phaser.CANVAS,
  backgroundColor: '#00ff00', // variation: backgroundColor: 0xffff00,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'gameArea', // div tag id
    width: 800,
    height: 600
  },
  pixelArt: true,
  zoom: 1,
  physics: {
    default: 'arcade'
  }, 
  audio: {
      disableWebAudio: true
  },
  /*
  plugins: {
    global: [
      {
        key: 'RandomNamePlugin',
        plugin: SwipePlugin,
        start: true,
        data: {
          // you can give your value for min offset
          offset: 123
        }
      }
    ]
  },
  */
  scene: [ BootScene, MenuScene, OptionsScene, SceneMain, GameScene, FSMScene, GameOverScene, CreditsScene ] // adding Titlescene or SceneMain (the external scene file) to the list gives a SceneMain not defined error
};

var content = null;
var scroller;
var game = new Phaser.Game(config);// client-side js 


