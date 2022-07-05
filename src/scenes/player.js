import Phaser from 'phaser'
// import {tileWidth, tileHeight} from '../constants'
export class Player extends Phaser.GameObjects.Sprite // variation: export default class Player extends Phaser.Physics.Arcade.Sprite
{
  constructor(scene, x, y, texture, frame) { // variation: constructor(scene, x, y, character)
    super(scene, x, y, texture, frame);// variation: super(scene, x, y, character, 0)
    scene.add.existing(this);  // this.scene = scene
    scene.physics.add.existing(this);// this.character = character
    this.setDepth(5);
    this.body.setSize(26,41);
    this.createAnims(scene);
    this.speed = 175;
  }
}

/* =========================================================================
preload() {}
create() {
  this.scene.physics.world.enable(this)
  this.scene.add.existing(this)
  this.setCollideWorldBounds(true)
  this.setSize(32, 32)
  this.createAnimations()
}

create Animations() {
  const animationManager = this.anims.animationManager
  
  animationManager.create({
    key: this.charcter + '-left',
    frames: animationManager.generateFrameNumbers(this.character, {
      frames: [1, 5, 9, 13],
    }),
    
    animationManager.create({
    key: this.charcter + '-right',
    frames: animationManager.generateFrameNumbers(this.character, {
      frames: [3, 7, 11, 15],
    }),
    
    animationManager.create({
    key: this.charcter + '-up',
    frames: animationManager.generateFrameNumbers(this.character, {
      frames: [2, 6, 10, 14],
    }),
    
    animationManager.create({
    key: this.charcter + '-down',
    frames: animationManager.generateFrameNumbers(this.character, {
      frames: [0, 4, 8, 12],
    }),
  })
}
*/