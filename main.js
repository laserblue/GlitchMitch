/* change to scene class names
import BootScene from './BootScene.js';
import PreloadScene from './PreloadScene.js';
import TitleScene from './TitleScene.js';
import InstructionScene from './InstructionScene.js';
import GameScene from './GameScene.js';
import EndScene from './EndScene.js';

// Load our scenes
var bootScene = new BootScene();
var preloadScene = new PreloadScene();
var titleScene = new TitleScene();
var instructionScene = new InstructionScene();
var gameScene = new GameScene();
var endScene = new EndScene();
*/
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    };

    const game = new Phaser.Game(config);
/*
// load scenes
game.scene.add('BootScene', bootScene);
game.scene.add('PreloadScene', preloadScene);
game.scene.add('TitleScene', titleScene);
game.scene.add('InstructionScene', instructionScene);
game.scene.add("GameScene", gameScene);
game.scene.add("EndScene", endScene);


// start title
game.scene.start('BootScene');
*/
// remove preload and create
    function preload ()
    {
    //    this.load.image('background', 'Assets/Maize_Maze_at_Metton_-_geograph.org.uk_-_24223.jpg');
        this.load.image('goddess', 'Assets/Relief_with_Maize_Goddess_(Chicomecóatl).jpg');
    }

    function create ()
    {
        this.add.image(400, 300, 'goddess');

    }
// Tutorial: https://www.patchesoft.com/phaser-3-template
