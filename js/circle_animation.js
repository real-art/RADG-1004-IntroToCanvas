const canvas = document.querySelector('#my_canvas');
canvas.width = 800;
canvas.height = 800;

const context = canvas.getContext('2d');
const circle = new Circle(context, 400, 400, 100);

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    circle.draw();
    context.fill();

    circle.x += 1;
    circle.y += 1;

    window.requestAnimationFrame(draw);
}

draw();