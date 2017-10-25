function draw() {
    const canvas = document.querySelector('#my_canvas');
    canvas.width = 800;
    canvas.height = 800;

    const context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(400, 300);
    context.arcTo(500, 300, 500, 400, 100);
    context.arcTo(500, 500, 400, 500, 100);
    context.arcTo(300, 500, 300, 400, 100);
    context.arcTo(300, 300, 400, 300, 100);
    context.fill();
}

draw();