function draw() {
    const canvas = document.querySelector('#my_canvas');
    canvas.width = 800;
    canvas.height = 800;

    const context = canvas.getContext('2d');

    // context.fillStyle = 'red';
    context.fillRect(250, 250, 200, 200);
    // context.strokeRect(250, 250, 200, 200);
}

draw();