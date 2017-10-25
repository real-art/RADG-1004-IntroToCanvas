function draw() {
    const canvas = document.querySelector('#my_canvas');
    const context = canvas.getContext('2d'); //A common variable name used here is "ctx", but I'll use "context" for clarity

    /* Use the following code to set context instead if you need to check for browser support/provide a fallback
    if (canvas.getContext) {
        const context = canvas.getContext('2d');
    } else {
        // Do something as a fallback.
    }
    */
}

draw();