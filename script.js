"use strict";
/** @type {HTMLCanvasElement} */ //to display canvas methods in vscode

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const canvasWidth = (canvas.width = 500);
const canvasHeight = (canvas.height = 1000);

class Enemy {
  constructor() {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.width = 100;
    this.height = 100;
    this.speed = Math.random() * 4 - 2; //-2 to 2 range
  }
  resetFrame() {
    this.x += this.speed;
    this.y += this.speed;
  }
  draw() {
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

const enemyCount = 100;
const enemies = [];
for (let i = 0; i < enemyCount; i++) {
  enemies.push(new Enemy());
}

function animate() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  enemies.forEach((enemy) => {
    enemy.resetFrame();
    enemy.draw();
  });
  requestAnimationFrame(animate);
}

animate();
