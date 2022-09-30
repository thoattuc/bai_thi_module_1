// Tao lop Rectangle
class Rectangle {
    x;
    y;
    width;
    height;
    color;
    canvas;
    constructor(x,y,width,height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
// Tao phuong thuc render
    render() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();

    }
    
}
// Khoi tao hinh chu nhat theo yeu cau :
let rect =new Rectangle(10, 10, 200, 100, "#000000");
rect.render();