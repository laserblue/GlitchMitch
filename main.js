/* change to scene class names BootScene, MenuScene, OptionsScene, SceneMain, GameScene, FSMScene, GameOverScene, CreditsScene
import BootScene from './BootScene.js'; // check capitalization for all imported file names
import MenuScene from './MenuScene.js';
import OptionsScene from './OptionsScene.js';
import SceneMain from './sceneMain.js';
import GameScene from './GameScene.js';
import FSMScene from './FsmScene.js';
import GameOverScene from './GameOverScene.js';
import CreditsScene from './CreditsScene.js';

// Load our scenes - !!! check all capitalization
var bootScene = new BootScene();
var menuScene = new MenuScene();
var optionsScene = new OptionsScene();
var sceneMain = new SceneMain();
var gameScene = new GameScene();
var fsmScene = new FSMScene();
var gameoverScene = new GameOverScene();
var creditsScene = new CreditsScene();
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
        scene: {       //  array no longer required if use game.scene.add????
            preload: preload,
            create: create
        }
    };

    const game = new Phaser.Game(config);
/*
// load scenes - !!! check all capitalization
game.scene.add('BootScene', bootScene);
game.scene.add('MenuScene', menuScene);
game.scene.add('OptionsScene', optionsScene);
game.scene.add('SceneMain', sceneMain);
game.scene.add("GameScene", gameScene);
game.scene.add("FSMScene", fsmScene);
game.scene.add("GameOverScene", gameoverScene);
game.scene.add("CreditsScene", creditsScene);


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
