export class SimpleScene extends Phaser.Scene {
  create() {
    let clickCount = 0;
    this.clickCountText = this.add.text(100, 200, '');

    const clickButton = this.add.text(100, 100, 'Click me!', { fill: '#0f0' })
      .setInteractive()
      .on('pointerdown', () => this.updateClickCountText(++clickCount) );// es6 

    this.updateClickCountText(clickCount);
  }

  updateClickCountText(clickCount) {
    this.clickCountText.setText(`Button has been clicked ${clickCount} times.`);
  }
}