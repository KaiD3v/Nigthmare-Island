class StartGame extends Phaser.Scene {
  preload() {
    this.load.image("tiles", "./assets/maps/grass.png");
    this.load.image("border", "./assets/maps/water.png");
    this.load.tilemapTiledJSON("map", "./assets/maps/gamemap.json");
    loadSprites(this);
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileSetGrass = map.addTilesetImage("grass", "tiles");
    const tileSetWater = map.addTilesetImage("water", "border");

    const ground = map.createLayer("grass", tileSetGrass, 0, 0);
    const water = map.createLayer("water", tileSetWater, 0, 0);

    const player = createPlayer(this);
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 640,
  parent: "game-container",
  scene: StartGame,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);
