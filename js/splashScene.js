// using calm-potassium project to work out how to run external scene classes (es5 first) but there is a bug in the code.
// calm-potassium is a remix of the birdy-nam-nam code from fselcukcan phaser-many-scenes1 
// unable to get an external scene class file to work for mitchy-maize based on calm-potassium but the birdy-nam-nam code works fine in phaser-many-scenes1 even when moved to js/splashScene.js with change to path in index.html
// There is a problem with changing the scene from loader-scene to lay-scene in calm-potassium. 
// clicking on the click-to-play results in a black screen. Reloading or running a half dozen times seems necessary before lay-scene will run.
// phaser-many-scenes1 seems to have better syncronization of the music and animation in hatch-scene
//
// https://phaser.io/examples/v3/view/demoscene/birdy-nam-nam (no delay or black screen after clicking Budbrain-Productions-click-to-play screen)

const splashSceneConfig = {
  key: "splash-scene",
  active: true
};

const splashScene = new Phaser.Scene(splashSceneConfig);

splashScene.preload = function() {
  this.load.image("splash", 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2F800px-Maize_diversity_in_Vavilovs_office_(3421259242).jpg?v=1574372062843');
};

splashScene.create = function() {
  this.add.image(0, 0, "splash").setOrigin(0);

  this.time.addEvent({
    delay: 1000,
    callback: this.changeScene,
    callbackScope: this
  });
};

splashScene.changeScene = function() {
  this.scene.start("bootScene")
}