class Spritename extends Phaser.GameObjects.Sprite
{
  constructor(config)
  {
    super(config.scene, config.x, config.y, "genericAuthorSprite");
    config.scene.add.existing(this);
  }
}