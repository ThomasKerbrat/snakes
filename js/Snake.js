'use strict';

class Snake {

  constructor(x, y, size, mouse, initialLength = 5) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.length = initialLength;

    this.segments = [];
    this.segments.push(new Segment(50, 50, 10, mouse));
    for (var i = 0; i < this.length; i++) {
      this.segments.push(new Segment(50, 50, 10, this.segments[this.segments.length - 1]));
    }
  }

  move() {
    for (var index = this.segments.length - 1; index >= 0; index--) {
      var segment = this.segments[index];
      segment.computeNewCoordinates();
    }
  }

  draw() {
    for (var index = this.segments.length - 1; index >= 0; index--) {
      var segment = this.segments[index];
      segment.draw();
    }
  }

}
