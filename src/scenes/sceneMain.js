// global Phaser, SceneMain

import Phaser from "phaser"
//import Scene from "phaser"
//import logoImg from "../assets/logo.png"; // from index.html not index.js???
//import logoImg from 'https://cdn.glitch.global/5946c0e4-5977-405c-ad1d-c71bc52f56f4/1024px-PIA23302-FirstHumansOnMars-ArtistConcept.jpg?v=1642877975676';

export class SceneMain extends Phaser.Scene {     
   constructor() {
      super('SceneMain'); // 'SceneMain' or { key: 'SceneMain', active: true } or config
   }
 //class SceneMain extends Scene {
// Phaser.Scene.call(this, { key: 'demo', active: true });
  preload() {
    this.load.image('logo', 'https://cdn.glitch.global/5946c0e4-5977-405c-ad1d-c71bc52f56f4/1024px-PIA23302-FirstHumansOnMars-ArtistConcept.jpg?v=1642877975676');
//    this.load.image("logo", logoImg)
//    this.load.image('logo', require('../assets/logo.png'));
    
 //   this.load.sceneFile('sceneMain', './scenes/SceneMain.js');
//    this.load.image("logo", "assets/logo.png")
  }
  create() {
    console.log("Ready!");
    const logo = this.add.image(400, 150, 'logo');
/*
    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    });
   this.scene.start('SceneMain');
   */
  }
  update() {}
}

// logoImg is an object (use this method rather than old method with path that is relative to html file)
// 
// It is not necessary to import Glitch CDN image 
// It works! It works!
// ?? I don't need logoImg in Globals line ?? Preview in Window still works when browser cache cleared but preview pane shows unable to find image
// ?? preview pane takes a long time to show image (not sure if logoImg needed in Globals or not)
// How to add CDN image? need import?


//export default SceneMain;



// works ok with single file using either logo.png in assets folder or Glitch CDN image
// doesn't work with external sceneMain.js file in scenes folder.
// ??? why does developer use boot.json file for external scene example for Phaser v.3.55.2? 

// there are quite a few coding variations in tutorials regarding Phaser 3 and export
// Doesn't work based on https://www.youtube.com/watch?v=BZEKW8btG-M&t=317s but then I made a minor change re space around a word and it worked.
// https://www.youtube.com/watch?v=BZEKW8btG-M
// has <script src="build/project.bundle.js" charset="utf-8"></script> in body of index.html
// has no constructor or super in class
// has opening brace on preload and create lines
// whitespace is not supposed to matter but I found that placing the opening brace on the next line does make a difference between whether or not the code works. Same for use of single or double quotes and placement of commas.Very picky.
// William Clarkson also points out in one of his tutorials that the path may have to change when using images in node but that should only apply if I use the provided logo image and not when I use the Glitch CDN image.
// ASSUMING I had the syntax correct and it still didn't work, I'm now looking at why the error involves the path. Is it the webpack config settings that are incorrect?



// ERROR in ./src/index.js
//Module not found: Error: Can't resolve '/assets/logo.png' in '/app/src'
// @ ./src/index.js 7:0-39

/*
ERROR in ./src/scenes/sceneMain.js
Module not found: Error: Can't resolve './assets/logo.png' in '/app/src/scenes'
 @ ./src/scenes/sceneMain.js 26:0-40 44:30-37
 @ ./src/index.js
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html

ERROR in ./src/scenes/sceneMain.js
Module not found: Error: Can't resolve './app/src/assets/logo.png' in '/app/src/scenes'
 @ ./src/scenes/sceneMain.js 26:0-48 44:30-37
 @ ./src/index.js
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html


*/
// https://www.youtube.com/watch?v=s-Lh813u7wk WClarkson Adding images with npm and Webpack
// path to image is from sceneMain.js file so go up two folders "../assets/logo.png"
// now "Site didn't respond" 

// compiled successfully but have only a white screen. aaaggghhhg!!!!!