'use strict';

class Segment {

  constructor(x, y, diameter, predecessor) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.predecessor = predecessor;
  }

  computeNewCoordinates() {
    if (this.predecessor.name) {
      let rad = Math.atan2(this.predecessor.x - this.x, this.predecessor.y - this.y);
      this.x += Math.sin(rad) * speed;
      this.y += Math.cos(rad) * speed;
    } else {
      let distance = Math.sqrt(Math.pow(this.predecessor.x - this.x, 2) + Math.pow(this.predecessor.y - this.y, 2));
      if (distance < this.diameter) { return; }

      this.x = this.predecessor.x;
      this.y = this.predecessor.y;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.diameter, 0, Math.PI * 2);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.arc(this.x, this.y, this.diameter, 0, Math.PI * 2);
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

};
