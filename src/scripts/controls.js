const createControls = (scene) => {
  return scene.input.keyboard.createCursorKeys();
};

const defaultVelocity = 200;

const configControls = (player, controls, scene) => {
  player.setVelocityX(0);
  player.setVelocityY(0);

  if (controls.right.isDown) {
    moveRight(player);
    return;
  }
  if (controls.left.isDown) {
    moveLeft(player);
    return;
  }
  if (controls.up.isDown) {
    moveUp(player);
    return;
  }
  if (controls.down.isDown) {
    moveDown(player);
    return;
  }

  if (controls.space.isDown) {
    attack(player);
    return;
  }
  player.anims.play("player_idle", true);
};

const moveRight = (player) => {
  player.setFlipX(false);
  player.anims.play("player_walk", true);
  player.setVelocityX(defaultVelocity);
};

const moveLeft = (player) => {
  player.setFlipX(true);
  player.anims.play("player_walk", true);
  player.setVelocityX(-defaultVelocity);
};

const moveUp = (player) => {
  player.anims.play("player_walk", true);
  player.setVelocityY(-defaultVelocity);
};

const moveDown = (player) => {
  player.anims.play("player_walk", true);
  player.setVelocityY(defaultVelocity);
};

const attack = (player) => {
  player.anims.play("player_attack", true);
};
