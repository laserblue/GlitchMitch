// global Phaser, BootScene, MenuScene, GameScene, OptionsScene, CreditsScene, IntroScene

import Phaser from "phaser"

export class CreditsScene extends Phaser.Scene {     
   constructor() {
      super('CreditsScene');
      this.scroller
   }

    preload()
    {
        this.load.image('credits', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2F800px-%C3%89p%C3%B4ne_-_r%C3%A9colte_du_ma%C3%AFs01.jpg?v=1574372081770');
        this.load.bitmapFont('desyrel', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Fdesyrel.png?v=1587662275121', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Fdesyrel.xml?v=1587662868526');

    }
  
    
    create()
    {
       this.creditsbackground = this.add.sprite(400, 300, 'credits').setOrigin(0.5, 0.5);

  //      this.add.bitmapText(200,200, 'desyrel', 'bitmap text\n on the screen');    

        var text1 = this.add.text(40, 10, 'Scrolling Credits Screen', { fontFamily: 'Arial', fontSize: 64, color: '#ffff00' });
        text1.setStroke('#00ff00', 16);
        text1.setShadow(2, 2, "#333333", 2, true, true);

     
        var txt10 = this.add.text(80, 100, 'click these words to return to Splash screen', { fontFamily: 'Arial', fontSize: 32, color: 'LawnGreen'}).setStroke('0x0000ff', 4);
        txt10.setInteractive().on('pointerdown', function() {
            //Let's start another scene with start
            this.scene.scene.start('BootScene');
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
            this.scene.start('MenuScene'); // as menu option, will be programmed to return to menu screen
        }, this);
      // The ending scene of the script of "Field of Dreams" is used here for educational purposes to test the scrolling text
        const content = ["", 
                       "", 
                       "", 
                       "", 
           /*            "CATCHER",
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
         "",*/
         "Mitchy's Maize",
         "Production Coordinator",
         "Quasar Xeltentat", 
         "Second Life Avatar",
         "",
         "Background Images",
          "Webpage Background Image",
          "https://commons.m.wikimedia.org",
          "/wiki/File:Maize_Maze_at_Metton_",
          "-_geograph.org.uk_-_24223.jpg",
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
          "Soil and Corn tileset",
          "(very slightly modified)",
          "creator: Daniel Eddeland",
          "https://opengameart.org/content/",
          "lpc-farming-tilesets-magic-animations-and-ui-elements",
         "LPC Base Tileset",
         "Lanea Zimmerman (AKA Sharm)",
         "",
         "Sprites",
          "rpg_sprite_walk.png by arikel",
          "on OpenGameArt.org",
          "https://opengameart.org/content/2d-rpg-character-walk-spritesheet",
         "",
         "Tile Maps",
         "",
         "Lead Programmer",
         "",
         "Coders",
         "Paul C. Gowan",
         "",
         "", 
         "",
         "",
         "",                                    
         /*              "RAY",
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
  */                     "",
                       "",
                       "",
                       ""
        ];
   //     this.add.image(400, 300, 'credits').setOrigin(0.5, 0.5);
    
        this.scroller = this.add.dynamicBitmapText(20, 100, 'desyrel', content, 48);

        this.scroller.setSize(800, 1024);
     
    }
    
    update (time, delta) 
    {
      // speed of scroll * delta (0.8 is quite fast, 0.08 a little too slow, this also might be device specific)
            this.scroller.scrollY += 0.2 * delta;
      // scroller.scrollY > length of scroll or alotted time to scroll
            if (this.scroller.scrollY > 8400) // long scroll 21000
            {
              this.sys.game.destroy(true);  
             // this.scroller.scrollY = 0;
            } // else {
              //this.sys.game.destroy(true);
           // }
    }

}
/*
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
  
  scene: [ BootScene, MenuScene, OptionsScene, SceneMain, GameScene, FSMScene, SecondFloor, CastleBanquet, FantasyOverworld, VillageFestival, CastleStefan, SecretGarden, GameOverScene, CreditsScene ] // adding Titlescene or SceneMain (the external scene file) to the list gives a SceneMain not defined error
};

var content = null;
var scroller;
var game = new Phaser.Game(config);// client-side js 

*/
