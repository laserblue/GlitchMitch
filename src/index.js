// global Phaser, BootScene, MenuScene, OptionsScene, CreditsScene, IntroScene, GameScene
// Phaser, BootScene, MenuScene, OptionsScene, SceneMain, GameScene, FSMScene, SecondFloor, CastleBanquet, FantasyOverworld, VillageFestival, CastleStefan, SecretGarden, GameOverScene, CreditsScene */


import Phaser from 'phaser'; // seems to work with either double or single quotes
//import logoImg from './assets/logo.png'; // correct path for index.js NOTE LACK OF QUOTES around logoImg
//import logoImg from 'https://cdn.glitch.global/5946c0e4-5977-405c-ad1d-c71bc52f56f4/1024px-PIA23302-FirstHumansOnMars-ArtistConcept.jpg?v=1642877975676';
import {BootScene} from './scenes/bootScene.js'; // correct path? space around class name?- attempts to get this working again not succeeding
import {MenuScene} from './scenes/menuScene.js';
import {GameScene} from './scenes/gameScene.js';
import {IntroScene} from './scenes/introScene.js';
import {OptionsScene} from './scenes/optionsScene.js';
import {CreditsScene} from './scenes/creditsScene.js';

//import {SceneMain} from './scenes/sceneMain.js';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: [BootScene, MenuScene, GameScene, IntroScene, OptionsScene, CreditsScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  }, 
};
const game = new Phaser.Game(config);



/* 
  scene: {     // delete this when importing sceneMain.js and replace with scene: [ SceneMain ]
    preload: preload,
    create: create
  }
  */
    //  scene: [SceneMain] // square array brackets required? needs comma after ]? space or no space around scene name?
//}; // needs semi-colon?
///*



// */  

// const game = new Game(config);
///*
// The following section works with src/assets/logo.png and Glitch CDN ASSETS folder 
// delete this section when importing sceneMain.js
/*
function preload() {
//  this.load.image('logo', logoImg);// NOTE LACK OF QUOTES around logoImg
  this.load.image( 'logo', 'https://cdn.glitch.global/5946c0e4-5977-405c-ad1d-c71bc52f56f4/USGS-PlanetMars-TopographicalMap.png?v=1642877985728'); // turn OFF 2
}

function create() {
//  const logo = this.add.image(400, 150, "logo");
  const logo = this.add.image(400, 150, 'logo');
  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  });

}
*/
// end of working section
//*/
// William Clarkson Tutorial https://www.youtube.com/watch?v=cXuEJi53BOQ
// ? uses double quotes and semi-colons
// uses braces around imported class name


 // import and export https://www.youtube.com/watch?v=KRu3raWs5Hs
// Module not found: Error: Can't resolve 'https://cdn.glitch.com/5946c0e4-5977-405c-ad1d-c71bc52f56f4%2F1024px-Mars_Map.jpeg?v=1578419309540' in '/app/src'
//  Entrypoint undefined = index.html
// do I need a bundle.js script in body of html file?
// https://www.youtube.com/watch?v=cXuEJi53BOQ
// can't upload an image to src/assets/ nor import from glitch CDN Assets folder
// https://www.youtube.com/watch?v=KRu3raWs5Hs&t=49s modular config file

/*
ERROR in ./src/index.js
Module not found: Error: Can't resolve './src/scenes/sceneMain' in '/app/src'
 @ ./src/index.js 6:0-51 13:10-19
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
---------------------------------------------------------------------
turning off import from assets folder and preloading from Glitch ASSETS CDN path compiles successfully but gives only black screen
WARNING in ./src/index.js 12:10-19
"export 'SceneMain' was not found in './scenes/sceneMain'
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
*/
/*
I'm considering the possibility that maybe the reason I can't get external javascript files to run is because of the webpack config and webpack dev server settings combined with Express.js.
I thought I had the importing working once with export default SceneMain at the bottom of the external javascript file but maybe not. Following several tutorials I still can't get the import to work and I don't know if it's a syntax error or what. I wasted a lot of trying trying to use createLayer() only to find out that I had forgotten that I had to use createStaticLayer() for ver. 21 but apparently it was switched back to createLayer() from ver. 3.16 that the pros used in tutorials for version 3.55.2. That's why the tutorials that all used createLayer() didn't work for me.
https://www.youtube.com/watch?v=3wZXGe-P0OY - webpack dev server front end, express.js backend
https://dev.to/riversun/how-to-run-webpack-dev-server-on-express-5ei9
https://stackoverflow.com/questions/35233291/running-a-node-express-server-using-webpack-dev-server
https://3body-net.medium.com/building-a-dev-server-with-express-and-webpack-761704f0c66a
https://linguinecode.com/post/how-to-setup-webpack-dev-server-react-babel
https://binyamin.medium.com/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
https://corpglory.com/s/express-webpack/
https://www.youtube.com/watch?v=-ObY0k6ha1w


Webpack
webpack dev server with expressjs
https://www.youtube.com/watch?v=3wZXGe-P0OY
https://binyamin.medium.com/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
https://webpack.js.org/guides/development/
https://www.tabnine.com/code/javascript/modules/webpack-dev-server
https://docs.w3cub.com/webpack~1/webpack-dev-server
https://webpack.js.org/api/node/
https://www.section.io/engineering-education/webpack/
https://blog.logrocket.com/transpile-es-modules-with-webpack-node-js/
*/