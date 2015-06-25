// Helper functions

// Screen
function Display(width, height) {
  this.canvas = document.createElement("canvas");
  this.canvas.width = this.width = width;
  this.canvas.height = this.height = height;
  this.context = this.canvas.getContext("2d");

  document.body.appendChild(this.canvas);
}

Display.prototype.drawSprite = function (sp, x, y) {
  this.context.drawImage(sp.image, sp.x, sp.y, sp.w, sp.h, x, y, sp.w, sp.h);
};

Display.prototype.clear = function () {
  this.context.clearRect(0, 0, this.width, this.height);
};

// Sprites

function Sprite(image, x, y, w, h) {
  this.image = image;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

// InputHandlers

function InputHandler() {
  this.down = {};
  this.pressed = {};

  document.addEventListener('keydown', function(event) {
    this.down[event.keyCode] = true;
  }.bind(this));
  document.addEventListener('keyup', function(event) {
    delete this.down[event.keyCode];
    delete this.pressed[event.keyCode];
  }.bind(this));
}

InputHandler.prototype.isDown = function(code) {
  return this.down[code];
};

InputHandler.prototype.isPressed = function(code) {
  if (this.pressed[code]) {
    return false;
  } else if (this.down[code]) {
    return this.pressed[code] = true;
  }

  return false;
};
