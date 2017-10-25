class Circle {
    constructor(context, center_x, center_y, radius) {
        this.context = context;
        this.x = center_x;
        this.y = center_y;
        this.radius = radius;
    }

    draw() {
        this.context.beginPath();
        this.context.moveTo(this.x, (this.y - this.radius));
        this.context.arcTo((this.x + this.radius), (this.y - this.radius), (this.x + this.radius), this.y, this.radius);
        this.context.arcTo((this.x + this.radius), (this.y + this.radius), this.x, (this.y + this.radius), this.radius);
        this.context.arcTo((this.x - this.radius), (this.y + this.radius), (this.x - this.radius), this.y, this.radius);
        this.context.arcTo((this.x - this.radius), (this.y - this.radius), this.x, (this.y - this.radius), this.radius);
    }
}

function draw() {
    const canvas = document.querySelector('#my_canvas');
    canvas.width = 800;
    canvas.height = 800;

    const context = canvas.getContext('2d');

    const circle = new Circle(context, 400, 400, 100);
    circle.draw();

    context.fill();
}

draw();