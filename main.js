    var config = {
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

    var game = new Phaser.Game(config);

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
