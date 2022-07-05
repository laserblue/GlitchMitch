// global Phaser, BootScene, MenuScene, GameScene, OptionsScene, CreditsScene, IntroScene

import Phaser from "phaser"

export class IntroScene extends Phaser.Scene {     
   constructor() {
      super('IntroScene');
      this.scroller
   }
 
    preload()
    {
//      this.load.tilemapCSV("map", "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Ffieldtilled.csv?v=1583797600994"); // tilled field 
//      this.load.image("tiles", "https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Fplowed_soil.png?v=1574373407043"); // plowed soil       

       this.load.image("exterior", "https://cdn.glitch.global/dad6f70b-d7f8-4b6b-812a-427943582a20/flatRoof4.png?v=1646414164914");// have not found proper roofing tile to complete angled roof yet
/*
       // load TILED json map
       this.load.image('fieldTileset', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FFieldSoil.png?v=1574372043813');// tileset
       this.load.tilemapTiledJSON('map', 'https://cdn.glitch.global/dad6f70b-d7f8-4b6b-812a-427943582a20/tilemap-editor%20(10).json?v=1647205447966'); // tilemap
*/
/* building exterior
    https://cdn.glitch.global/dad6f70b-d7f8-4b6b-812a-427943582a20/colonialTileset.png?v=1647543905050 // colonial tileset
    https://cdn.glitch.global/dad6f70b-d7f8-4b6b-812a-427943582a20/tilemap-editor%20(5).json?v=1647544214386 // flatRoof

*/
      
      
      
      
      
      
    }

    create()
    { 
       this.exterior = this.add.sprite(400, 300, 'exterior').setScale(0.37, 0.37).setOrigin(0.5, 0.5); // comment out to see array tilemap in upper left corner and tileset image at center

/*
// add code for tilemap here
       var map = this.make.tilemap({ key: 'map' });
       var tiles = map.addTilesetImage('fieldTileset');

       var bottom = map.createStaticLayer('Bottom Layer', tiles, 0, 0);
       var middle = map.createStaticLayer('Middle Layer', tiles, 0, 0);
       var top = map.createStaticLayer('Top Layer', tiles, 0, 0);
*/
      
    // When you create a layer, that becomes the currently 'selected' layer within the map. That
    // means any tile operation on the map right now will be operating on 'Top Layer'.

    // Let's change that:
//       selectLayer(top);

   /*
       //  To use multiple tilesets in a single layer, pass them in an array like this:
    map.createLayer('Tile Layer 1', [ groundTiles, itemTiles, platformTiles ]);

    // map.createLayer('Tile Layer 1', [ groundTiles, itemTiles, platformTiles ]);

    //  Or you can pass an array of strings, where they = the Tileset name
    // map.createLayer('Tile Layer 1', [ 'kenny_ground_64x64', 'kenny_items_64x64', 'kenny_platformer_64x64' ]);
    
    */


      
      ///*    // implement text wrapping for 2 and 6, if possible
        this.add.text(90, 15, 'External Scene (Scene Main)', { fontFamily: 'Arial', fontSize: 48, color: '#ffff00' });
        this.add.text(90, 70, 'Goal: Create tile maps', { fontFamily: 'Arial', fontSize: 32, color: '#ffffff' });
        this.add.text(120, 110, '7. Intro Gravel Road Walking early morning sunsight cutscene', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 130, '1. Research station building exterior (initially, no parked employee cars)', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 150, '2. Empty field', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 170, '3. Marked field with stakes and lines plus animated marking with tractor and marking', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(140, 190, 'implement sprite', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 210, '4. Unplanted marked ranges plus tractor and 4-row maize planter animated sprite', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 230, '5. Planted and growing ranges', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(120, 250, '6. Large world (+120 rows, +18 ranges plus gravel roads, laneway, main site', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
        this.add.text(140, 270, '16.1 hectares/40 acres)', { fontFamily: 'Arial', fontSize: 16, color: '#ffffff' });
/*        this.add.text(200, 300, 'FOR SALE', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });
        this.add.text(120, 360, 'Land, Building, \nFully Stocked And Equipped \nSecret Biotechnology Lab\n and Maize Germplasm', { fontFamily: 'Arial', fontSize: 32, color: '#00ff00'});
        this.add.text(120, 450, 'ASKING PRICE: $9 000 000 USD', { fontFamily: 'Arial', fontSize: 32, color: '#000000'});
        this.add.text(300, 460, '(or Linden Dollar equivalent)', { fontFamily: 'Arial', fontSize: 12, color: '#ffffff'});
*/ 
      // remove interactive text and replace with player object movement to building interior scene      
        var nextScene = this.add.text(200, 500, 'NEXT SCENE >>>', {fontFamily: 'Arial', fontSize: 48, color: '#0000ff'}).setStroke ('0x0000ff',4);
        nextScene.setInteractive().on('pointerdown', function() {
          console.log('From SceneMain to FSMScene');  
            this.scene.scene.start('fsmScene');
        });    // */         
    }
}
