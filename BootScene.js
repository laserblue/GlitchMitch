/* added for remembering names of scenes - remove later
import BootScene from './BootScene.js'; // check capitalization for all imported file names
import MenuScene from './MenuScene.js';
import OptionsScene from './OptionsScene.js';
import SceneMain from './sceneMain.js';
import GameScene from './GameScene.js';
import FSMScene from './FsmScene.js';
import GameOverScene from './GameOverScene.js';
import CreditsScene from './CreditsScene.js';
*/
export default class BootScene extends Phaser.Scene {

	constructor() {
		super('BootScene');
	}

	preload() {
		this.load.image('splash', 'images/tut/splashscreen.png'); // revise image name and filename
	}

	create() {
		this.scene.start("MenuScene");
	}

}
