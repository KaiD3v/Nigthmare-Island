class StartGame extends Phaser.Scene {
  preload() {
    this.load.image("tiles", "./assets/maps/grass.png");
    this.load.image("border", "./assets/maps/water.png");
    this.load.tilemapTiledJSON("map", "./assets/maps/gamemap.json");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileSetGrass = map.addTilesetImage("grass", "tiles"); // Correção aqui
    const tileSetWater = map.addTilesetImage("water", "border"); // Correção aqui

    const ground = map.createLayer("grass", tileSetGrass, 0, 0);
    const water = map.createLayer("water", tileSetWater, 0, 0);
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
      gravity: { y: 200 },
    },
  },
};

const game = new Phaser.Game(config);
