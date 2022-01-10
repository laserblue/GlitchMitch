// I want to make the finite state machine code a separate scene


// should the StateMachine class be in init of the fsm scene class or outside of the fsm scene class such as top of client.js ??
class StateMachine {
  constructor(initialState, possibleStates, stateArgs=[]) {
    this.initialState = initialState;
    this.possibleStates = possibleStates;
    this.stateArgs = stateArgs;
    this.state = null;

    // State instances get access to the state machine via this.stateMachine.
    for (const state of Object.values(this.possibleStates)) {
      state.stateMachine = this;
    }
  }

  step() {
    // On the first step, the state is null and we need to initialize the first state.
    if (this.state === null) {
      this.state = this.initialState;
      this.possibleStates[this.state].enter(...this.stateArgs);
    }

    // Run the current state's execute
    this.possibleStates[this.state].execute(...this.stateArgs);
  }

  transition(newState, ...enterArgs) {
    this.state = newState;
    this.possibleStates[this.state].enter(...this.stateArgs, ...enterArgs);
  }
}
// 
class State {
  enter() {

  }

  execute() {

  }
}
// 
// var test1;
/*
let config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'game', // div tag id
    width: 400,
    height: 300,
    zoom: 1
  },
   
  // add RESIZE if necessary
  
  pixelArt: true,
  
  physics: {
    default: 'arcade'
  },
  scene: [FSMScene] // the old code was nested in scene: but I want a separate FSM scene class

*/
/*  
  
  
  
  {  
/* 

//??? strange construction putting all code in scene rather than a scene.js file ???
*/  
    
    init() {
         //  Inject our CSS
    var element = document.createElement('style');

    document.head.appendChild(element);

    var sheet = element.sheet;

    var styles = '@font-face { font-family: "troika"; src: url("assets/fonts/ttf/troika.otf") format("opentype"); }\n';

    sheet.insertRule(styles, 0);

    styles = '@font-face { font-family: "Caroni"; src: url("assets/fonts/ttf/caroni.otf") format("opentype"); }';

    sheet.insertRule(styles, 0);
      
    },     
  
    preload() {
  
      // I want to figure out how to first show nameplates above or below sprites using a container and then change to syncing text and sprites
      // I would prefer not to use webfonts so need to also learn how to use bitmap, retro or css text
      // load webfont for nameplate text -- find other ways to get/use text like bitmap text, retro, css etc. 
//      this.load.image('splashScreen', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Flossy-page1-800px-NRCSOH07012_-_Ohio_(717402)(NRCS_Photo_Gallery).tif.jpg?v=1574372053041');
 //     this.load.image('exteriorBuilding', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FExteriorBldg2.png?v=1574373863351');
 //     this.load.image('loading', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Floading.png?v=1575486396409');
//      this.load.image('brand', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2FEnvelope_astroid.svg.png?v=1574372018313');
    
           
      
      this.load.spritesheet('author', 'https://cdn.glitch.com/dad6f70b-d7f8-4b6b-812a-427943582a20%2Frpg_sprite_walk.png?v=1574371146332', {
        frameWidth: 24,
        frameHeight: 32,
      });
      this.load.spritesheet('hero', 'https://cdn.glitch.com/59aa1c5f-c16d-41a1-bfd2-09072e84a538%2Fhero.png?1551136698770', {
        frameWidth: 32,
        frameHeight: 32,
      });
      
      this.load.image('bg', 'https://cdn.glitch.com/59aa1c5f-c16d-41a1-bfd2-09072e84a538%2Fbg.png?1551136995353');
      
      // add ball from Phaser 3 example Container/Sprite with text
      // https://github.com/photonstorm/phaser3-examples/blob/master/public/assets/demoscene/ball.png
      this.load.image('ball', 'https://cdn.glitch.com/0b1bad74-37f5-487d-b0f1-7d6bac92f07f%2Fball.png?v=1575235181076'); // from github Phaser 3 public/assets folder

      // Web Font Loader script (using Plugin???)
      this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    },
      
    create() {
      
//      this.scene.start("SceneMain");
//    game.state.add('Splash', Splash);
//    game.state.start('Splash');
//  }

// };
      
      this.keys = this.input.keyboard.createCursorKeys();
        
      // Static background
     
      this.add.image(200, 200, 'splashScreen').setScale(0.5, 0.8);
//       this.add.image(200, 200, 'exteriorBuilding').setScale(0.5, 0.7);
//      this.add.image(200, 200, 'loading').setScale(0.5, 0.7);
//      this.add.image(200, 200, 'brand').setScale(0.5, 0.7);
      
      
      // create a container for ball with nameplate to be applied later to author sprites
      
      var container = this.add.container(120, 100);

      var ball = this.add.image(0, 0, 'ball');
//      ball.alpha = 0.8;
      var text = this.add.text(0, 0, 'Use Arrow keys to move');
      text.font = "Arial";
      text.setFontSize(20);
// change to a smaller fontSize (??? text.fontSize?? style: ??? )
      text.setOrigin(0.5, 0.5);
//      text.alpha = 0.5;
      container.add(ball);
      container.add(text);
      container.setScale(1);
  

      this.tweens.add({
        targets: container,
        x: container.x + 100,
        ease: 'Power1',
        duration: 5000,
        delay: 500,
        yoyo: true,
        repeat: -1
      });
  
     
  // Animation definitions
      this.anims.create({
        key: 'Shulldown',
        frameRate: 8,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('hero', {start: 0, end: 3}),
      });
                  
      
      // The movable character - figure out how to synchronize animation within container with movement of container
      var container2 = this.add.container(150, 150);
//      this.hero = this.physics.add.sprite(200, 150, 'hero', 0);
      var hero = this.add.sprite(0, 0, 'hero').play('Shulldown');
      var text = this.add.text(0, 0, 'Shull');
      text.font = "Arial";
      text.setColor('#ffff00');
      text.setFontSize(10); 
      text.setOrigin(0.5, -0.7); // over head name plate (0.5), 1.5) (under foot name plate (0.5, -0.4) 
      container2.add(hero);
      container2.add(text);
      container2.setScale(1);    
   
    this.anims.create({
        key: 'McClintockright',
        frameRate: 8,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('author', {start: 24, end: 31}),
      }); 
    test1 = this.add.text(100, 10, 'Phaser 3.21.0', { fontSize: 24 }).setOrigin(0.5);
      // The loop to generate the name-plated containers of author sprites --(just create a half dozen for demo - very inefficient)
      var container3 = this.add.container(40, 200);
      var genericAuthorSprite = this.add.sprite(0, 0, 'author').play('McClintockright');
//      var genericAuthorSprite = this.add.sprite(0, 0, 'author').play('McClintockright').setInteractive();
      var text = this.add.text(0, 0, 'McClintock');// use a variable for the author sprite name
      text.font = "Arial"; // figure out how to use text.fontSize and style to reduce font size
      text.setFontSize(8);
      text.setColor('#00000');
      text.setOrigin(0.5, -1.7); // (over head name plate (0.5, 1.5)) (under foot name plate (0.5, -0.6) )
      container3.add(genericAuthorSprite);
      container3.add(text);// ****** NOTE: text.setOrigin(0.5, -0.6) was adjusted due to different frame size ********
      container3.setScale(1.0); 
  
//      container3.setInteractive(); // I want to try moving a container with the arrow keys
      
      /*
  
      this.tweens.add({
        targets: container2,
        y: container2.y + 100,
        ease: 'Power1',
        duration: 5000,
        delay: 500,
        yoyo: true,
        repeat: -1
      });
    */ 
  

      this.tweens.add({
        targets: container3,
        x: container3.x + 320,
        ease: 'Power1',
        duration: 5000,
        delay: 500,
        yoyo: true,
        repeat: -1
      });
      
   //    
      this.hero = this.physics.add.sprite(200, 150, 'hero', 0);
      this.hero.direction = 'down';
      this.author = this.physics.add.sprite(150, 50, 'author', 0);
      //     this.author.direction = 'down'
      
      // The state machine managing the hero
      this.stateMachine = new StateMachine('idle', {
        idle: new IdleState(),
        move: new MoveState(),
        swing: new SwingState(), 
        dash: new DashState(),
      }, [this, this.hero]);
      
 // only 1 sprite will be a player sprite - the author-agent sprites will be NPCs
      
      // Animation definitions
      
      
      this.anims.create({
        key: 'walk-down',
        frameRate: 8,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('author', {start: 0, end: 7}),
      });
      this.anims.create({
        key: 'walk-right',
        frameRate: 8,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('author', {start: 24, end: 31}),
      });
      this.anims.create({
        key: 'walk-up',
        frameRate: 8,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('author', {start: 8, end: 15}),
      });
      this.anims.create({
        key: 'walk-left',
        frameRate: 8,
        repeat: -1,
        frames: this.anims.generateFrameNumbers('author', {start: 16, end: 23}),
      });
      
      // NOTE: Sword animations do not repeat
      this.anims.create({
        key: 'swing-down',
        frameRate: 8,
        repeat: 0,
        frames: this.anims.generateFrameNumbers('hero', {start: 16, end: 19}),
      });
      this.anims.create({
        key: 'swing-up',
        frameRate: 8,
        repeat: 0,
        frames: this.anims.generateFrameNumbers('hero', {start: 20, end: 23}),
      });
      this.anims.create({
        key: 'swing-right',
        frameRate: 8,
        repeat: 0,
        frames: this.anims.generateFrameNumbers('hero', {start: 24, end: 27}),
      });
      this.anims.create({
        key: 'swing-left',
        frameRate: 8,
        repeat: 0,
        frames: this.anims.generateFrameNumbers('hero', {start: 28, end: 31}),
      });
    },
    
    update() {
      this.stateMachine.step();
    },
  }
};

