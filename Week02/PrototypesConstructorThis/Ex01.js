function Rectangle(a, b) {
    this.width = a;
    this.height = b;
}

function Square(a) {
    this.width = a;
    this.height = a;
}

function getArea() {
    return this.width * this.height;
}

Square.prototype.getArea = getArea;
Rectangle.prototype.getArea = getArea;

var square = new Square(4);
console.log(square.getArea()); //16

var rect = new Rectangle(4, 5);
console.log(rect.getArea()); //20
