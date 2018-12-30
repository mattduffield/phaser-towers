
const config = {
  type: Phaser.AUTO,
  parent: 'content', 
  width: 640,
  height: 512,
  scene: {
    key: 'main',
    preload: preload,
    create: create,
    update: update
  }
};
const game = new Phaser.Game(config);
let graphics;
let path

function preload() {
  // load the game assets - enemy and turret atlas
  this.load.atlas('sprites', 'assets/spritesheet.png', 'assets/spritesheet.json');
  this.load.image('bullet', 'assets/bullet.png');
}
function create() {
  // this graphics element is only for visualization, 
  // its not related to our path
  var graphics = this.add.graphics();    
  
  // the path for our enemies
  // parameters are the start x and y of our path
  path = this.add.path(96, -32);
  path.lineTo(96, 164);
  path.lineTo(480, 164);
  path.lineTo(480, 544);
  
  graphics.lineStyle(3, 0xffffff, 1);
  // visualize the path
  path.draw(graphics);
}
function update() {

}

let Enemy = new Phaser.Class({
  Extends: Phaser.GameObjects.Image,
  initialize: function Enemy (scene) {
    Phaser.GameObjects.Image.call(this, scene, 0, 0, 'sprites', 'enemy');
  },
  update: function (time, delta) {
  }
});