class IdleState extends State {
  enter(scene, hero) {
    hero.setVelocity(0);
    hero.anims.play(`walk-${hero.direction}`);
    hero.anims.stop();
  }
  
  execute(scene, hero) {
    const {left, right, up, down, space, shift} = scene.keys;
    
    // Transition to swing if pressing space
    if (space.isDown) {
      this.stateMachine.transition('swing');
      return;
    }
    
    // Transition to dash if pressing shift
    if (shift.isDown) {
      this.stateMachine.transition('dash');
      return;
    }
    
    // Transition to move if pressing a movement key
    if (left.isDown || right.isDown || up.isDown || down.isDown) {
      this.stateMachine.transition('move');
      return;
    }
  }
}

class MoveState extends State {
  execute(scene, hero) {
    const {left, right, up, down, space, shift} = scene.keys;
    
    // Transition to swing if pressing space
    if (space.isDown) {
      this.stateMachine.transition('swing');
      return;
    }
    
    // Transition to dash if pressing shift
    if (shift.isDown) {
      this.stateMachine.transition('dash');
      return;
    }
    
    // Transition to idle if not pressing movement keys
    if (!(left.isDown || right.isDown || up.isDown || down.isDown)) {
      this.stateMachine.transition('idle');
      return;
    }
    
    hero.setVelocity(0);
    if (up.isDown) {
      hero.setVelocityY(-100);
      hero.direction = 'up';
    } else if (down.isDown) {
      hero.setVelocityY(100); 
      hero.direction = 'down';
    }
    if (left.isDown) {
      hero.setVelocityX(-100);
      hero.direction = 'left';
    } else if (right.isDown) {
      hero.setVelocityX(100);
      hero.direction = 'right';
    }
    
    hero.anims.play(`walk-${hero.direction}`, true);
  }
}

class SwingState extends State {
  enter(scene, hero) {
    hero.setVelocity(0);
    hero.anims.play(`swing-${hero.direction}`);
    hero.once('animationcomplete', () => {
      this.stateMachine.transition('idle');
    });
  }
}

class DashState extends State {
  enter(scene, hero) {
    hero.setVelocity(0);
    hero.anims.play(`swing-${hero.direction}`);
    switch (hero.direction) {
      case 'up':
        hero.setVelocityY(-300);
        break;
      case 'down':
        hero.setVelocityY(300);
        break;
      case 'left':
        hero.setVelocityX(-300);
        break;
      case 'right':
        hero.setVelocityX(300);
        break;
    }
    
    // Wait a third of a second and then go back to idle
    scene.time.delayedCall(300, () => {
      this.stateMachine.transition('idle');
    });
  }
}

