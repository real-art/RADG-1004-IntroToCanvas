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